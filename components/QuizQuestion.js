import React from 'react';
import styles from '../styles/Diagnostico.module.css';

export function QuizQuestion({ question, options, onAnswer }) {
  return (
    <div className={styles.questionContainer}>
      <h2 className={styles.questionText}>{question}</h2>
      <div className={styles.optionsContainer}>
        {options.map((option, index) => (
          <button
            key={index}
            className={styles.optionButton}
            onClick={() => onAnswer(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}