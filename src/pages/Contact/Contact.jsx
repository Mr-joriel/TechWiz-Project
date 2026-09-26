import { useState } from 'react'
import styles from './Contact.module.css'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className={styles.page}>
        <div className={styles.success}>
          <div className={styles.successIcon}>✓</div>

          <p className={styles.eyebrow}>MESSAGE SENT</p>

          <h1>Thanks for reaching out.</h1>

          <p>
            Your message has been received. We appreciate you taking the time
            to contact BudgetBasics.
          </p>

          <button
            className={styles.resetButton}
            onClick={() => setSubmitted(false)}
          >
            Send another message
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.page} aria-labelledby="contact-heading">
      <div className={styles.content}>

        <div className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>BUDGETBASICS · CONTACT</p>

            <h1 id="contact-heading">
              Let&apos;s talk
              <span> money.</span>
            </h1>

            <p className={styles.intro}>
              Have a question, suggestion, or need help with something on
              BudgetBasics? We&apos;d love to hear from you.
            </p>
          </div>

          <div className={styles.heroCard}>
            <div className={styles.cardIcon}>✉</div>

            <p className={styles.cardLabel}>GET IN TOUCH</p>

            <h2>We&apos;re here to listen.</h2>

            <p>
              Your questions and ideas help us make BudgetBasics more useful
              for everyone.
            </p>
          </div>
        </div>

        <div className={styles.contactGrid}>

          <div className={styles.info}>
            <p className={styles.sectionLabel}>CONTACT INFORMATION</p>

            <h2>How can we help?</h2>

            <p className={styles.infoText}>
              Whether you have a question about our budgeting resources,
              found something that needs fixing, or have an idea for a new
              feature, send us a message.
            </p>

            <div className={styles.infoList}>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>@</div>

                <div>
                  <p>EMAIL</p>
                  <strong>support@budgetbasics.com</strong>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>?</div>

                <div>
                  <p>QUESTIONS</p>
                  <strong>General enquiries</strong>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>💡</div>

                <div>
                  <p>IDEAS</p>
                  <strong>Suggestions &amp; feedback</strong>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>⚙</div>

                <div>
                  <p>SUPPORT</p>
                  <strong>Website issues</strong>
                </div>
              </div>

            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>

            <div className={styles.formHeader}>
              <div>
                <p className={styles.step}>01</p>
                <h2>Send us a message</h2>
              </div>

              <span className={styles.required}>Required</span>
            </div>

            <div className={styles.row}>

              <div className={styles.field}>
                <label htmlFor="name">Full name</label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email address</label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

            </div>

            <div className={styles.field}>
              <label htmlFor="subject">Subject</label>

              <input
                id="subject"
                type="text"
                placeholder="What would you like to talk about?"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                rows="7"
                placeholder="Write your message here..."
                required
              />
            </div>

            <div className={styles.submitArea}>
              <p>
                We appreciate your message and will review it carefully.
              </p>

              <button type="submit" className={styles.submitButton}>
                Send message →
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact
