import { Link } from 'react-router-dom'
import styles from './Chatbot.module.css'

function Chatbot() {
  return (
    <section className={styles.page} aria-labelledby="chatbot-heading">
      <div className={styles.content}>
        <p className={styles.eyebrow}>BudgetBasics · Coming soon</p>
        <h1 id="chatbot-heading">AI Chatbot</h1>
        <p>Ask common questions about budgeting and saving.</p>
        <article className={styles.card}>
          <h2>This page is being built</h2>
          <p>The page structure and shared design styles are ready for its feature work.</p>
          <Link className="btn btn--primary" to="/sitemap">Explore available pages <span aria-hidden="true">→</span></Link>
        </article>
      </div>
    </section>
  )
}

export default Chatbot
