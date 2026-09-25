# BudgetBasics

TechWiz 7 · Web Innovation Unleashed · React + Vite

An educational budgeting website for students, built as a Single Page Application (one page load, many routed pages).

**Hard rules from the SRS (marks are lost if broken):**
- No backend, no database, no server-side storage, no real login.
- Content comes from local JSON files in `src/data/`.
- A visitor's name may be kept in `localStorage` (browser only) so the site can say "Hi, Tochi". Nothing is sent anywhere.
- Do not paste ready-made templates. Understand every line you submit; judges will ask.
- Chatbot must show a "not professional financial advice" disclaimer. Calculators must say results are learning estimates.

---

## Live reference demo

**https://claude.ai/artifact/3dYvSTjeXzni2W1tM46LBM**

Open it next to your editor. It shows how each page should look and behave. Build **your own React version**, don't copy its code (it is plain JS, and yours must be React). Its colours are just a starting idea — the actual app now uses the teal/green palette below, so match your build to `style.css`, not the demo's indigo.

---

## Team, branches and pages

Branches: `main` (final), `develop` (integration), and one per person.

| Person | Branch | Pages / pieces |
|---|---|---|
| **John** (lead) | `feature/john` | Home, Sitemap, Navbar, Footer, theme toggle, Back-to-top, routing (`App.jsx`) — **built** |
| **Tochi** | `feature/tochi` | Budgeting Basics, Needs vs Wants, Money Mistakes, `Accordion` |
| **Favor** | `feature/favor` | 50-30-20 Rule, Savings Goals, Expense Planner, `ProgressBar` |
| **Daniel** | `feature/daniel` | AI Chatbot, Infographics, About, Feedback, Contact |

Flow: your branch → Pull Request into `develop` → John merges to `main` when stable. Never push to `main`.

---

## Page guide: what to build and where to look

Each row: the route, the folder (already created, empty except for John's pages), where to see the idea in the demo, and the SRS must-haves.

### Tochi

| Page | Route · Folder | In the demo | Must have |
|---|---|---|---|
| Budgeting Basics | `/basics` · `pages/BudgetingBasics` | **Learn → Budgeting Basics** | Cards for income, fixed, variable, requirements, wants, savings; sample student monthly budget with labelled sample values; one knowledge-check question. Data: `budgetBasics.json` |
| Needs vs Wants | `/needs-wants` · `pages/NeedsVsWants` | **Learn → Needs vs Wants** | Classify sample items, feedback that explains the answer, visual decision guide for delaying purchases. Data: `needsWants.json` |
| Money Mistakes | `/mistakes` · `pages/MoneyMistakes` | **Learn → Money Mistakes** | Impulse buying, ignoring small expenses, late payments, unused subscriptions, no plan; each with scenario + fix; expand/collapse cards. Data: `mistakes.json` |

### Favor

| Page | Route · Folder | In the demo | Must have |
|---|---|---|---|
| 50-30-20 Rule | `/calculator` · `pages/Budget503020` | **Plan → 50-30-20 Rule** | Income input, three amounts, validation for blank/invalid, bars or chart, note "estimate for learning only" |
| Savings Goals | `/goals` · `pages/SavingsGoals` | **Plan → Savings Goals** | Goal name, target, saved so far, monthly contribution; remaining amount, months needed, progress bar, tip; reject empty/negative/non-numeric |
| Expense Planner | `/planner` · `pages/ExpensePlanner` | **Plan → Expense Planner** | Add entry (date, category, description, amount), on-screen table, total and remaining balance, **edit and remove**, 7 categories: Food, Transport, Education, Entertainment, Shopping, Utilities, Miscellaneous |

### Daniel

| Page | Route · Folder | In the demo | Must have |
|---|---|---|---|
| AI Chatbot | `/assistant` · `pages/Chatbot` | Menu → **AI Chatbot** | Question box + **Ask** button, answers from `chatbot.json` (keyword matching), suggested prompts ("What is a need?", "How much should I save?", "How do I avoid overspending?"), safe fallback message, disclaimer |
| Infographics | `/gallery` · `pages/Infographics` | **Learn → Infographics** | Gallery with captions and alt text, **search**, **filter by topic**, **sort**, "no results" message. Data: `infographics.json` |
| About | `/about` · `pages/About` | Footer → **About Us** | Purpose of the site and the creators |
| Feedback | `/feedback` · `pages/Feedback` | Menu → **Feedback** | Name, email, rating, comments; client-side validation only; confirmation message; nothing stored or sent |
| Contact | `/contact` · `pages/Contact` | Menu → **Contact Us** | Email, phone, social links; validated form; confirmation message |

All page folders and their `.jsx` / `.module.css` files already exist (empty) so routing and imports already work. Build inside your own files only.

---

## Styling: use `style.css`, never your own colours

`src/styles/style.css` is the **only** stylesheet to import — it holds every colour, font, spacing value and shared class. `main.jsx` must import just this one file:

```jsx
import "./styles/style.css";
```

> ⚠️ Do not also import `styles/index.css` — an older draft accidentally got left in the repo with a different (indigo) colour set. Delete `src/styles/index.css` and remove its import line from `main.jsx`, or every shared class will render inconsistently depending on which file loaded last.

### Variables — use these, never a hex code

| Need | Variable |
|---|---|
| Page background / card background | `--bg` / `--surface` / `--surface-soft` |
| Text / muted text | `--ink` / `--ink-soft` |
| Buttons, links | `--primary` (hover: `--primary-strong`; text on it: `--on-primary`) |
| Needs / Wants / Savings colours | `--needs` / `--wants` / `--savings` |
| Success / error | `--success` / `--danger` |
| Borders | `--border` |
| Shadows | `--shadow-sm` / `--shadow-md` |
| Corner radius | `--radius-sm` / `--radius-md` / `--radius-lg` / `--radius-pill` |
| Spacing | `--space-1` … `--space-8` |

Because these switch automatically with `data-theme="dark"` on `<html>`, your page supports dark mode for free — just use the variables. Test both modes before you say a page is done.

### Shared classes — reuse these, don't reinvent them

| Class | For |
|---|---|
| `.btn`, `.btn--primary`, `.btn--secondary`, `.btn--small`, `.btn--light` | Buttons |
| `.card` | Any card/panel |
| `.input` | Text inputs, selects, textareas |
| `.alert`, `.alert--success`, `.alert--error` | Feedback messages |
| `.table`, `.table-wrap` | Tables (wrap in `.table-wrap` for horizontal scroll on mobile) |
| `.badge` | Small pill labels (e.g. category tags) |
| `.progress` / `.progress__fill` | Progress bars — set `.progress__fill`'s `width` inline |
| `.page`, `.page__content`, `.page__eyebrow` | Page-level wrapper, see starting point below |

### Page starting point

Every page follows this shape, then adds its own content inside `.page__content`:

```jsx
import styles from './ExamplePage.module.css'

function ExamplePage() {
  return (
    <section className="page" aria-labelledby="example-heading">
      <div className="page__content">
        <p className="page__eyebrow">Section name</p>
        <h1 id="example-heading">Page title</h1>
        <article className="card">Page content</article>
      </div>
    </section>
  )
}

export default ExamplePage
```

Put anything specific to your page in `PageName.module.css` (CSS Modules), so class names never clash with anyone else's page.

---

## Folder structure

```
src/
├── components/common/    Navbar, Footer, ThemeToggle, BackToTop — built.
│                         Accordion, ProgressBar — empty, build when needed (Tochi/Favor)
├── pages/                one folder per route (13), already created
├── data/                 budgetBasics.json, needsWants.json, mistakes.json,
│                         tips.json, infographics.json, chatbot.json — currently empty, fill with your content
├── styles/style.css      the only stylesheet to import
└── assets/images/        your own or AI-generated images; no copyrighted stock
```

---

## Get started

```bash
git clone https://github.com/Mr-joriel/TechWiz-Project.git
cd TechWiz-Project
git checkout develop
git checkout -b feature/your-name
npm install
npm run dev
```

Preview only your own page by temporarily swapping it into `App.jsx`'s `Routes` — safe to commit on your branch; John owns the final routing.

## Push

```bash
git add .
git commit -m "feat: chatbot keyword matching"
git push origin feature/your-name
```

Pull `develop` before every session. Commit small and often. Never push to `main`.

---

## Before you say "done"

- Works on phone, tablet and desktop widths
- Works with keyboard only (Tab to reach everything, visible focus)
- Light **and** dark mode both readable
- Blank, negative and non-numeric inputs handled without crashing
- Every image has alt text
- Run Google Lighthouse (Chrome DevTools) on your page and fix accessibility warnings

## Final deliverables (SRS)

- Project report: problem definition, design specs, flowcharts / DFDs, test data, **install instructions**. No source code inside.
- `ReadMe.doc` with assumptions, plus JSON/TXT test data
- Zip of the project. Live URL optional.
- **Demo video (.mp4)** of every feature. Mandatory.
- Name the AI tools you used (Claude, ChatGPT, etc.) in the documentation.