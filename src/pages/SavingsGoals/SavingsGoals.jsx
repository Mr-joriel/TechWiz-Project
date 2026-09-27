import { useState } from "react";
import ProgressBar from "../../components/common/ProgressBar/ProgressBar";
import "./SavingsGoals.css";

function SavingsGoals() {
  const [goalName, setGoalName] = useState("");
  const [target, setTarget] = useState("");
  const [saved, setSaved] = useState("");
  const [monthly, setMonthly] = useState("");

  const [goals, setGoals] = useState([]);
  const [error, setError] = useState("");

  function handleAddGoal() {
    const targetAmount = Number(target);
    const savedAmount = Number(saved);
    const monthlyAmount = Number(monthly);

    if (goalName.trim() === "") {
      setError("Please enter a goal name.");
      return;
    }

    if (target.trim() === "" || saved.trim() === "" || monthly.trim() === "") {
      setError("Please fill in all the fields.");
      return;
    }

    if (
      isNaN(targetAmount) ||
      isNaN(savedAmount) ||
      isNaN(monthlyAmount)
    ) {
      setError("Please enter numbers only.");
      return;
    }

    if (
      targetAmount <= 0 ||
      savedAmount < 0 ||
      monthlyAmount <= 0
    ) {
      setError("Please enter valid amounts.");
      return;
    }

    if (savedAmount > targetAmount) {
      setError("Saved amount cannot be more than the target.");
      return;
    }

    const remaining = targetAmount - savedAmount;

    const monthsNeeded =
      remaining === 0
        ? 0
        : Math.ceil(remaining / monthlyAmount);

    const progress = (savedAmount / targetAmount) * 100;

    const newGoal = {
      id: Date.now(),
      name: goalName,
      target: targetAmount,
      saved: savedAmount,
      monthly: monthlyAmount,
      remaining: remaining,
      months: monthsNeeded,
      progress: progress,
    };

    setGoals([...goals, newGoal]);

    setGoalName("");
    setTarget("");
    setSaved("");
    setMonthly("");
    setError("");
  }

  function handleRemoveGoal(id) {
    const updatedGoals = goals.filter((goal) => goal.id !== id);
    setGoals(updatedGoals);
  }

  return (
    <section className="page" aria-labelledby="savings-heading">
      <div className="page__content">

        <p className="page__eyebrow">Plan</p>

        <h1 id="savings-heading">Savings Goals</h1>

        <p className="savings-intro">
          Name a goal and see how many months it needs.
          Goals last only for this visit.
        </p>

        <div className="savings-goals-layout">

          {/* LEFT: New goal form */}

          <article className="card new-goal-card">

            <h2>New goal</h2>

            <label htmlFor="goal-name">
              Goal name
            </label>

            <input
              id="goal-name"
              className="input"
              type="text"
              value={goalName}
              onChange={(event) => setGoalName(event.target.value)}
              placeholder="New laptop"
            />

            <div className="goal-input-row">

              <div>
                <label htmlFor="target">
                  Target (₦)
                </label>

                <input
                  id="target"
                  className="input"
                  type="number"
                  value={target}
                  onChange={(event) => setTarget(event.target.value)}
                  placeholder="450000"
                />
              </div>

              <div>
                <label htmlFor="saved">
                  Saved so far (₦)
                </label>

                <input
                  id="saved"
                  className="input"
                  type="number"
                  value={saved}
                  onChange={(event) => setSaved(event.target.value)}
                  placeholder="60000"
                />
              </div>

            </div>

            <label htmlFor="monthly">
              Monthly contribution (₦)
            </label>

            <input
              id="monthly"
              className="input"
              type="number"
              value={monthly}
              onChange={(event) => setMonthly(event.target.value)}
              placeholder="25000"
            />

            {error && (
              <p className="alert alert--error">
                {error}
              </p>
            )}

            <button
              className="btn btn--primary add-goal-button"
              onClick={handleAddGoal}
            >
              Add goal
            </button>

          </article>


          {/* RIGHT: Goal cards */}

          <div className="goals-list">

            {goals.length === 0 ? (
              <div className="empty-goals">
                <p>🎯</p>
                <h2>Your goals will appear here </h2>

                <p>
                  Add your first savings goal to start tracking
                  your progress.
                </p>
              </div>
            ) : (
              goals.map((goal) => (
                <article
                  className="card goal-card"
                  key={goal.id}
                >

                  <div className="goal-card__header">

                    <h2>{goal.name}</h2>

                    <button
                      className="remove-goal-button"
                      onClick={() => handleRemoveGoal(goal.id)}
                    >
                      Remove
                    </button>

                  </div>

                  <ProgressBar progress={goal.progress} />

                  <p className="goal-card__summary">
                    <strong>
                      ₦{goal.remaining.toLocaleString()}
                    </strong>{" "}
                    left ·{" "}
                    <strong>{goal.months}</strong>{" "}
                    month{goal.months !== 1 ? "s" : ""}
                  </p>

                  <p className="goal-card__tip">
                    Tip: automate your ₦
                    {goal.monthly.toLocaleString()} the day
                    income arrives.
                  </p>

                </article>
              ))
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default SavingsGoals;