import styles from './ArticleCard.module.css'

function ArticleCard({ article }) {
  return (
    <article className={styles.card}>
      <img className={styles.image} src={article.image} alt={article.title} />
      <div className={styles.body}>
        <span className={styles.tag}>{article.tag}</span>
        <h2 className={styles.title}>{article.title}</h2>
        <p className={styles.excerpt}>{article.excerpt}</p>
        <footer className={styles.footer}>
          <span className={styles.author}>{article.author}</span>
          <time className={styles.date}>{article.date}</time>
        </footer>
      </div>
    </article>
  )
}

export default ArticleCard
