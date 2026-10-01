import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>React Blog</h1>
        <nav className={styles.nav}>
          <a className={styles.link} href="#home">
            Главная
          </a>
          <a className={styles.link} href="#articles">
            Статьи
          </a>
          <a className={styles.link} href="#about">
            О нас
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
