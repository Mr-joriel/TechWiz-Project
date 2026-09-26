import styles from './BudgetingBasics.module.css'
import BudgetCard from '../BudgetCard/BudgetCard.jsx'
import KnowledgeCheck from '../KnowledgeCheck/KnowledgeCheck.jsx'
import budgetBasics from '../../data/budgetBasics.json'
import sampleMonth from '../../data/sampleMonth.json'
import checkData from '../../data/knowledgeCheck.json'

function BudgetingBasics() {
  return (
    <section className={styles.page} aria-labelledby="budgetingbasics-heading">
      <div className={styles.content}>
        <p className={styles.eyebrow}>Learn</p>
        <h1 id="budgetingbasics-heading">Budgeting Basics</h1>
        <p className={styles.intro}>Learn the building blocks of a student budget.</p>

        <div className={styles.cardGrid}>
          {budgetBasics.map((item) => (
            <BudgetCard
              key={item.id}
              emoji={item.emoji}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <div className={styles.splitGrid}>
          <article className="card">
            <h2>Sample student month</h2>
            <p>Sample values only, in Nigerian naira.</p>
            <div className="table-wrap">
              <table className={`table ${styles.sampleTable}`}>
                <thead>
                  <tr><th>Item</th><th>Type</th><th>Amount</th></tr>
                </thead>
                <tbody>
                  {sampleMonth.map((row) => (
                    <tr key={row.id}>
                      <td>{row.item}</td>
                      <td>{row.type}</td>
                      <td>{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <KnowledgeCheck
            question={checkData.question}
            options={checkData.options}
            answer={checkData.answer}
            correctFeedback={checkData.correctFeedback}
            incorrectFeedback={checkData.incorrectFeedback}
          />
        </div>
      </div>
    </section>
  )
}

export default BudgetingBasics