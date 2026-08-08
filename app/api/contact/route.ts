import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nome, e-mail e mensagem são obrigatórios" },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "E-mail inválido" },
        { status: 400 }
      )
    }

    // Send email using Resend or another email service
    // For now, we'll use a simple fetch to a mailto link workaround
    // In production, you should use a service like Resend, SendGrid, or Nodemailer
    
    const emailContent = `
Nova mensagem de contato - Gear Sec

Nome: ${name}
E-mail: ${email}
Empresa: ${company || "Não informada"}

Mensagem:
${message}
    `.trim()

    // Destinatário do e-mail - usa variável de ambiente ou valor padrão
    const contactEmail = process.env.CONTACT_EMAIL || "gearsec@gearsec.com.br"

    // If RESEND_API_KEY is available, use Resend
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Gear Sec <contato@ghostfiap.com.br>",
          to: [contactEmail],
          reply_to: email,
          subject: `Novo Contato - ${name}`,
          text: emailContent,
        }),
      })

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json()
        console.error("Resend error:", errorData)
        return NextResponse.json(
          { error: "Erro ao enviar e-mail. Tente novamente mais tarde." },
          { status: 500 }
        )
      }

      return NextResponse.json({ 
        success: true, 
        message: "Mensagem enviada com sucesso!" 
      })
    }

    // Fallback: Log the contact request (in production, configure an email service)
    console.log("=== NOVO CONTATO ===")
    console.log(emailContent)
    console.log("====================")

    // Return success - in production, you should configure RESEND_API_KEY
    return NextResponse.json({ 
      success: true, 
      message: "Mensagem enviada com sucesso!",
      note: "Configure RESEND_API_KEY para envio de e-mails em produção"
    })

  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    )
  }
}
