import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import axios from 'axios'

export default function Produto() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Função para processar a compra (apenas redireciona para o checkout OpenPix)
  const handleCompra = () => {
    setLoading(true);
    setError(null);
    // Redireciona para o link de pagamento OpenPix
    window.location.href = 'https://openpix.com.br/pay/45c7b3c0-05a8-4b29-a707-20677e496715';
  };

  return (
    <div className="bg-black text-white font-sans">
      <Head>
        <title>Sobre o Livro | Plano de Fuga</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Conheça o livro Plano de Fuga e descubra como conquistar sua liberdade" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {/* Header customizado */}
      <header className="bg-black w-full flex items-center px-6 py-4">
        <img src="/img/logo-horizontal.png" alt="Logo Plano de Fuga" className="h-16 w-auto" />
      </header>
      <main>
        {/* Seção Principal do Produto */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img src="/img/livro-mockup.png" alt="Mockup do Livro" className="mx-auto w-64 md:w-80 drop-shadow-xl rounded-lg" />
            <div>
              <h1 className="text-4xl font-bold mb-4">Plano de Fuga – um livro direto, cru e necessário</h1>
              <p className="text-xl mb-6">Um manifesto escrito para quem está no limite. Nada de autoajuda superficial. Só verdade prática, provocação e ação real.</p>
              <ul className="space-y-2 text-lg mb-6">
                <li>🔓 Quebra o ciclo do automático</li>
                <li>🧠 Provoca reflexão sobre propósito e liberdade</li>
                <li>🚀 Dá o primeiro passo para alinhar vida com ação</li>
              </ul>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-yellow-400 text-3xl font-bold">R$29,90</span>
              </div>
              <button
                onClick={handleCompra}
                disabled={loading}
                className="mt-2 inline-flex items-center gap-2 bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:scale-105 hover:shadow-yellow-400/40 transition-all duration-200 disabled:opacity-50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                {loading ? 'Processando...' : 'Comprar agora'}
              </button>
              {error && <p className="mt-4 text-red-500">{error}</p>}
              <p className="text-gray-400 mt-2 text-sm">Após a confirmação do pagamento, entraremos em contato por e-mail para enviar o PDF do livro.</p>
            </div>
          </div>
        </section>

        {/* Seção Autor */}
        <section className="bg-gray-900 py-16 px-6 text-center">
          <div className="inline-block bg-black/80 border border-yellow-400/40 rounded-2xl p-8 shadow-lg">
            <img src="/img/avata_tidi_gamer.png" alt="Avatar Tidilodo" className="mx-auto w-32 rounded-full mb-4 border-4 border-yellow-400/30" />
            <h2 className="text-3xl font-semibold mb-2">Sobre o autor</h2>
            <p className="text-lg max-w-xl mx-auto mb-2">Thiago Tidilodo é consultor, estrategista e criador da Central de Fugas. Com mais de 20 anos ajudando pessoas e marcas a saírem da estagnação e viverem com propósito, ele escreveu este livro como um disparador de consciência.</p>
            <span className="text-yellow-400 font-mono">"A fuga começa quando você decide agir."</span>
          </div>
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
          <p className="mb-4">R$29,90 no Pix. Após a confirmação, enviaremos o PDF para seu e-mail.</p>
          <Link
            href="https://openpix.com.br/pay/45c7b3c0-05a8-4b29-a707-20677e496715"
            className="inline-block bg-transparent rounded-lg font-bold hover:scale-105 transition-transform"
          >
            <img
              src="/img/acessar_plano_livro.png"
              alt="Acessar Plano de Fuga"
              className="w-64 md:w-80 mx-auto"
            />
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}