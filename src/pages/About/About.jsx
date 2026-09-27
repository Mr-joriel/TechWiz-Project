import { Link } from 'react-router-dom'
import styles from './About.module.css'

function About() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>ABOUT BUDGETBASICS</p>

          <h1>
            Take control of your money.
            <span> One simple choice at a time.</span>
          </h1>

          <p className={styles.intro}>
            BudgetBasics was created to make personal budgeting simple,
            understandable, and accessible. We believe managing money
            shouldn't require complicated spreadsheets or financial jargon.
          </p>

          <div className={styles.actions}>
            <Link className="btn btn--primary" to="/dashboard">
              Start budgeting
            </Link>

            <Link className={styles.secondaryButton} to="/sitemap">
              Explore BudgetBasics →
            </Link>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.moneyCard}>
            <span>Monthly balance</span>
            <strong>₦245,000</strong>
            <small>You're on track this month</small>
          </div>

          <div className={styles.miniCard}>
            <span>✓</span>
            Smart spending
          </div>

          <div className={styles.circle}></div>
        </div>
      </section>

      <section className={styles.mission}>
        <p className={styles.eyebrow}>OUR MISSION</p>

        <h2>Money management should feel empowering, not overwhelming.</h2>

        <p>
          BudgetBasics helps users understand where their money goes,
          plan their spending, and build healthier financial habits.
          Our goal is to turn budgeting from a stressful task into
          something clear and achievable.
        </p>
      </section>

      <section className={styles.values}>
        <div className={styles.value}>
          <div className={styles.icon}>01</div>
          <h3>Simple</h3>
          <p>
            Clear tools and straightforward information without
            unnecessary complexity.
          </p>
        </div>

        <div className={styles.value}>
          <div className={styles.icon}>02</div>
          <h3>Practical</h3>
          <p>
            Built around everyday spending, saving, and budgeting
            decisions.
          </p>
        </div>

        <div className={styles.value}>
          <div className={styles.icon}>03</div>
          <h3>For everyone</h3>
          <p>
            Whether you're just starting out or improving your
            financial habits, BudgetBasics is designed to help.
          </p>
        </div>
      </section>

      <section className={styles.story}>
        <div>
          <p className={styles.eyebrow}>WHY WE BUILT IT</p>
          <h2>Built to make budgeting easier to understand.</h2>
        </div>

        <p>
          We built BudgetBasics around a simple idea: people should be
          able to understand their finances without needing to be
          financial experts. Every part of the experience is designed
          to make financial information easier to see, understand,
          and act on.
        </p>
      </section>

      <section className={styles.cta}>
        <p className={styles.eyebrow}>READY TO GET STARTED?</p>
        <h2>Your money. Your goals. Your plan.</h2>

        <Link className="btn btn--primary" to="/dashboard">
          Start your journey →
        </Link>
      </section>
    </main>
  )
}

export default About
