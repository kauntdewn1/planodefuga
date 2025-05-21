import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Verificar se é uma requisição POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  // Log das variáveis de ambiente (sem mostrar senhas)
  console.log('Configurações SMTP:', {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    user: process.env.EMAIL_USER,
    hasPassword: !!process.env.EMAIL_PASSWORD
  });

  // Verificar variáveis de ambiente
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_PORT || !process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.log('Variáveis de ambiente faltando:', {
      host: !process.env.EMAIL_HOST,
      port: !process.env.EMAIL_PORT,
      user: !process.env.EMAIL_USER,
      password: !process.env.EMAIL_PASSWORD
    });
    return res.status(500).json({ 
      error: 'Configurações de email incompletas',
      details: {
        host: !process.env.EMAIL_HOST,
        port: !process.env.EMAIL_PORT,
        user: !process.env.EMAIL_USER,
        password: !process.env.EMAIL_PASSWORD
      }
    });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_PORT === '465',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    debug: true, // Ativar debug do nodemailer
    logger: true  // Ativar logger do nodemailer
  });

  try {
    console.log('Iniciando verificação da conexão SMTP...');
    // Verificar conexão SMTP
    await transporter.verify();
    console.log('Conexão SMTP verificada com sucesso');

    console.log('Preparando envio do email...');
    // Enviar email de teste
    const info = await transporter.sendMail({
      from: `"Plano de Fuga" <${process.env.EMAIL_USER}>`,
      to: 'nettoaeb1@gmail.com',
      subject: 'Teste de Envio - Plano de Fuga',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #f59e0b;">Sua fuga foi autorizada!</h1>
          <p>Olá!</p>
          <p>Obrigado por adquirir o livro <strong>Plano de Fuga</strong>. Você está dando o primeiro passo rumo à sua liberdade.</p>
          
          <p><strong>📘 Acesse agora o livro completo (PDF):</strong><br />
            <a href="https://drive.google.com/file/d/1Jquf_zqCplHV0Ycnu8AV-hKpSFkqjQCE/view?usp=sharing" style="color: #f59e0b;">
              Baixar Plano de Fuga
            </a>
          </p>

          <p><strong>🛠️ Bônus: WorkBook de aplicação prática:</strong><br />
            <a href="https://drive.google.com/file/d/1HdcrI8kEQ840mlq9rYFB6hJNNebxCjK6/view?usp=sharing" style="color: #f59e0b;">
              Baixar WorkBook
            </a>
          </p>

          <p>Não se esqueça de entrar em nosso grupo exclusivo no WhatsApp:</p>
          <p>
            <a href="https://chat.whatsapp.com/C3qRZDCkrLZ9r2ECwmElJs" style="color: #f59e0b;">
              Acessar Grupo do WhatsApp
            </a>
          </p>

          <p>Boa leitura e bem-vindo à sua jornada de liberdade!</p>
          <p>Thiago Tidilodo<br />Central de Fugas</p>
        </div>
      `,
    });

    console.log('Email enviado com sucesso:', {
      messageId: info.messageId,
      response: info.response,
      accepted: info.accepted,
      rejected: info.rejected
    });

    res.status(200).json({ 
      message: 'E-mail enviado com sucesso!',
      details: {
        messageId: info.messageId,
        accepted: info.accepted,
        rejected: info.rejected
      }
    });
  } catch (error) {
    console.error('Erro detalhado ao enviar email:', {
      name: error.name,
      message: error.message,
      code: error.code,
      command: error.command,
      responseCode: error.responseCode,
      response: error.response,
      stack: error.stack
    });

    res.status(500).json({ 
      error: 'Falha ao enviar e-mail',
      details: {
        name: error.name,
        message: error.message,
        code: error.code
      }
    });
  }
} 