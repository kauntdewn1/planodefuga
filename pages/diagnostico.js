import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Diagnostico.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import QuizQuestion from '../components/QuizQuestion'
import QuizResult from '../components/QuizResult'

export default function Diagnostico() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  
  const questions = [
    {
      question: "Como você se sente em relação ao seu trabalho atual?",
      options: [
        "Amo o que faço e me sinto realizado(a)",
        "É apenas um trabalho para pagar as contas",
        "Não gosto, mas não vejo alternativas",
        "Estou completamente insatisfeito(a) e esgotado(a)"
      ]
    },
    {
      question: "Qual a sua relação com dinheiro?",
      options: [
        "Tenho controle total das minhas finanças e invisto regularmente",
        "Consigo pagar as contas, mas sobra pouco para investir",
        "Vivo no limite, de salário em salário",
        "Estou endividado(a) e isso me causa grande ansiedade"
      ]
    },
    {
      question: "Como você avalia seu equilíbrio entre vida pessoal e profissional?",
      options: [
        "Tenho tempo para trabalho, família, lazer e desenvolvimento pessoal",
        "Consigo equilibrar na maioria das vezes, mas com algum esforço",
        "Meu trabalho consome a maior parte do meu tempo e energia",
        "Não tenho vida além do trabalho e das obrigações"
      ]
    },
    {
      question: "Qual seu nível de clareza sobre seu propósito de vida?",
      options: [
        "Tenho total clareza sobre meu propósito e trabalho alinhado a ele",
        "Tenho algumas ideias, mas ainda estou explorando possibilidades",
        "Não tenho certeza do meu propósito, mas gostaria de descobrir",
        "Nunca pensei seriamente sobre isso ou me sinto completamente perdido(a)"
      ]
    },
    {
      question: "Como você lida com riscos e mudanças?",
      options: [
        "Abraço mudanças e vejo riscos como oportunidades",
        "Aceito mudanças quando necessário, mas prefiro estabilidade",
        "Evito riscos e mudanças sempre que possível",
        "Tenho pavor de sair da minha zona de conforto"
      ]
    },
  ];
  
  const handleAnswer = (answerIndex) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const restartQuiz = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Diagnóstico da Prisão - Plano de Fuga</title>
        <meta name="description" content="Descubra quais são suas principais limitações com nosso diagnóstico interativo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className={styles.main}>
        <div className={styles.quizContainer}>
          <h1 className={styles.title}>Diagnóstico da Prisão</h1>
          <p className={styles.description}>
            Responda às perguntas abaixo para descobrir quais são suas principais limitações 
            e como o Plano de Fuga pode ajudar você a superá-las.
          </p>
          
          {!showResults ? (
            <>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill} 
                  style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                ></div>
              </div>
              
              <div className={styles.questionCounter}>
                Pergunta {currentQuestion + 1} de {questions.length}
              </div>
              
              <QuizQuestion 
                question={questions[currentQuestion].question}
                options={questions[currentQuestion].options}
                onAnswer={handleAnswer}
              />
            </>
          ) : (
            <QuizResult 
              answers={answers} 
              onRestart={restartQuiz}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}