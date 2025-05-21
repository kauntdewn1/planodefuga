import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Diagnostico.module.css'
import { QuizQuestion, QuizResult } from '../components/QuizDiagnostico';


const questions = [
  {
    question: 'Você sente que sua vida atual reflete quem você realmente é?',
    options: ['Sim, totalmente', 'Mais ou menos', 'Não mesmo'],
    scores: [0, 1, 3],
  },
  {
    question: 'Você sente que tem clareza sobre o que quer da vida?',
    options: ['Sim', 'Tenho dúvidas', 'Não faço ideia'],
    scores: [0, 1, 3],
  },
  {
    question: 'Você sente que está preso em uma rotina?',
    options: ['Não', 'Um pouco', 'Totalmente'],
    scores: [0, 2, 4],
  }
];

export default function DiagnosticoPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (index) => {
    const newAnswers = [...answers, questions[step].scores[index]];
    setAnswers(newAnswers);
    setStep(step + 1);
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers([]);
  };

  return (
    <div className={styles.quizWrapper}>
      {step < questions.length ? (
        <QuizQuestion
          question={questions[step].question}
          options={questions[step].options}
          onAnswer={handleAnswer}
        />
      ) : (
        <QuizResult answers={answers} onRestart={handleRestart} />
      )}
    </div>
  );
}
