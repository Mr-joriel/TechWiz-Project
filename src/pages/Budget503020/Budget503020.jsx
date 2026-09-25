import { Link } from 'react-router-dom'
import styles from './Budget503020.module.css'

function Budget503020() {
  return (
    <section className={styles.page} aria-labelledby="budget503020-heading">
      <div className={styles.content}>
        <p className={styles.eyebrow}>BudgetBasics · Coming soon</p>
        <h1 id="budget503020-heading">50-30-20 Rule</h1>
        <p>Plan needs, wants, and savings with a simple budgeting guide.</p>
        <article className={styles.card}>
          <h2>This page is being built</h2>
          <p>The page structure and shared design styles are ready for its feature work.</p>
          <Link className="btn btn--primary" to="/sitemap">Explore available pages <span aria-hidden="true">→</span></Link>
        </article>
      </div>
    </section>
  )
}

export default Budget503020
