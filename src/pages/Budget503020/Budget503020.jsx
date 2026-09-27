import styles from './Budget503020.module.css'
import { useState } from "react";
function Budget503020() {
  const [income, setIncome] = useState("");
  const [error, setError] = useState("");
  const [budget, setBudget] = useState(null);

  function handleCalculator() {
    const amount = Number(income);

    if (income.trim() === "") {
      setError("Please enter your monthly income.");
      setBudget(null);
      return;
    }

    if (isNaN(amount) || amount <= 0) {
      setError("Please enter a valid income amount.");
      setBudget(null);
      return;
    }

    setError("");

    setBudget({
      needs: amount * 0.5,
      wants: amount * 0.3,
      savings: amount * 0.2,
    });
  }

  return (
    <section className="page" aria-labelledby="budget-heading">
      <div className="page__content">
        <p className="page__eyebrow">Plan</p>

        <h1 id="budget-heading">50-30-20 Rule</h1>

        <p>
          Learn how to divide your income between needs, wants and savings.
        </p>

        <article className={`card ${styles.calculatorCard}`}>
          <label htmlFor="income">Monthly income (₦)</label>

          <input
            id="income"
            className="input"
            type="number"
            value={income}
            onChange={(event) => setIncome(event.target.value)}
            placeholder="Enter your monthly income"
          />

          {error && (
            <p className="alert alert--error">
              {error}
            </p>
          )}

          <button
            className="btn btn--primary"
            onClick={handleCalculator}
          >
            Calculate
          </button>
        </article>

        {budget && (
          <article className={`card ${styles.resultsCard}`}>
            <div className={styles.budgetLayout}>

  
              <div className={styles.budgetProgress}>
                <h2>Your budget breakdown</h2>

                <div className={styles.budgetItem}>
                  <div className={styles.budgetItemHeading}>
                    <h3>Needs · 50%</h3>
                    <strong>
                      ₦{budget.needs.toLocaleString()}
                    </strong>
                  </div>

                  <div className="progress">
                    <div
                      className={`progress__fill ${styles.needsProgress}`}
                      style={{ width: "50%" }}
                    ></div>
                  </div>

                  <p>Rent, food, transport, data</p>
                </div>

                <div className={styles.budgetItem}>
                  <div className={styles.budgetItemHeading}>
                    <h3>Wants · 30%</h3>
                    <strong>
                      ₦{budget.wants.toLocaleString()}
                    </strong>
                  </div>

                  <div className="progress">
                    <div
                      className={`progress__fill ${styles.wantsProgress}`}
                      style={{ width: "30%" }}
                    ></div>
                  </div>

                  <p>Streaming, outings, clothes</p>
                </div>

                <div className={styles.budgetItem}>
                  <div className={styles.budgetItemHeading}>
                    <h3>Savings · 20%</h3>
                    <strong>
                      ₦{budget.savings.toLocaleString()}
                    </strong>
                  </div>

                  <div className="progress">
                    <div
                      className={`progress__fill ${styles.savingsProgress}`}
                      style={{ width: "20%" }}
                    ></div>
                  </div>

                  <p>Emergency fund and goals</p>
                </div>
              </div>

              <div className={styles.budgetChart}>
                <h2>Budget chart</h2>

                <div className={styles.donutChart}>
                  <div className={styles.donutCenter}>
                    <strong>100%</strong>
                    <span>Income</span>
                  </div>
                </div>

                <div className={styles.chartLabels}>
                  <p>
                    <span className={`${styles.legendDot} ${styles.needsDot}`}></span>
                    Needs · 50%
                  </p>

                  <p>
                    <span className={`${styles.legendDot} ${styles.wantsDot}`}></span>
                    Wants · 30%
                  </p>

                  <p>
                    <span className={`${styles.legendDot} ${styles.savingsDot}`}></span>
                    Savings · 20%
                  </p>
                </div>
              </div>

            </div>

            <div className={styles.learningNote}>
              <strong>This is an estimate for learning only.</strong>
              <span>
                The 50-30-20 split is a guideline and can be adjusted.
              </span>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}

export default Budget503020;
