# BudgetBasics — Tochi Contribution

## Overview
This document covers the features I built for the BudgetBasics project:
**Budgeting Basics**, **Needs vs Wants**, and **Money Mistakes** — all
under the site's Learn section.

---

## 1. Budgeting Basics

**Route:** `/basics`
**Folder:** `pages/BudgetingBasics`
**Data:** `budgetBasics.json`
**Nav path:** Learn → Budgeting Basics

Introduces the building blocks of a student budget.

**What it includes:**
- A card grid covering six core budgeting concepts: income, fixed
  expenses, variable expenses, requirements, wants, and savings.
- A sample student monthly budget table, with clearly labelled sample
  values in Nigerian naira (allowance, hostel contribution, transport,
  food, data/airtime, outings, savings).
- One knowledge-check multiple-choice question testing whether the user
  can identify a fixed expense.

**Implementation notes:**
- Card content and the sample-budget table are both driven by JSON
  (`budgetBasics.json`, `sampleMonth.json`), so content edits don't
  require touching component logic.
- `KnowledgeCheck` is a fully reusable component: it accepts `question`,
  `options`, `answer`, `correctFeedback`, and `incorrectFeedback` as
  props (all sourced from `knowledgeCheck.json`). It tracks the user's
  `selected` option in state, compares it to `answer` to determine
  correctness, colors the chosen option's border green or red
  accordingly, and reveals the matching feedback message underneath.

**Sub-component — BudgetCard:**
A small, stateless presentational component used to render each item in
the card grid. Takes `emoji`, `title`, and `description` as props and
displays them inside a standard `.card` article. No logic of its own —
purely a display shell driven entirely by whatever `budgetBasics.json`
provides.

---

## 2. Needs vs Wants

**Route:** `/needs-wants`
**Folder:** `pages/NeedsVsWants`
**Data:** `needsWants.json`
**Nav path:** Learn → Needs vs Wants

An interactive 10-item quiz classifying real student expenses as a Need
or a Want.

**What it includes:**
- Ten sample items to classify (e.g. hostel rent, sneakers, textbooks),
  loaded from `needsWants.json`, each with a `label`, correct `answer`,
  and an `explanation` used when the user answers incorrectly.
- Instant feedback on every answer, explaining *why* the correct
  classification is what it is — not just right/wrong.
- A visual "Decision guide" panel alongside the quiz, prompting users to
  ask "Is it essential now?" and wait 24 hours before non-essential
  purchases.

**Implementation notes:**
- `useState` tracks the current item index, running score, the selected
  answer, and whether the game has finished.
- Both the Need and Want buttons compare `selected` against
  `current.answer` to decide whether to render as correct (green) or
  incorrect (red); the correct option is always highlighted once an
  answer is given, regardless of what the user picked.
- A "Next item" button appears only after answering, switching to "See
  score" on the final item, which leads into a results screen with a
  performance-tiered message (`getResultMessage`) and a "Play again"
  button that resets all state back to the first item.

---

## 3. Money Mistakes

**Route:** `/mistakes`
**Folder:** `pages/MoneyMistakes`
**Data:** `mistakes.json`
**Nav path:** Learn → Money Mistakes

An expandable list of five common student money mistakes.

**What it includes:**
- Five mistakes: impulse buying, ignoring small expenses, late payments,
  unused subscriptions, and spending without a plan.
- Each one expands to reveal a real-world **scenario** and a practical
  **fix**, loaded from `mistakes.json`.
- Expand/collapse cards, with only one open at a time.

**Implementation notes:**
- A single `openId` value in state tracks which card is expanded; the
  first item is open by default. Clicking a header toggles it closed if
  already open, or opens it (implicitly closing any other) if not, since
  only one id can be stored in `openId` at a time.
- Each header is a real `<button>` with `aria-expanded` set, for
  accessibility and keyboard navigation, with a `+`/`−` icon reflecting
  open state.

---

## Design notes
All three pages use the project's shared design tokens (`--primary`,
`--success`, `--danger`, `--needs`, `--wants`, spacing scale) — either via
CSS Modules scoped per component, or (in the case of `KnowledgeCheck`)
inline styles referencing the same CSS custom properties — keeping
everything visually consistent with the rest of the site.