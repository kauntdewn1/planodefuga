import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Mentoria() {
  return (
    <div className="bg-black text-white font-sans">
      <Head>
        <title>Mentoria Algoritmo da Liberdade | Central de Fugas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A jornada de 21 dias para sair da estagnação e viver com clareza, propósito e ação." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        {/* Hero */}
        <section className="text-center py-20 px-6">
          <h1 className="text-4xl font-bold mb-4 text-yellow-400">Mentoria Algoritmo da Liberdade</h1>
          <p className="text-xl max-w-2xl mx-auto mb-6">A jornada de 21 dias para sair da estagnação e viver com clareza, propósito e ação. Acompanhamento direto com Thiago Tidilodo.</p>
          <a href="#formulario" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold">Quero aplicar para a mentoria</a>
        </section>

        {/* Sobre a Mentoria */}
        <section className="bg-gray-900 py-16 px-6 text-center">
          <h2 className="text-2xl font-semibold mb-6">Como funciona:</h2>
          <ul className="text-left max-w-2xl mx-auto text-lg space-y-3">
            <li>🔁 21 dias com encontros ao vivo (grupo ou individual)</li>
            <li>🧠 Exercícios, provocações e feedback personalizado</li>
            <li>📘 Aplicação prática do seu Ikigai com plano de ação</li>
            <li>🛠️ Ferramentas de clareza, antifragilidade e ação</li>
          </ul>
        </section>

        {/* Público Ideal */}
        <section className="py-16 px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Essa mentoria é pra você se:</h2>
          <ul className="text-center max-w-2xl mx-auto text-lg space-y-3">
            <li>⚠️ Está insatisfeito com sua carreira ou vida atual</li>
            <li>🧭 Busca clareza sobre seu propósito</li>
            <li>🚫 Já tentou sozinho, mas se sente travado</li>
            <li>🔥 Quer estrutura, acompanhamento e plano real</li>
          </ul>
        </section>

        {/* CTA + Formulário */}
        <section id="formulario" className="bg-yellow-400 text-black py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Aplicar para a Mentoria</h2>
          <p className="text-lg mb-6">Vagas limitadas. Preencha abaixo para ser considerado.</p>
          
          {/* Formulário de Aplicação */}
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={(e) => {
              e.preventDefault();
              alert('Sua aplicação foi enviada com sucesso! Entraremos em contato em breve.');
            }}>
              <div className="mb-4">
                <label htmlFor="nome" className="block text-gray-700 font-bold mb-2">Nome completo</label>
                <input type="text" id="nome" name="nome" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">E-mail</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
              </div>
              
              <div className="mb-4">
                <label htmlFor="telefone" className="block text-gray-700 font-bold mb-2">WhatsApp</label>
                <input type="tel" id="telefone" name="telefone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
              </div>
              
              <div className="mb-4">
                <label htmlFor="ocupacao" className="block text-gray-700 font-bold mb-2">Ocupação atual</label>
                <input type="text" id="ocupacao" name="ocupacao" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
              </div>
              
              <div className="mb-4">
                <label htmlFor="motivo" className="block text-gray-700 font-bold mb-2">Por que você quer participar da mentoria?</label>
                <textarea id="motivo" name="motivo" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" required></textarea>
              </div>
              
              <div className="mb-4">
                <label htmlFor="desafios" className="block text-gray-700 font-bold mb-2">Quais são seus maiores desafios atualmente?</label>
                <textarea id="desafios" name="desafios" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" required></textarea>
              </div>
              
              <div className="mb-4">
                <label htmlFor="conheceu" className="block text-gray-700 font-bold mb-2">Como conheceu a Central de Fugas?</label>
                <select id="conheceu" name="conheceu" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" required>
                  <option value="">Selecione uma opção</option>
                  <option value="livro">Através do livro Plano de Fuga</option>
                  <option value="instagram">Instagram</option>
                  <option value="indicacao">Indicação de amigo</option>
                  <option value="google">Pesquisa no Google</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              
              <div className="text-center">
                <button type="submit" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors">Enviar aplicação</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}