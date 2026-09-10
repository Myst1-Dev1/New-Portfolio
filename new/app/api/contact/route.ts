import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const description = formData.get('description') as string;
    const file = formData.get('file') as File | null;

    if (!name || !email || !description) {
      return NextResponse.json(
        { error: 'Preencha todos os campos obrigatórios.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configura os anexos se o usuário tiver enviado algum arquivo
    const attachments = [];
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'jvsoftdev15@gmail.com',
      subject: `Nova mensagem de contato de: ${name}`,
      text: `
        Nome: ${name}
        E-mail: ${email}
        
        Mensagem / Projeto:
        ${description}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #0c0e15; color: #ffffff; border-radius: 8px;">
          <h2 style="color: #38bdf8;">Nova Proposta / Contato Recebido</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <hr style="border-color: #1f2637;" />
          <p><strong>Descrição:</strong></p>
          <p style="background: #10131b; padding: 12px; border-radius: 6px; color: #d4d4d8;">${description.replace(/\n/g, '<br>')}</p>
          ${file && file.size > 0 ? `<p style="color: #38bdf8; font-size: 12px; margin-top: 15px;">📎 Este e-mail possui um arquivo anexo (${file.name}).</p>` : ''}
        </div>
      `,
      attachments: attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'E-mail enviado com sucesso!' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json(
      { error: 'Erro interno ao tentar enviar a mensagem.' },
      { status: 500 }
    );
  }
}