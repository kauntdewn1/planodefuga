import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

export default function Obrigado() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setProgress(30), 400);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Obrigado! | Plano de Fuga</title>
        <meta name="description" content="Obrigado por adquirir o Plano de Fuga!" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Container do Vídeo */}
        <div className="bg-white/5 p-4 rounded-2xl border border-pink-500/30 shadow-lg mb-8">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/ua1Mm4vNKbo"
              title="Plano de Fuga - Vídeo Explicativo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Seção de Confirmação */}
        <section className="text-center py-20 px-6">
          <h1 className="text-4xl font-bold mb-6 text-yellow-400 flex items-center justify-center gap-3">
            <span className="inline-block text-green-400 text-5xl">✔</span>
            Sua fuga foi autorizada.
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-4">Você acaba de dar um passo corajoso para fora da rotina. O PDF do <strong>Plano de Fuga</strong> já está a caminho do seu e-mail.</p>
          <p className="text-gray-400 mb-8">Se não encontrar na caixa de entrada, confira o spam ou promoções.</p>
          <Link href="https://chat.whatsapp.com/C3qRZDCkrLZ9r2ECwmElJs" className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold mb-4 hover:scale-105 transition-transform">
            Entrar na Comunidade
          </Link>
        </section>

        {/* Seção de Progresso */}
        <section className="bg-gray-900 py-16 px-6 text-center">
          <h2 className="text-2xl font-semibold mb-6 flex items-center justify-center gap-2">
            <span className="text-yellow-400 text-3xl">🏁</span>
            Sua liberdade: 30% completa
          </h2>
          {/* Barra de Progresso Animada */}
          <div className="max-w-md mx-auto mb-8">
            <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
              <div 
                className="bg-yellow-400 h-4 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <ul className="text-center max-w-md mx-auto text-lg space-y-3">
            <li>✅ Você leu o primeiro passo</li>
            <li>🔓 Conteúdo bônus liberado no grupo</li>
            <li>🧠 Mentoria e ferramentas à sua disposição</li>
          </ul>
        </section>

        {/* CTA Extra */}
        <section
          className="py-12 px-6 relative text-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(/img/bkg_expert.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <h2 className="text-2xl font-bold mb-2">Quer acelerar sua transformação?</h2>
          <p className="mb-6">Conheça a <Link href="/mentoria" className="text-yellow-400 underline">Mentoria Algoritmo da Liberdade</Link> e tenha acompanhamento pessoal para aplicar seu propósito na prática.</p>
          <Link href="/mentoria" className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform">
            Quero conhecer a mentoria
          </Link>
        </section>
      </div>
      <Footer />
    </div>
  );
}