import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/logo-horizontal.png">
          <a>Plano de Fuga</a>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              <a>Início</a>
            </Link>
          </li>
          <li>
            <Link href="#sobre">
              <a>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="#contato">
              <a>Contato</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}