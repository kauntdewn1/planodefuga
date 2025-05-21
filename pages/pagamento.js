import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Pagamento() {
  const [paymentData, setPaymentData] = useState(null);
  
  useEffect(() => {
    // Recuperar dados do localStorage
    const data = localStorage.getItem('pixPayment');
    if (data) {
      setPaymentData(JSON.parse(data));
    }
  }, []);

  return (
    <div className="bg-black text-white font-sans">
      <Head>
        <title>Pagamento | Plano de Fuga</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">Finalize seu pagamento</h1>
        
        {paymentData ? (
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg text-black">
            <h2 className="text-2xl font-bold mb-4">Pague com Pix</h2>
            <p className="mb-6">Escaneie o QR code abaixo ou copie o código Pix</p>
            
            {paymentData.qrCodeImage && (
              <div className="mb-6">
                <img 
                  src={paymentData.qrCodeImage} 
                  alt="QR Code Pix" 
                  className="mx-auto w-48 h-48"
                />
              </div>
            )}
            
            {paymentData.pixCopiaECola && (
              <div className="mb-6">
                <p className="text-sm mb-2">Código Pix Copia e Cola:</p>
                <div className="relative">
                  <textarea 
                    readOnly 
                    className="w-full p-3 bg-gray-100 rounded text-xs" 
                    rows="3"
                    value={paymentData.pixCopiaECola}
                  />
                  <button 
                    className="absolute right-2 top-2 bg-yellow-400 text-black px-2 py-1 rounded text-xs"
                    onClick={() => {
                      navigator.clipboard.writeText(paymentData.pixCopiaECola);
                      alert('Código Pix copiado!');
                    }}
                  >
                    Copiar
                  </button>
                </div>
              </div>
            )}
            
            <p className="text-sm">
              Após o pagamento, você será redirecionado automaticamente para a página de confirmação.
              Se não for redirecionado, clique no botão abaixo após realizar o pagamento.
            </p>
            
            <Link
              href="/obrigado"
              className="mt-6 inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold">
              
                Já paguei
              
            </Link>
          </div>
        ) : (
          <div className="max-w-md mx-auto">
            <p className="mb-6">Nenhuma informação de pagamento encontrada.</p>
            <Link
              href="/produto"
              className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold">
              
                Voltar para a página do produto
              
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}