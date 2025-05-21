import { sendProductEmail } from '../../utils/email';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'E-mail não fornecido' });
    }

    const result = await sendProductEmail(email);
    
    if (result) {
      return res.status(200).json({ message: 'E-mail enviado com sucesso' });
    } else {
      return res.status(500).json({ error: 'Falha ao enviar e-mail' });
    }
  } catch (error) {
    console.error('Erro ao enviar e-mail de teste:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
} 