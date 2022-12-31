import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <Link href="/blog">
        Blog index
      </Link>

      <br/ >
      <br/ >
      <br/ >
      <br />

      <Link href="/users">
        User list
      </Link>

      <br/ >
      <br/ >
      <br/ >
      <br/ >
      <Link href="/posts">
        Posts list
      </Link>
    </div>
  )
}
