import Link from 'next/link'
import styles from '../styles/Button.module.css'

export default function Button({ href, text, variant = 'primary' }) {
  return (
    <Link href={href}>
      <a className={`${styles.button} ${styles[variant]}`}>
        {text}
      </a>
    </Link>
  )
}