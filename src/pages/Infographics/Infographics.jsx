import { useState } from 'react'
import styles from './Infographics.module.css'

const steps = [
  {
    number: '01',
    title: 'Know your income',
    description:
      'Start by understanding how much money comes in each month. This gives you a clear starting point for your budget.',
    icon: '₦',
  },
  {
    number: '02',
    title: 'Track your spending',
    description:
      'See where your money goes by separating your essential expenses from things you spend on occasionally.',
    icon: '↗',
  },
  {
    number: '03',
    title: 'Set your limits',
    description:
      'Give each spending category a realistic limit so you know how much you can safely spend.',
    icon: '◈',
  },
  {
    number: '04',
    title: 'Save & adjust',
    description:
      'Put money toward your goals, review your progress, and adjust your budget when your situation changes.',
    icon: '✓',
  },
]

function Infographics() {
  const [activeStep, setActiveStep] = useState(0)

  const currentStep = steps[activeStep]

  return (
    <section className={styles.page} aria-labelledby="infographics-heading">
      <div className={styles.content}>

        <div className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>BUDGETBASICS · MONEY GUIDE</p>

            <h1 id="infographics-heading">
              How budgeting
              <span> actually works.</span>
            </h1>

            <p className={styles.intro}>
              A budget isn't about restricting yourself. It's about knowing
              where your money is going and giving every naira a purpose.
            </p>
          </div>

          <div className={styles.heroBadge}>
            <span className={styles.badgeIcon}>₦</span>
            <div>
              <strong>Money in control</strong>
              <small>One step at a time</small>
            </div>
          </div>
        </div>

        <div className={styles.infographic}>

          <div className={styles.stepList}>
            {steps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                className={`${styles.stepButton} ${
                  activeStep === index ? styles.active : ''
                }`}
                onClick={() => setActiveStep(index)}
                aria-pressed={activeStep === index}
              >
                <span className={styles.stepNumber}>{step.number}</span>

                <span className={styles.stepText}>
                  <strong>{step.title}</strong>
                  <small>
                    {index === 0 && 'Start here'}
                    {index === 1 && 'Understand your habits'}
                    {index === 2 && 'Plan your spending'}
                    {index === 3 && 'Build your future'}
                  </small>
                </span>

                <span className={styles.arrow}>→</span>
              </button>
            ))}
          </div>

          <div className={styles.detailCard}>
            <div className={styles.detailTop}>
              <span className={styles.detailIcon}>
                {currentStep.icon}
              </span>

              <span className={styles.progress}>
                {String(activeStep + 1).padStart(2, '0')} / 04
              </span>
            </div>

            <p className={styles.detailLabel}>
              STEP {currentStep.number}
            </p>

            <h2>{currentStep.title}</h2>

            <p className={styles.detailDescription}>
              {currentStep.description}
            </p>

            <div className={styles.progressBar}>
              <span
                style={{
                  width: `${((activeStep + 1) / steps.length) * 100}%`,
                }}
              />
            </div>

            <div className={styles.detailFooter}>
              <span>
                {activeStep === steps.length - 1
                  ? 'You understand the basics'
                  : 'Keep going'}
              </span>

              {activeStep < steps.length - 1 && (
                <button
                  type="button"
                  onClick={() => setActiveStep(activeStep + 1)}
                  className={styles.nextButton}
                >
                  Next step →
                </button>
              )}
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div>
            <p className={styles.eyebrow}>THE BIG IDEA</p>
            <h2>
              Your budget should work
              <span> for you.</span>
            </h2>
          </div>

          <p>
            Budgeting becomes easier when you turn it into a simple routine:
            understand your income, track your spending, plan ahead, and
            review your progress.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Infographics