import { useState } from 'react'

function KnowledgeCheck({ question, options, answer, correctFeedback, incorrectFeedback }) {
  const [selected, setSelected] = useState(null)
  const isCorrect = selected === answer

  return (
    <article className="card" style={{ padding: 'var(--space-4)' }}>
      <h2 style={{ marginBottom: 'var(--space-2)' }}>Knowledge check</h2>
      <p style={{ marginBottom: 'var(--space-3)' }}>{question}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        {options.map((option) => (
          <button
            key={option}
            className="btn btn--secondary"
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              textAlign: 'left',
              fontWeight: 400,
              fontSize: '1rem',
              padding: 'var(--space-2) var(--space-3)',
              ...(selected === option
                ? { borderColor: isCorrect ? 'var(--success)' : 'var(--danger)' }
                : {}),
            }}
            onClick={() => setSelected(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {selected && (
        <p
          style={{
            marginTop: 'var(--space-3)',
            padding: 'var(--space-2) var(--space-3)',
            borderRadius: 'var(--radius-md)',
            border: `1px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'}`,
            background: isCorrect ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
            color: isCorrect ? 'var(--success)' : 'var(--danger)',
          }}
        >
          {isCorrect ? correctFeedback : incorrectFeedback}
        </p>
      )}
    </article>
  )
}

export default KnowledgeCheck;