import { Link } from 'react-router-dom'
import styles from './Infographics.module.css'

function Infographics() {
  return (
    <section className={styles.page} aria-labelledby="infographics-heading">
      <div className={styles.content}>
        <p className={styles.eyebrow}>BudgetBasics · Coming soon</p>
        <h1 id="infographics-heading">Infographics</h1>
        <p>Browse visual guides to everyday money topics.</p>
        <article className={styles.card}>
          <h2>This page is being built</h2>
          <p>The page structure and shared design styles are ready for its feature work.</p>
          <Link className="btn btn--primary" to="/sitemap">Explore available pages <span aria-hidden="true">→</span></Link>
        </article>
      </div>
    </section>
  )
}

export default Infographics
