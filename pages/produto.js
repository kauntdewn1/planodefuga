import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'

export default function Produto() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Função para processar a compra
  const handleCompra = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Chamar nossa API para criar a cobrança
      const response = await axios.post('/api/create-charge', {
        name: 'Cliente', // Idealmente, você coletaria esses dados do usuário
        email: 'cliente@email.com'
      });
      
      // Redirecionar para a página de pagamento da OpenPix
      if (response.data.paymentLinkUrl) {
        window.location.href = response.data.paymentLinkUrl;
      } else if (response.data.qrCodeImage) {
        // Alternativa: redirecionar para uma página com o QR code
        // Armazenar os dados no localStorage para usar na página de pagamento
        localStorage.setItem('pixPayment', JSON.stringify(response.data));
        window.location.href = '/pagamento';
      } else {
        throw new Error('Não foi possível gerar o link de pagamento');
      }
    } catch (err) {
      console.error('Erro ao processar pagamento:', err);
      setError('Ocorreu um erro ao processar seu pagamento. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white font-sans">
      <Head>
        <title>Sobre o Livro | Plano de Fuga</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Conheça o livro Plano de Fuga e descubra como conquistar sua liberdade" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {/* Seção Principal do Produto */}
        <section className="py-16 px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Plano de Fuga – um livro direto, cru e necessário</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">Um manifesto escrito para quem está no limite. Nada de autoajuda superficial. Só verdade prática, provocação e ação real.</p>
          <img src="/img/livro-mockup.png" alt="Mockup do Livro" className="mx-auto w-48 mb-6" />
          <ul className="text-left max-w-xl mx-auto space-y-3 text-lg">
            <li>🔓 Quebra o ciclo do automático</li>
            <li>🧠 Provoca reflexão sobre propósito e liberdade</li>
            <li>🚀 Dá o primeiro passo para alinhar vida com ação</li>
          </ul>
          <p className="mt-8 text-yellow-400 text-2xl font-bold">R$29,90</p>
          <p className="text-gray-400">PDF • Entrega imediata por e-mail após o pagamento</p>
          
          {/* Botão de compra com estado de carregamento */}
          <button 
            onClick={handleCompra}
            disabled={loading}
            className="mt-6 inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold disabled:opacity-50"
          >
            {loading ? 'Processando...' : 'Comprar agora'}
          </button>
          
          {/* Mensagem de erro */}
          {error && <p className="mt-4 text-red-500">{error}</p>}
        </section>

        {/* Seção Autor */}
        <section className="bg-gray-900 py-16 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Sobre o autor</h2>
          <img src="/img/autor.jpg" alt="Foto do autor" className="mx-auto w-32 rounded-full mb-4" />
          <p className="text-lg max-w-xl mx-auto">Thiago Tidilodo é consultor, estrategista e criador da Central de Fugas. Com mais de 20 anos ajudando pessoas e marcas a saírem da estagnação e viverem com propósito, ele escreveu este livro como um disparador de consciência.</p>
        </section>

        {/* Seção Depoimentos */}
        <section className="py-16 px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">O que estão dizendo:</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <blockquote className="italic text-yellow-400">"Esse livro me deu um tapa de lucidez."</blockquote>
            <blockquote className="italic text-yellow-400">"Finalmente alguém escreveu o que eu sentia."</blockquote>
            <blockquote className="italic text-yellow-400">"R$29,90 que valeram por uma terapia."</blockquote>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-yellow-400 text-black py-10 px-6 text-center">
          <h2 className="text-2xl font-bold mb-2">Sua liberdade começa agora.</h2>
          <p className="mb-4">R$29,90 no Pix. PDF entregue automaticamente após a compra.</p>
          <Link
            href="https://openpix.com.br/pay/45c7b3c0-05a8-4b29-a707-20677e496715"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg font-bold">
            Quero meu Plano de Fuga
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}