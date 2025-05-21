import { buffer } from 'micro';
import { sendProductEmail } from '../../utils/email';

// Desabilitar o bodyParser padrão do Next.js
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    // Verificar token de autorização
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== process.env.OPENPIX_WEBHOOK_TOKEN) {
      return res.status(401).json({ error: 'Não autorizado' });
    }

    // Ler o corpo da requisição
    const rawBody = await buffer(req);
    const event = JSON.parse(rawBody.toString());

    // Log para debug (remova em produção)
    console.log('Webhook recebido:', JSON.stringify(event, null, 2));

    // Verificar se é um evento de pagamento completado
    if (event.event === 'OPENPIX:CHARGE_COMPLETED') {
      // Aqui você pode processar o pagamento
      // Por exemplo, enviar o e-mail com o produto
      if (event.data && event.data.customer && event.data.customer.email) {
        await sendProductEmail(event.data.customer.email);
      }
    }

    // Sempre responda 200 para evitar reenvio do OpenPix
    return res.status(200).json({ received: true });
  } catch (error) {
    console.error('Erro ao processar webhook:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
}