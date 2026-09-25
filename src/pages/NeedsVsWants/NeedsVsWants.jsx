import { Link } from 'react-router-dom'
import styles from './NeedsVsWants.module.css'

function NeedsVsWants() {
  return (
    <section className={styles.page} aria-labelledby="needsvswants-heading">
      <div className={styles.content}>
        <p className={styles.eyebrow}>BudgetBasics · Coming soon</p>
        <h1 id="needsvswants-heading">Needs vs Wants</h1>
        <p>Learn how to tell essential spending from optional spending.</p>
        <article className={styles.card}>
          <h2>This page is being built</h2>
          <p>The page structure and shared design styles are ready for its feature work.</p>
          <Link className="btn btn--primary" to="/sitemap">Explore available pages <span aria-hidden="true">→</span></Link>
        </article>
      </div>
    </section>
  )
}

export default NeedsVsWants
