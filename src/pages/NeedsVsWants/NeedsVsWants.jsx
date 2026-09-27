import { useState } from 'react'
import styles from './NeedsVsWants.module.css'
import items from '../../data/needsWants.json'


function getResultMessage(score, total) {
  if (score >= total * 0.8) return 'Great instincts. You know the difference.'
  if (score >= total * 0.4) return 'Good start, play again to sharpen it.'
  return 'Worth another round . Needs and wants get confusing fast.'
}

function NeedsVsWants() {
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0) 
  const [selected, setSelected] = useState(null)
  const [finished, setFinished] = useState(false)

  const current = items[index]
  const isLastItem = index + 1 === items.length

  const handleAnswer = (choice) => {
    if (selected) return
    setSelected(choice)
    if (choice === current.answer) {
      setScore((s) => s + 1)
    }
  }

  const handleNext = () => {
    if (isLastItem) {
      setFinished(true)
    } else {
      setIndex((i) => i + 1)
      setSelected(null)
    }
  }

  const handleRestart = () => {
    setIndex(0)
    setScore(0)
    setSelected(null)
    setFinished(false)
  }

  return (
    <section className={styles.page} aria-labelledby="needsvswants-heading">
      <div className={styles.content}>
        <p className={styles.eyebrow}>Learn</p>
        <h1 id="needsvswants-heading">Needs vs Wants</h1>
        <p className={styles.intro}>Pick a side, get instant feedback.</p>

        <div className={styles.gameGrid}>
          <article className={styles.card}>
            {!finished ? (
              <>
                <div className={styles.cardHeader}>
                  <span>Item {index + 1} of {items.length}</span>
                  <span>Score: {score}</span>
                </div>

                <h2 className={styles.itemLabel}>{current.label}</h2>

                <div className={styles.choiceRow}>
                  <button
                    type="button"
                    className={`${styles.choiceBtn} ${styles.needBtn} ${
                      selected ? (current.answer === 'Need' ? styles.correct : selected === 'Need' ? styles.incorrect : '') : ''
                    }`}
                    onClick={() => handleAnswer('Need')}
                    disabled={!!selected}
                  >
                    Need
                  </button>
                  <button
                    type="button"
                    className={`${styles.choiceBtn} ${styles.wantBtn} ${
                      selected ? (current.answer === 'Want' ? styles.correct : selected === 'Want' ? styles.incorrect : '') : ''
                    }`}
                    onClick={() => handleAnswer('Want')}
                    disabled={!!selected}
                  >
                    Want
                  </button>
                </div>

                {selected && (
                  <p className={selected === current.answer ? styles.feedbackCorrect : styles.feedbackIncorrect}>
                    {selected === current.answer ? (
                      <strong>Correct!</strong>
                    ) : (
                      <>
                        <strong>Not quite.</strong> {current.explanation}
                      </>
                    )}
                  </p>
                )}

                {selected && (
                  <button type="button" className={styles.nextBtn} onClick={handleNext}>
                    {isLastItem ? 'See score' : 'Next item'}
                  </button>
                )}
              </>
            ) : (
              <div className={styles.results}>
                <h2>You scored {score} / {items.length}</h2>
                <p>{getResultMessage(score, items.length)}</p>
                <div className={styles.resultActions}>
                  <button type="button" className={styles.nextBtn} onClick={handleRestart}>
                    Play again
                  </button>
                </div>
              </div>
            )}
          </article>

          <aside className={styles.guideCard}>
            <h2>Decision guide</h2>
            <p>Before any non-essential purchase, ask:</p>
            <div className={styles.guideRow}>
              <span className={styles.guideQuestion}>Is it essential now?</span>
              <span className={styles.yes}>Yes → Prioritise</span>
              <span className={styles.no}>No → Wait 24 hours</span>
            </div>
            <div className={styles.guideTip}>Waiting is free. Many wants fade before the timer ends.</div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default NeedsVsWants