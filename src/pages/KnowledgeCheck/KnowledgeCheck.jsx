import { useState } from 'react'
import styles from './KnowledgeCheck.module.css'

function KnowledgeCheck({ question, options, answer, correctFeedback, incorrectFeedback }) {
  const [selected, setSelected] = useState(null)
  const isCorrect = selected === answer

  return <article className={`card ${styles.card}`}>
    <p className={styles.eyebrow}>Quick check</p>
    <h2>Knowledge check</h2>
    <p>{question}</p>
    <div className={styles.options}>{options.map((option) => <button key={option} type="button" className={`btn btn--secondary ${styles.option} ${selected === option ? (isCorrect ? styles.correct : styles.incorrect) : ''}`} aria-pressed={selected === option} onClick={() => setSelected(option)}>{option}</button>)}</div>
    {selected && <p className={`${styles.feedback} ${isCorrect ? styles.feedbackCorrect : styles.feedbackIncorrect}`} role="status">{isCorrect ? correctFeedback : incorrectFeedback}</p>}
  </article>
}

export default KnowledgeCheck
