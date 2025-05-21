import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/logo-horizontal.png">
          Plano de Fuga
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              Início
            </Link>
          </li>
          <li>
            <Link href="#sobre">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="#contato">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}