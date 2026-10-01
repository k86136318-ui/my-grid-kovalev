import Nav from '../Nav/Nav'
import { articles } from '../../data/articles'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h1 className={styles.logo}>React Blog</h1>
          <span className={styles.counter}>Статей: {articles.length}</span>
        </div>
        <Nav />
      </div>
    </header>
  )
}

export default Header
