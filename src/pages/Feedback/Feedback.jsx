import { Link } from 'react-router-dom'
import styles from './Feedback.module.css'

const topics = [
  'Website experience',
  'Budgeting guides',
  'Infographics',
  'Learning resources',
  'Something else',
]

function Feedback() {
  const [rating, setRating] = useState(0)
  const [topic, setTopic] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    if (!rating || !topic || !message.trim()) {
      return
    }

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className={styles.page}>
        <div className={styles.success}>
          <div className={styles.successIcon}>✓</div>

          <p className={styles.eyebrow}>THANK YOU</p>

          <h1>Your feedback has been received.</h1>

          <p>
            Thanks for taking the time to help us improve BudgetBasics.
            Your feedback helps us build a better experience for everyone.
          </p>

          <button
            className={styles.resetButton}
            onClick={() => {
              setSubmitted(false)
              setRating(0)
              setTopic('')
              setMessage('')
            }}
          >
            Send another response
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.page} aria-labelledby="feedback-heading">
      <div className={styles.content}>

        <div className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>BUDGETBASICS · YOUR VOICE</p>

            <h1 id="feedback-heading">
              Help us make
              <span> BudgetBasics better.</span>
            </h1>

            <p className={styles.intro}>
              Your feedback helps us understand what works, what doesn't,
              and what we can improve.
            </p>
          </div>

          <div className={styles.quote}>
            <span>“</span>
            <p>
              Small feedback can lead to big improvements.
            </p>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>

          <div className={styles.formHeader}>
            <div>
              <p className={styles.step}>01</p>
              <h2>How was your experience?</h2>
            </div>

            <span className={styles.required}>Required</span>
          </div>

          <div className={styles.rating}>
            {[1, 2, 3, 4, 5].map((number) => (
              <button
                key={number}
                type="button"
                className={`${styles.star} ${
                  rating >= number ? styles.starActive : ''
                }`}
                onClick={() => setRating(number)}
                aria-label={`${number} star${number > 1 ? 's' : ''}`}
              >
                ★
              </button>
            ))}
          </div>

          <div className={styles.formSection}>
            <div className={styles.formHeader}>
              <div>
                <p className={styles.step}>02</p>
                <h2>What would you like to talk about?</h2>
              </div>
            </div>

            <div className={styles.topics}>
              {topics.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`${styles.topic} ${
                    topic === item ? styles.topicActive : ''
                  }`}
                  onClick={() => setTopic(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.formSection}>
            <div className={styles.formHeader}>
              <div>
                <p className={styles.step}>03</p>
                <h2>Tell us what you think</h2>
              </div>
            </div>

            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="What did you like? What could we improve?"
              rows="6"
              maxLength="500"
            />

            <div className={styles.characterCount}>
              {message.length}/500
            </div>
          </div>

          <div className={styles.submitArea}>
            <p>
              Your feedback helps shape the future of BudgetBasics.
            </p>

            <button type="submit" className={styles.submitButton}>
              Send feedback →
            </button>
          </div>

        </form>
      </div>
    </section>
  )
}

export default Feedback



