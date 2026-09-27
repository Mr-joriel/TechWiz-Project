import { useState } from 'react'
import styles from './Contact.module.css'

function Contact() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    if (Object.values(values).some((value) => !value.trim())) {
      setError('Please complete every field before sending.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setError('Enter a valid email address.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  function updateField(event) {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }))
    setError('')
  }

  if (submitted) {
    return (
      <section className={styles.page}>
        <div className={styles.success}>
          <div className={styles.successIcon}>✓</div>

          <p className={styles.eyebrow}>MESSAGE READY</p>

          <h1>Thanks for preparing a message.</h1>

          <p>
            Your form passed the local checks. This demonstration does not send or save your message.
          </p>

          <button
            className={styles.resetButton}
            onClick={() => { setSubmitted(false); setValues({ name: '', email: '', subject: '', message: '' }) }}
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
            <p className="alert">Contact the Aptech Ajao Estate team using the details below. Social links open Aptech&apos;s official corporate channels.</p>

            <div className={styles.infoList}>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>@</div>

                <div>
                  <p>EMAIL</p>
                  <a href="mailto:Aptech_Ajao@gmail.com">Aptech_Ajao@gmail.com</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>☎</div>
                <div><p>APTECH AJAO ESTATE · PHONE</p><a href="tel:+2349037161890">+234 903 716 1890</a></div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>↗</div>
                <div><p>OFFICIAL APTECH CHANNELS</p><div className={styles.socialLinks}><a href="https://www.instagram.com/thehouseofaptech/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.linkedin.com/company/aptech/" target="_blank" rel="noreferrer">LinkedIn</a></div></div>
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
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={values.name}
                  onChange={updateField}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email address</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={updateField}
                />
              </div>

            </div>

            <div className={styles.field}>
              <label htmlFor="subject">Subject</label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What would you like to talk about?"
                value={values.subject}
                onChange={updateField}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="7"
                placeholder="Write your message here..."
                value={values.message}
                onChange={updateField}
              />
            </div>

            <div className={styles.submitArea}>
              {error && <p className="alert alert--error" role="alert">{error}</p>}
              <p>
                We appreciate your message and will review it carefully.
              </p>

              <button type="submit" className={styles.submitButton}>
                Show confirmation →
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact
