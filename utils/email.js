const nodemailer = require('nodemailer');

// Configurar o transporte de e-mail
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Função para enviar o produto por e-mail
export async function sendProductEmail(email) {
  try {
    await transporter.sendMail({
      from: '"Central de Fugas" <contato@centraldefugas.com.br>',
      to: email,
      subject: 'Seu Plano de Fuga está pronto!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #f59e0b;">Sua fuga foi autorizada!</h1>
          <p>Olá!</p>
          <p>Obrigado por adquirir o livro "Plano de Fuga". Seu PDF está anexado a este e-mail.</p>
          <p>Não se esqueça de entrar em nosso grupo exclusivo no WhatsApp:</p>
          <p><a href="https://chat.whatsapp.com/C3qRZDCkrLZ9r2ECwmElJs" style="color: #f59e0b;">Acessar Grupo do WhatsApp</a></p>
          <p>Boa leitura e bem-vindo à sua jornada de liberdade!</p>
          <p>Thiago Tidilodo<br>Central de Fugas</p>
        </div>
      `,
      attachments: [
        {
          filename: 'plano-de-fuga.pdf',
          path: './public/produtos/plano-de-fuga.pdf', // Caminho para o arquivo PDF
        },
      ],
    });
    
    console.log('E-mail enviado com sucesso para:', email);
    return true;
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return false;
  }
}