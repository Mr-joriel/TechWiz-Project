import { useState } from 'react'
import styles from './MoneyMistakes.module.css'
import mistakes from '../../data/mistakes.json'

function MoneyMistakes() {
  const [openId, setOpenId] = useState(mistakes[0]?.id ?? null)

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <section className={styles.page} aria-labelledby="moneymistakes-heading">
      <div className={styles.content}>
        <p className={styles.eyebrow}>Learn</p>
        <h1 id="moneymistakes-heading">Money mistakes</h1>
        <p className={styles.intro}>Five common slip-ups, each with a real student scenario and a fix.</p>

        <div className={styles.accordion}>
          {mistakes.map((mistake) => {
            const isOpen = openId === mistake.id
            return (
              <article key={mistake.id} className={styles.item}>
                <button
                  type="button"
                  className={styles.itemHeader}
                  onClick={() => toggle(mistake.id)}
                  aria-expanded={isOpen}
                >
                  <span>{mistake.title}</span>
                  <span className={styles.icon} aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>

                {isOpen && (
                  <div className={styles.itemBody}>
                    <p><strong>Scenario:</strong> {mistake.scenario}</p>
                    <p><strong>Fix:</strong> {mistake.fix}</p>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default MoneyMistakes