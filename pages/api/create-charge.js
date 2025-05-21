const axios = require('axios');

export default async function handler(req, res) {
  // Apenas aceitar requisições POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    // Obter dados do cliente do corpo da requisição
    const { name, email } = req.body;
    
    if (!process.env.OPENPIX_API_KEY) {
      throw new Error('Configuração da API OpenPix não encontrada');
    }

    // Criar a cobrança na OpenPix
    const response = await axios.post(
      'https://api.openpix.com.br/api/v1/charge',
      {
        correlationID: `pedido-${Date.now()}`, // ID único para cada pedido
        value: 2990, // R$ 29,90 em centavos
        comment: 'Plano de Fuga - Livro PDF',
        customer: {
          name: name || 'Cliente',
          email: email || 'cliente@email.com',
        },
        expiresIn: 3600 // Expira em 1 hora (opcional)
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENPIX_API_KEY}`,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      }
    );

    // Retornar os dados da cobrança para o cliente
    return res.status(200).json(response.data);
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Erro na cobrança:', error.message);
    }
    return res.status(500).json({ 
      error: 'Erro ao processar pagamento'
    });
  }
}