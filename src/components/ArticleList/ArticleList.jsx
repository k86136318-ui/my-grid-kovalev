import ArticleCard from '../ArticleCard/ArticleCard'
import { articles } from '../../data/articles'
import styles from './ArticleList.module.css'

function ArticleList() {
  return (
    <section className={styles.list}>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </section>
  )
}

export default ArticleList
