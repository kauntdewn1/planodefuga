import { buffer } from 'micro';
import { sendProductEmail } from '../../utils/email';

// Desabilitar o bodyParser padrão do Next.js
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  // Verificar se o método é POST
  if (req.method !== 'POST') {
    // Mesmo para métodos não permitidos, retornamos 200
    return res.status(200).json({ 
      success: false,
      message: 'Método não permitido, apenas POST é aceito'
    });
  }

  try {
    const rawBody = await buffer(req);
    const payload = JSON.parse(rawBody.toString());
    const event = payload.event;
    
    console.log('Evento recebido:', event);

    if (event === 'OPENPIX:CHARGE_CREATED') {
      console.log('Nova cobrança criada:', payload.charge);
      
    } else if (event === 'OPENPIX:CHARGE_COMPLETED') {
      console.log('Pagamento recebido:', payload.charge);
      
      try {
        // Enviar o produto por e-mail
        const email = payload.charge.customer.email;
        if (email) {
          await sendProductEmail(email);
          console.log('E-mail enviado com sucesso para:', email);
        } else {
          console.log('E-mail do cliente não encontrado no payload');
        }
      } catch (emailError) {
        // Registrar o erro, mas não falhar a resposta
        console.error('Erro ao enviar e-mail:', emailError);
      }
    }

    // Sempre retornar 200 para confirmar recebimento
    return res.status(200).json({ 
      received: true,
      event: event
    });
  } catch (error) {
    // Mesmo em caso de erro, retornamos 200 para a OpenPix
    console.error('Erro ao processar webhook:', error);
    
    return res.status(200).json({ 
      received: true,
      error: 'Erro interno ao processar o webhook, mas foi recebido com sucesso'
    });
  }
}