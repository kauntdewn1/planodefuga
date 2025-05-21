import nodemailer from 'nodemailer';

// Função para criar o transporter com retry
const createTransporter = () => {
  console.log('Criando transporter com configurações:', {
    service: 'gmail',
    user: process.env.EMAIL_USER
  });

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    debug: true,
    logger: true
  });
};

// Função para enviar o produto por e-mail
export async function sendProductEmail(email) {
  console.log('Iniciando envio de e-mail para:', email);
  
  try {
    // Verificar variáveis de ambiente
    const envVars = {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    };

    console.log('Verificando variáveis de ambiente:', {
      user: !!envVars.user,
      pass: !!envVars.pass
    });

    if (!envVars.user || !envVars.pass) {
      throw new Error('Variáveis de ambiente incompletas');
    }

    // Criar transporter
    const transporter = createTransporter();
    console.log('Transporter criado');

    // Verificar conexão
    console.log('Verificando conexão SMTP...');
    await transporter.verify();
    console.log('Conexão SMTP verificada com sucesso');

    // Preparar e-mail
    const mailOptions = {
      from: process.env.EMAIL_USER, // Usar o mesmo e-mail configurado
      to: email,
      subject: 'Seu Plano de Fuga está pronto!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #f59e0b;">Sua fuga foi autorizada!</h1>
          <p>Olá!</p>
          <p>Obrigado por adquirir o livro "Plano de Fuga". Em breve você receberá o PDF do livro.</p>
          <p>Não se esqueça de entrar em nosso grupo exclusivo no WhatsApp:</p>
          <p><a href="https://chat.whatsapp.com/C3qRZDCkrLZ9r2ECwmElJs" style="color: #f59e0b;">Acessar Grupo do WhatsApp</a></p>
          <p>Boa leitura e bem-vindo à sua jornada de liberdade!</p>
          <p>Thiago Tidilodo<br>Central de Fugas</p>
        </div>
      `
    };

    console.log('Enviando e-mail...');
    const info = await transporter.sendMail(mailOptions);
    console.log('E-mail enviado com sucesso:', {
      messageId: info.messageId,
      response: info.response,
      accepted: info.accepted,
      rejected: info.rejected
    });

    return true;
  } catch (error) {
    console.error('Erro detalhado ao enviar e-mail:', {
      name: error.name,
      message: error.message,
      code: error.code,
      command: error.command,
      stack: error.stack,
      response: error.response,
      smtp: error.smtp
    });
    return false;
  }
}