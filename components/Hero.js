import styles from '../styles/Hero.module.css'
import Button from './Button'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Plano de Fuga - Central</h1>
        <p>Sua solução completa para liberdade financeira</p>
        <Button href="#saiba-mais" text="Saiba Mais" />
      </div>
    </section>
  )
}