import { Link } from 'react-router-dom'
import styles from './MoneyMistakes.module.css'

function MoneyMistakes() {
  return (
    <section className={styles.page} aria-labelledby="moneymistakes-heading">
      <div className={styles.content}>
        <p className={styles.eyebrow}>BudgetBasics · Coming soon</p>
        <h1 id="moneymistakes-heading">Money Mistakes</h1>
        <p>Recognize common money mistakes and learn simple ways to avoid them.</p>
        <article className={styles.card}>
          <h2>This page is being built</h2>
          <p>The page structure and shared design styles are ready for its feature work.</p>
          <Link className="btn btn--primary" to="/sitemap">Explore available pages <span aria-hidden="true">→</span></Link>
        </article>
      </div>
    </section>
  )
}

export default MoneyMistakes
