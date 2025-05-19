import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Obrigado() {
  return (
    <div className="bg-black text-white font-sans text-center">
      <Head>
        <title>Obrigado pela Compra | Plano de Fuga</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Obrigado pela sua compra do Plano de Fuga" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        {/* Seção de Confirmação */}
        <section className="py-20 px-6">
          <h1 className="text-4xl font-bold mb-6 text-yellow-400">Sua fuga foi autorizada.</h1>
          <p className="text-xl max-w-2xl mx-auto mb-4">Você acaba de dar um passo corajoso para fora da rotina. O PDF do <strong>Plano de Fuga</strong> já está a caminho do seu e-mail.</p>
          <p className="text-gray-400 mb-8">Se não encontrar na caixa de entrada, confira o spam ou promoções.</p>
          <Link href="https://chat.whatsapp.com/C3qRZDCkrLZ9r2ECwmElJs">
            <a className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold mb-4">Entrar na Comunidade</a>
          </Link>
        
        </section>

        {/* Seção de Progresso */}
        <section className="bg-gray-900 py-16 px-6 text-center">
          <h2 className="text-2xl font-semibold mb-6">Sua liberdade: 30% completa</h2>
          
          {/* Barra de Progresso Animada */}
          <div className="max-w-md mx-auto mb-8">
            <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
              <div 
                className="bg-yellow-400 h-4 rounded-full transition-all duration-1000 ease-out" 
                style={{ width: '0%' }}
              ></div>
            </div>
            <style jsx>{`
              @keyframes progressAnimation {
                0% { width: 0%; }
                100% { width: 30%; }
              }
              
              .bg-yellow-400 {
                animation: progressAnimation 1.5s ease-out forwards;
              }
            `}</style>
          </div>
          
          <ul className="text-center max-w-md mx-auto text-lg space-y-3">
            <li>✅ Você leu o primeiro passo</li>
            <li>🔓 Conteúdo bônus liberado no grupo</li>
            <li>🧠 Mentoria e ferramentas à sua disposição</li>
          </ul>
        </section>

        {/* CTA Extra */}
        <section className="py-12 px-6">
          <h2 className="text-2xl font-bold mb-2">Quer acelerar sua transformação?</h2>
          <p className="mb-6">Conheça a <Link href="/mentoria"><a className="text-yellow-400 underline">Mentoria Algoritmo da Liberdade</a></Link> e tenha acompanhamento pessoal para aplicar seu propósito na prática.</p>
          <Link href="/mentoria">
            <a className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold">Quero conhecer a mentoria</a>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}