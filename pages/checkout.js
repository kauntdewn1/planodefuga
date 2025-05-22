import Head from 'next/head';

export default function CheckoutPage() {
  return (
    <div className="text-white min-h-screen font-sans text-center px-6 py-16 bg-black" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255, 0, 128, 0.15), #000000 70%)' }}>
      <Head>
        <title>Pagar com Pix | Plano de Fuga</title>
        <meta name="description" content="Faça o pagamento do livro Plano de Fuga via Pix." />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/img/frase_expert.png" />
      </Head>

      <div className="max-w-2xl mx-auto">
        <img src="/img/logo-horizontal.png" alt="FlowPay" className="mx-auto w-64 mb-6" />
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">A Fuga Começa Aqui</h2>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Escaneie o QR Code abaixo ou clique no botão para realizar o pagamento de R$29,90 e receber o livro <strong>Plano de Fuga</strong> (PDF).
        </p>

        <div className="bg-white/5 p-8 rounded-2xl border border-pink-500/30 shadow-lg mb-8">
          <img src="/img/qrCode.png" alt="QR Code Plano de Fuga" className="mx-auto w-60 rounded-lg" />
        </div>

        <a
          href="https://openpix.com.br/pay/8578e3eb-29d5-4416-9a04-164e241e76c7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img 
            src="/img/botton.png" 
            alt="Pagar R$29,90 com Pix" 
            className="w-64 pulse-animation button-hover" 
          />
        </a>

        <p className="text-sm text-gray-400 mt-4">
          Após o pagamento, envie o comprovante para nosso suporte e receba o PDF.
        </p>

        <div className="mt-12">
          <img src="/img/flowpay-horizontal.png" alt="FlowPay" className="mx-auto w-64 mb-4" />
          <p className="text-sm text-gray-400 italic">
            Infraestrutura de pagamentos rápida, estável e com visão de futuro. FlowPay, onde a liberdade encontra tecnologia.<br />
            <span className="text-pink-400">EM BREVE: suporte a Cripto direto no seu checkout. </span>
          </p>
        </div>
      </div>
    </div>
  );
} 