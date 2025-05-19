import Head from 'next/head'
import Link from 'next/link'

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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Você está preso em uma vida que não escolheu.</h1>
          <p className="text-xl md:text-2xl mb-8">Mas existe um caminho. O Plano de Fuga começa aqui.</p>
          <img src="/img/autor.png" alt="Foto do autor" className="mx-auto mb-6 rounded-xl shadow-lg w-64" />
          <p className="text-lg font-semibold">📘 R$29,90 • Entrega imediata por e-mail</p>
          <Link href="/produto">
            <a className="mt-6 inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold">Quero meu Plano de Fuga</a>
          </Link>
        </section>

        {/* Dor Section */}
        <section className="bg-gray-900 py-16 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">O que você sente não é preguiça. É vazio.</h2>
          <p className="text-lg max-w-2xl mx-auto">Você tem resultados, mas sente que algo essencial está faltando. A rotina está vencendo. E isso tem um custo: sua verdade.</p>
          <div className="mt-8 text-yellow-400 italic">"Você precisa aguentar." "Você tem que ser forte."</div>
          <div className="text-white line-through mt-2">Essas frases não salvam ninguém.</div>
        </section>

        {/* Livro Section */}
        <section className="py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Plano de Fuga – um livro direto, cru e necessário</h2>
          <p className="max-w-2xl mx-auto text-lg">Escrito para quem está no limite. Sem autoajuda rasa – só verdades práticas. Um gatilho de clareza e ação real para quem precisa de mudança.</p>
          <img src="/img/livro-mockup.png" alt="Mockup do Livro" className="mx-auto mt-6 w-48" />
          <Link href="/produto">
            <a className="mt-6 inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold">Comprar agora</a>
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