import { buffer } from 'micro';
import { sendProductEmail } from '../../utils/email';

// Desabilitar o bodyParser padrão do Next.js
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const event = req.body;
    // Log para debug (remova em produção)
    console.log('Webhook recebido:', JSON.stringify(event, null, 2));

    // Exemplo: filtrar por correlationID (defina isso ao criar o charge futuramente)
    if (event.correlationID === 'plano-de-fuga') {
      // Aqui você pode salvar no banco, disparar e-mail, etc.
      // Exemplo: console.log('Pagamento do Plano de Fuga identificado!');
    }

    // Sempre responda 200 para evitar reenvio do OpenPix
    res.status(200).json({ received: true });
  } else {
    res.status(405).end();
  }
}