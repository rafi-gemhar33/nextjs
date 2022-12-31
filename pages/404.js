import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Page Not Found Oops...</h1>
      <Link href="/">
        Go back home
      </Link>
    </div>
  )
}
