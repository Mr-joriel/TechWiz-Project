import { Link } from 'react-router-dom'
import styles from './SavingsGoals.module.css'

function SavingsGoals() {
  return (
    <section className={styles.page} aria-labelledby="savingsgoals-heading">
      <div className={styles.content}>
        <p className={styles.eyebrow}>BudgetBasics · Coming soon</p>
        <h1 id="savingsgoals-heading">Savings Goals</h1>
        <p>Set a savings target and track your progress.</p>
        <article className={styles.card}>
          <h2>This page is being built</h2>
          <p>The page structure and shared design styles are ready for its feature work.</p>
          <Link className="btn btn--primary" to="/sitemap">Explore available pages <span aria-hidden="true">→</span></Link>
        </article>
      </div>
    </section>
  )
}

export default SavingsGoals
