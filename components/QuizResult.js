import React from 'react';
import Link from 'next/link';
import styles from '../styles/Diagnostico.module.css';

export default function QuizResult({ answers, onRestart }) {
  // Calcular pontuação baseada nas respostas (valores menores são melhores)
  const score = answers.reduce((total, answer) => total + answer, 0);
  
  // Determinar o resultado baseado na pontuação
  let result;
  if (score <= 5) {
    result = {
      title: "Você está no caminho certo",
      description: "Você já tem clareza e propósito, mas o Plano de Fuga pode ajudar a potencializar sua jornada.",
      recommendation: "Recomendamos o livro para aprofundar sua liberdade."
    };
  } else if (score <= 10) {
    result = {
      title: "Você está na zona de conforto",
      description: "Há sinais de estagnação e você sente que poderia estar vivendo com mais propósito.",
      recommendation: "O Plano de Fuga é ideal para você dar o próximo passo."
    };
  } else {
    result = {
      title: "Você está preso em uma vida que não escolheu",
      description: "Os resultados indicam que você está vivendo no automático e precisa de uma mudança significativa.",
      recommendation: "O Plano de Fuga é essencial para sua transformação."
    };
  }

  return (
    <div className={styles.resultContainer}>
      <h2 className={styles.resultTitle}>{result.title}</h2>
      <p className={styles.resultDescription}>{result.description}</p>
      <p className={styles.resultRecommendation}>{result.recommendation}</p>
      <div className={styles.resultActions}>
        <button onClick={onRestart} className={styles.restartButton}>
          Refazer o diagnóstico
        </button>
        <Link href="/produto" className={styles.actionButton}>
          Quero meu Plano de Fuga
        </Link>
      </div>
    </div>
  );
}