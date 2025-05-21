import Head from 'next/head'
import Link from 'next/link'
import avatarStyles from '../styles/avatargamer.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Plano de Fuga | Central de Fugas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-black text-white font-sans">
        {/* Hero Section */}
        <section className="text-center py-20 px-6">
        <img src="/img/autor.png" alt="Foto do autor" className="mx-auto mb-10 rounded-xl shadow-lg w-full md:w-[900px]" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">A vida que te prenderam não precisa ser a fase final do jogo.</h1>
          <p className="text-xl text-yellow-400 md:text-2xl mb-3">Missão Ativada: Reconhecer a prisão. Escolher a liberdade.</p>
          <p className="text-xl text-yellow-600 md:text-2xl mb-8">Esse não é um e-book. É o início do seu Plano de Fuga – um jogo real, onde cada fase te leva mais perto de uma vida com sentido.</p>
          <Link href="/produto" className="mt-6 inline-block">
            <img src="/img/acessar_plano_livro.png" alt="Quero meu Plano de Fuga" className="mx-auto w-64 md:w-72 hover:scale-105 transition-transform" />
          </Link>
          <p className="text-lg text-yellow-800 font-italic" >A cela é mental. A fuga é estratégica.</p>
        </section>

        {/* Avatar gamer */}
        <section className={`py-32 px-6 text-center relative bg-[url('/img/fundo-game.svg')] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:backdrop-blur-sm ${avatarStyles.avatarSection}`}> 
              <div className={`flex justify-center items-center gap-1 mb-10 relative ${avatarStyles.avatarContainer}`}> 
              <img src="img/balao.png" alt="Balão de Fala: Você precisa encontrar o mapa" className={`w-40 md:w-72 z-20 ${avatarStyles.speechBubble}`}/> 
              <img src="img/avata_tidi_gamer.png" alt="Avatar do Mentor" className={`w-40 md:w-56 z-20 ${avatarStyles.avatar}`}/>
            </div>
        </section>

        {/* Dor Section 2 */}
        <section className="bg-gray-900 py-20 px-6  text-center relative overflow-hidden bg-[url('/img/background_pain.svg')] bg-top bg-no-repeat bg-auto"> 
            <div className="flex justify-center items-center relative"> 
              <img src="img/fases.png" alt="Quadro de Escolha de Fases" 
              className="w-[300px] md:w-[300px] relative -bottom-[60px] left-[25px] z-50" /> 
            </div> 
        </section>

        {/* Escolher Fase */}
        <section className="bg-gray-900 py-20 px-6  text-center relative overflow-hidden bg-[url('/img/background_pain.svg')] bg-top bg-no-repeat bg-auto"> 
              <div className="mt-16 pt-16">
              <div className="mt-10 text-yellow-400 text-lg italic">"Trabalha quieto." "Aguenta firme." "Todo mundo vive assim."</div> 
              <div className="text-white line-through mt-2 text-lg">Essas frases são algemas disfarçadas de conselho.</div>
            </div> 
        </section>

        {/* Livro Section */}
        <section className="py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Plano de Fuga – um livro direto, cru e necessário</h2>
          <p className="max-w-2xl mx-auto text-lg">Escrito para quem está no limite. Sem autoajuda rasa – só verdades práticas. Um gatilho de clareza e ação real para quem precisa de mudança.</p>
          <img src="/img/livro-mockup.png" alt="Mockup do Livro" className="mx-auto mt-6 w-48" />
          <Link href="/produto" className="mt-6 inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold">
            Comprar agora
          </Link>
        </section>

        {/* Footer */}
        <footer className="text-center py-10 text-gray-400 text-sm">
          &copy; 2025 Central de Fugas · Todos os direitos reservados
        </footer>
      </div>
    </>
  )
}