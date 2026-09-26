import { useState } from "react";
import "./ExpensePlanner.css";

function ExpensePlanner() {
  const [budget, setBudget] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Food");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const [expenses, setExpenses] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  const categories = [
    "Food",
    "Transport",
    "Education",
    "Entertainment",
    "Shopping",
    "Utilities",
    "Miscellaneous",
  ];

  const totalSpent = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const remaining = Number(budget || 0) - totalSpent;

  const plannedPercentage =
    Number(budget) > 0
      ? Math.min((totalSpent / Number(budget)) * 100, 100)
      : 0;

  function handleAddExpense() {
    const expenseAmount = Number(amount);

    if (
      date === "" ||
      category === "" ||
      description.trim() === "" ||
      amount.trim() === ""
    ) {
      setError("Please fill in all expense fields.");
      return;
    }

    if (isNaN(expenseAmount) || expenseAmount <= 0) {
      setError("Please enter a valid expense amount.");
      return;
    }

    if (editingId !== null) {
      const updatedExpenses = expenses.map((expense) =>
        expense.id === editingId
          ? {
              ...expense,
              date,
              category,
              description,
              amount: expenseAmount,
            }
          : expense
      );

      setExpenses(updatedExpenses);
      setEditingId(null);
    } else {
      const newExpense = {
        id: Date.now(),
        date,
        category,
        description,
        amount: expenseAmount,
      };

      setExpenses([...expenses, newExpense]);
    }

    setDate("");
    setCategory("Food");
    setDescription("");
    setAmount("");
    setError("");
  }

  function handleEdit(expense) {
    setDate(expense.date);
    setCategory(expense.category);
    setDescription(expense.description);
    setAmount(expense.amount.toString());
    setEditingId(expense.id);
  }

  function handleRemove(id) {
    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== id
    );

    setExpenses(updatedExpenses);
  }

  function handleCancelEdit() {
    setDate("");
    setCategory("Food");
    setDescription("");
    setAmount("");
    setEditingId(null);
    setError("");
  }

  return (
    <section className="page" aria-labelledby="planner-heading">
      <div className="page__content">

        <p className="page__eyebrow">Plan</p>

        <h1 id="planner-heading">Expense planner</h1>

        <p className="planner-intro">
          Add sample expenses, edit or remove them, and watch
          the balance change. Entries vanish when you close the tab.
        </p>

        <div className="planner-layout">

          <article className="card planner-form-card">

            <label htmlFor="budget">
              Monthly spending budget (₦)
            </label>

            <input
              id="budget"
              className="input"
              type="number"
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
              placeholder="80000"
            />

            <div className="planner-divider"></div>

            <h2>Add an expense</h2>

            <div className="expense-input-row">

              <div>
                <label htmlFor="date">Date</label>

                <input
                  id="date"
                  className="input"
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="category">Category</label>

                <select
                  id="category"
                  className="input"
                  value={category}
                  onChange={(event) =>
                    setCategory(event.target.value)
                  }
                >
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            <label htmlFor="description">
              Description
            </label>

            <input
              id="description"
              className="input"
              type="text"
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              placeholder="Campus shuttle"
            />

            <label htmlFor="amount">
              Amount (₦)
            </label>

            <input
              id="amount"
              className="input"
              type="number"
              value={amount}
              onChange={(event) =>
                setAmount(event.target.value)
              }
              placeholder="1500"
            />

            {error && (
              <p className="alert alert--error">
                {error}
              </p>
            )}

            <div className="planner-buttons">

              <button
                className="btn btn--primary"
                onClick={handleAddExpense}
              >
                {editingId !== null
                  ? "Update expense"
                  : "Add expense"}
              </button>

              {editingId !== null && (
                <button
                  className="btn btn--secondary"
                  onClick={handleCancelEdit}
                >
                  Cancel edit
                </button>
              )}

            </div>

          </article>


          <div className="planner-results">


            <article className="card budget-summary">

              <div className="summary-item">
                <span>Planned</span>

                <strong>
                  ₦{totalSpent.toLocaleString()}
                </strong>
              </div>

              <div className="summary-item">
                <span>Budget</span>

                <strong>
                  ₦{Number(budget || 0).toLocaleString()}
                </strong>
              </div>

              <div className="summary-item">
                <span>Remaining</span>

                <strong className={
                  remaining < 0
                    ? "remaining-negative"
                    : "remaining-positive"
                }>
                  ₦{remaining.toLocaleString()}
                </strong>
              </div>

              <div className="planner-progress">

                <div className="planner-progress__bar">
                  <div
                    className="planner-progress__fill"
                    style={{
                      width: `${plannedPercentage}%`,
                    }}
                  ></div>
                </div>

                <p>
                  {Math.round(plannedPercentage)}% of your
                  budget is planned.
                </p>

              </div>

            </article>


        

            {expenses.length === 0 ? (
              <article className="card empty-expenses">

                <div className="empty-expenses__icon">
                  🧾
                </div>

                <h2>No expenses planned</h2>

                <p>
                  Add your first sample expense and it will
                  appear here.
                </p>

              </article>
            ) : (
              <article className="card expenses-card">

                <h2>Your expenses</h2>

                <div className="table-wrap">

                  <table className="table">

                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {expenses.map((expense) => (
                        <tr key={expense.id}>

                          <td>{expense.date}</td>

                          <td>{expense.category}</td>

                          <td>{expense.description}</td>

                          <td>
                            ₦{expense.amount.toLocaleString()}
                          </td>

                          <td>
                            <div className="expense-actions">

                              <button
                                className="btn btn--small btn--secondary"
                                onClick={() =>
                                  handleEdit(expense)
                                }
                              >
                                Edit
                              </button>

                              <button
                                className="btn btn--small"
                                onClick={() =>
                                  handleRemove(expense.id)
                                }
                              >
                                Remove
                              </button>

                            </div>
                          </td>

                        </tr>
                      ))}
                    </tbody>

                  </table>

                </div>

              </article>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default ExpensePlanner;