

function BudgetCard({ emoji, title, description }) {
  return (
    <article className="card">
      <h2><span aria-hidden="true">{emoji}</span> {title}</h2>
      <p>{description}</p>
    </article>
  )
}

export default BudgetCard