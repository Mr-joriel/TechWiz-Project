import { useState } from "react";
import "./Budget503020.css";

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

        <article className="card calculator-card">
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
          <article className="card results-card">
            <div className="budget-layout">

  
              <div className="budget-progress">
                <h2>Your budget breakdown</h2>

                <div className="budget-item">
                  <div className="budget-item__heading">
                    <h3>Needs · 50%</h3>
                    <strong>
                      ₦{budget.needs.toLocaleString()}
                    </strong>
                  </div>

                  <div className="progress">
                    <div
                      className="progress__fill needs-progress"
                      style={{ width: "50%" }}
                    ></div>
                  </div>

                  <p>Rent, food, transport, data</p>
                </div>

                <div className="budget-item">
                  <div className="budget-item__heading">
                    <h3>Wants · 30%</h3>
                    <strong>
                      ₦{budget.wants.toLocaleString()}
                    </strong>
                  </div>

                  <div className="progress">
                    <div
                      className="progress__fill wants-progress"
                      style={{ width: "30%" }}
                    ></div>
                  </div>

                  <p>Streaming, outings, clothes</p>
                </div>

                <div className="budget-item">
                  <div className="budget-item__heading">
                    <h3>Savings · 20%</h3>
                    <strong>
                      ₦{budget.savings.toLocaleString()}
                    </strong>
                  </div>

                  <div className="progress">
                    <div
                      className="progress__fill savings-progress"
                      style={{ width: "20%" }}
                    ></div>
                  </div>

                  <p>Emergency fund and goals</p>
                </div>
              </div>

              <div className="budget-chart">
                <h2>Budget chart</h2>

                <div className="donut-chart">
                  <div className="donut-center">
                    <strong>100%</strong>
                    <span>Income</span>
                  </div>
                </div>

                <div className="chart-labels">
                  <p>
                    <span className="legend-dot needs-dot"></span>
                    Needs · 50%
                  </p>

                  <p>
                    <span className="legend-dot wants-dot"></span>
                    Wants · 30%
                  </p>

                  <p>
                    <span className="legend-dot savings-dot"></span>
                    Savings · 20%
                  </p>
                </div>
              </div>

            </div>

            <div className="learning-note">
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
