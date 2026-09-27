import { useState } from 'react'
import styles from './BudgetCard.module.css'

function BudgetCard({ emoji, title, description, details }) {
  const [expanded, setExpanded] = useState(false)
  const detailsId = `budget-detail-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

  return <article className={`card ${styles.card}`}>
    <button className={styles.trigger} type="button" aria-expanded={expanded} aria-controls={detailsId} onClick={() => setExpanded((open) => !open)}>
      <span className={styles.icon} aria-hidden="true">{emoji}</span>
      <span className={styles.title}>{title}</span>
      <span className={styles.expandIcon} aria-hidden="true">{expanded ? '−' : '+'}</span>
      <span className="sr-only">{expanded ? 'Hide' : 'Show'} details about {title}</span>
    </button>
    <p className={styles.description}>{description}</p>
    <div className={styles.details} id={detailsId} hidden={!expanded}><p>{details}</p></div>
  </article>
}

export default BudgetCard
