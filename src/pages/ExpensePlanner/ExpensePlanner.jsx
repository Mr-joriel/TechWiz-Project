import { Link } from 'react-router-dom'
import styles from './ExpensePlanner.module.css'

function ExpensePlanner() {
  return (
    <section className={styles.page} aria-labelledby="expenseplanner-heading">
      <div className={styles.content}>
        <p className={styles.eyebrow}>BudgetBasics · Coming soon</p>
        <h1 id="expenseplanner-heading">Expense Planner</h1>
        <p>Organize expenses and keep an eye on your budget.</p>
        <article className={styles.card}>
          <h2>This page is being built</h2>
          <p>The page structure and shared design styles are ready for its feature work.</p>
          <Link className="btn btn--primary" to="/sitemap">Explore available pages <span aria-hidden="true">→</span></Link>
        </article>
      </div>
    </section>
  )
}

export default ExpensePlanner
