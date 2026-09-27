# Favor - Contribution Report

## Overview

I built the interactive planning tools for BudgetBasics: the 50-30-20 calculator, Savings Goals, and Expense Planner. I also created the reusable progress indicator and added input validation and responsive layouts for these features.

## 50-30-20 calculator

At the calculator route, I let a learner enter a sample monthly income and view suggested amounts for needs, wants, and savings. The page labels the categories, shows the split visually with progress bars and a chart, and explains that the result is an educational estimate that can be adjusted. Blank, invalid, zero, and negative income values are rejected with a clear message.

## Savings Goals

At the savings goals route, a learner can enter a goal name, target amount, current savings, and monthly contribution. The page calculates the remaining amount, estimates the number of months needed, displays progress, and gives an encouraging saving tip. Goals can be removed. They exist only in the current page session and are not sent to or permanently stored by a server. The form checks for missing values, non-numeric or negative amounts, contributions that are not positive, and savings above the target.

## Expense Planner

At the planner route, a learner can enter a sample monthly budget and add dated expenses with a category, description, and amount. The seven categories are Food, Transport, Education, Entertainment, Shopping, Utilities, and Miscellaneous. The page displays entries in a temporary table, calculates planned spending and the remaining balance, and supports editing and removing entries. Budget and expense values are validated before use. All planner state is temporary in the browser session.

## Reusable progress indicator and styling

I created a shared progress indicator for savings goals and used it to show progress on each goal. I organized page styling into CSS Modules and used the shared design tokens so the planner pages follow the same visual system and adapt to smaller screens and dark mode.

## Learning and challenges

I used React state to keep the form values and results in sync, and separated validation, calculations, and list updates into manageable interactions. Making the planner responsive while preserving a readable expense table was an important design challenge.
