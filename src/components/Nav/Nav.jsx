import styles from './Nav.module.css'

function Nav() {
  return (
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
  )
}

export default Nav
