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

Open it next to your editor. It shows how each page should look and behave. Build **your own React version**, don't copy its code (it is plain JS, and yours must be React).

The demo's top menu has two dropdowns. Menu path for each page is in the table below. Dark mode: the moon button in the demo's menu.

---

## Team, branches and pages

Branches: `main` (final), `develop` (integration), and one per person.

| Person | Branch | Pages / pieces |
|---|---|---|
| **John** (lead) | `feature/john` | Home, Sitemap, Navbar, Footer, theme toggle, Back-to-top, routing (`App.jsx`) |
| **Tochi** | `feature/tochi` | Budgeting Basics, Needs vs Wants, Money Mistakes, `Accordion` |
| **Favor** | `feature/favor` | 50-30-20 Rule, Savings Goals, Expense Planner, `ProgressBar` |
| **Daniel** | `feature/daniel` | AI Chatbot, Infographics, About, Feedback, Contact |

Flow: your branch → Pull Request into `develop` → John merges to `main` when stable. Never push to `main`.

---

## Page guide: what to build and where to look

Each row: the route, the folder you create, where to find it in the demo, and the SRS must-haves.

### John

| Page / piece | Route · Folder | In the demo | Must have |
|---|---|---|---|
| Home | `/` · `pages/Home` | Click **BudgetBasics** logo | Logo, tagline, welcome banner, featured tip, quick facts, calls to action, **visitor counter**, **live date/time**, tips ticker, name card (localStorage) |
| Navbar | `components/common/Navbar` | Top bar on every page | Links to all 10 required pages, active/hover/focus states, mobile menu |
| Footer | `components/common/Footer` | Bottom of every page | Footer navigation, visible **Sitemap** link, disclaimer |
| Theme toggle | `components/common/ThemeToggle` | Moon/sun button, top right | Sets `data-theme="dark"` on `<html>`, remembers choice in localStorage |
| Back-to-top | `components/common/BackToTop` | Appears after scrolling | Keyboard accessible |
| Sitemap | `/sitemap` · `pages/Sitemap` | Footer → **Sitemap** | Links to every page, grouped |

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

---

## Styling: use `style.css`, never your own colours

`src/styles/style.css` holds the light and dark colours, fonts, spacing and shared classes (`.btn`, `.card`, `.input`, `.progress`, `.alert`, `.table`, `.badge`). John imports it once in `main.jsx`:

```jsx
import "./styles/style.css";
```

Use variables, never hex codes:

```css
.myBox { background: var(--surface); color: var(--ink); border: 1px solid var(--border); border-radius: var(--radius-md); }
```

| Need | Use |
|---|---|
| Page / card background | `--bg` / `--surface` |
| Text / muted text | `--ink` / `--ink-soft` |
| Buttons, links | `--primary` (text on it: `--on-primary`) |
| Needs / Wants / Savings | `--needs` / `--wants` / `--savings` |
| Success / error | `--success` / `--danger` |
| Spacing | `--space-1` … `--space-8` |

Because variables switch with the theme, **your page supports dark mode automatically**. Test both.

Put page styles in `PageName.module.css` (CSS Modules) so class names never clash.

---

## Folder structure

```
src/
├── components/common/    Navbar, Footer, ThemeToggle, BackToTop, Accordion, ProgressBar
├── pages/                one folder per route (13)
├── data/                 budgetBasics.json, needsWants.json, mistakes.json,
│                         tips.json, infographics.json, chatbot.json
├── styles/style.css
└── assets/               images (own or AI-generated; no copyrighted stock)
```

Shared components live in `components/common/`. Use them, don't rebuild them.

---

## Get started

```bash
git clone https://github.com/<username>/BudgetBasics.git
cd BudgetBasics
git checkout develop
git checkout -b feature/your-name
npm install
npm run dev
```

Preview only your page by swapping it into `App.jsx` (safe to commit on your branch; John owns the final routes):

```jsx
import Chatbot from "./pages/Chatbot/Chatbot";
function App() { return <Chatbot />; }
export default App;
```

## Push

```bash
git add .
git commit -m "feat: chatbot keyword matching"
git push origin feature/your-name
```

Pull `develop` before every session. Commit small and often.

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