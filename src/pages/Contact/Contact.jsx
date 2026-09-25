import { Link } from 'react-router-dom'
import styles from './Contact.module.css'

function Contact() {
  return (
    <section className={styles.page} aria-labelledby="contact-heading">
      <div className={styles.content}>
        <p className={styles.eyebrow}>BudgetBasics · Coming soon</p>
        <h1 id="contact-heading">Contact Us</h1>
        <p>Find contact information for the BudgetBasics team.</p>
        <article className={styles.card}>
          <h2>This page is being built</h2>
          <p>The page structure and shared design styles are ready for its feature work.</p>
          <Link className="btn btn--primary" to="/sitemap">Explore available pages <span aria-hidden="true">→</span></Link>
        </article>
      </div>
    </section>
  )
}

export default Contact
