import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Plano de Fuga - Central. Todos os direitos reservados.</p>
    </footer>
  )
}