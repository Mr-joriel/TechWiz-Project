# BudgetBasics - Favor Contribution

## My Contributions

I worked on four main parts of BudgetBasics:

- 50-30-20 Rule Calculator
- Savings Goals
- Expense Planner
- Reusable ProgressBar component

I also worked on form validation and responsive styling for these features.

---

## 1. 50-30-20 Rule Calculator

### Route

`/calculator`

### What I Built

I created a calculator that allows the user to enter their monthly income and see how it can be divided using the 50-30-20 budgeting guideline.

The calculator divides the income into:

- 50% Needs
- 30% Wants
- 20% Savings

### How It Works

The user enters their income into an input field.

The value is converted to a number and then used to calculate the three categories.

```js
const amount = Number(income);

setBudget({
  needs: amount * 0.5,
  wants: amount * 0.3,
  savings: amount * 0.2,
});
````

For example, if the income is ₦100,000:

```text
Needs = ₦50,000
Wants = ₦30,000
Savings = ₦20,000
```

The results are displayed using progress bars and a visual budget chart.

### Validation

I added validation so the calculator does not calculate when:

* The income field is empty.
* The value is not a valid number.
* The income is zero or negative.

The page also includes:

> This is an estimate for learning only.

---

## 2. Savings Goals

### Route

`/goals`

### What I Built

I created a Savings Goals feature where users can create a goal and track how close they are to reaching it.

The user enters:

* Goal name
* Target amount
* Amount already saved
* Monthly contribution

### How It Works

When the user clicks **Add goal**, the application calculates how much money is still needed.

```js
const remaining = targetAmount - savedAmount;
```

It also calculates how many months the user may need to reach the target.

```js
const monthsNeeded =
  remaining === 0
    ? 0
    : Math.ceil(remaining / monthlyAmount);
```

I used `Math.ceil()` because the result represents months, so a partial month needs to be counted as another month.

### Progress

The progress percentage is calculated using:

```js
const progress = (savedAmount / targetAmount) * 100;
```

The calculated progress is then passed to the reusable ProgressBar:

```jsx
<ProgressBar progress={goal.progress} />
```

### Features

Users can:

* Add a savings goal.
* See how much is remaining.
* See the estimated number of months needed.
* See their savings progress.
* Remove a goal.

### Validation

I added validation to prevent:

* Empty goal names.
* Empty fields.
* Invalid numbers.
* Negative amounts.
* A saved amount greater than the target.
* Invalid monthly contributions.

---

## 3. Expense Planner

### Route

`/planner`

### What I Built

I created an Expense Planner that allows users to practice managing their spending against a monthly budget.

The user first enters a monthly spending budget.

They can then add expenses with:

* Date
* Category
* Description
* Amount

### Expense Categories

I added seven categories:

```js
const categories = [
  "Food",
  "Transport",
  "Education",
  "Entertainment",
  "Shopping",
  "Utilities",
  "Miscellaneous",
];
```

### Adding Expenses

When the user adds an expense, I create an expense object containing the information entered by the user.

```js
const newExpense = {
  id: Date.now(),
  date,
  category,
  description,
  amount: expenseAmount,
};
```

The new expense is then added to the existing expenses:

```js
setExpenses([...expenses, newExpense]);
```

### Total Spending

I used `reduce()` to calculate the total amount of all expenses.

```js
const totalSpent = expenses.reduce(
  (total, expense) => total + expense.amount,
  0
);
```

### Remaining Budget

The remaining balance is calculated by subtracting the total expenses from the budget.

```js
const remaining = Number(budget || 0) - totalSpent;
```

### Editing Expenses

I used `map()` to find the expense being edited and replace its information.

```js
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
```

### Removing Expenses

I used `filter()` to remove an expense based on its ID.

```js
const updatedExpenses = expenses.filter(
  (expense) => expense.id !== id
);
```

### Features

Users can:

* Add expenses.
* Edit expenses.
* Remove expenses.
* View expenses in a table.
* See total planned spending.
* See their remaining budget.
* See the percentage of their budget that has been planned.

### Validation

I made sure the user cannot add an expense when:

* The date is empty.
* The category is missing.
* The description is empty.
* The amount is empty.
* The amount is not a valid number.
* The amount is zero or negative.

---

## 4. ProgressBar Component

### Location

`src/components/common/ProgressBar/`

### What I Built

I created a reusable ProgressBar component so different parts of the website can display progress without creating a new progress bar each time.

The component receives the progress value through props:

```jsx
<ProgressBar progress={goal.progress} />
```

Inside the component, I make sure the value stays between 0 and 100.

```js
let currentProgress = progress;

if (currentProgress < 0) {
  currentProgress = 0;
}

if (currentProgress > 100) {
  currentProgress = 100;
}
```

The value is then used to control the width of the progress bar:

```jsx
style={{ width: `${currentProgress}%` }}
```

This component is mainly used for displaying savings progress.

---

## 5. Form Validation

Form validation was important because the user should not be able to submit incorrect information.

### Calculator

I checked that the income:

* Is not empty.
* Is a valid number.
* Is greater than zero.

### Savings Goals

I checked that:

* The goal name is provided.
* All fields are filled.
* The amounts are numbers.
* The target is greater than zero.
* The saved amount is not negative.
* The monthly contribution is greater than zero.
* The saved amount does not exceed the target.

### Expense Planner

I checked that:

* A date is selected.
* A category is selected.
* A description is provided.
* An amount is entered.
* The amount is a valid positive number.

When something is wrong, an error message is shown to the user.

---

## 6. Styling

I created separate CSS files for my pages:

```text
Budget503020.css
SavingsGoals.css
ExpensePlanner.css
```

I used:

* CSS Grid
* Flexbox
* Media queries
* Shared CSS variables
* Cards
* Buttons
* Progress bars

For example, the Savings Goals page uses a two-column layout where the new goal form appears on one side and the saved goals appear on the other.

The layout changes to one column on smaller screens.

The Expense Planner also uses a responsive layout so the form and expense information remain usable on smaller screens.

---

## 7. React Concepts I Used

### useState

I used `useState` to store changing information such as:

* Income
* Goals
* Expenses
* Form inputs
* Error messages
* Editing state
* Calculator results

### Props

I used props to pass progress information into the reusable ProgressBar component.

```jsx
<ProgressBar progress={goal.progress} />
```

### map()

I used `map()` to display lists and update existing expenses.

### filter()

I used `filter()` to remove goals and expenses.

### reduce()

I used `reduce()` to calculate the total expenses.

### Math.ceil()

I used `Math.ceil()` to calculate the estimated number of complete months needed for a savings goal.

---

## 8. Challenges I Faced

One challenge was understanding how to manage multiple pieces of state in React.

Another challenge was handling calculations and making sure the user could not enter invalid values.

The Expense Planner was also challenging because it required several operations:

* Adding expenses
* Editing expenses
* Removing expenses
* Calculating totals
* Updating the remaining balance

I solved these by breaking the features into smaller functions and using React state together with JavaScript array methods.

I also had to make the layouts responsive so the pages could work on different screen sizes.

---

## 9. Git

I worked on my own feature branch:

```text
feature/favor
```

After completing my features, I committed and pushed my work to GitHub.

My branch was then ready to be reviewed through the team's pull request workflow.

---

## Summary

My main contribution to BudgetBasics was building the interactive budgeting tools.

I built:

1. The 50-30-20 Rule Calculator.
2. The Savings Goals feature.
3. The Expense Planner.
4. The reusable ProgressBar component.
5. Form validation and responsive styling for my features.
