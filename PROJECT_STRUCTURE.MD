# BudgetBasics project structure

## Project summary

BudgetBasics is an educational React single-page app for student budgeting. It uses Vite, React Router, local JSON content, and CSS Modules. It has no backend, database, real login, financial transactions, or server-side storage. A visitor's name and visit count may be held in browser local storage only.

## Routes and ownership

| Owner | Route | Page | Main requirements |
|---|---|---|---|
| John | `/` | Home | Brand and tagline, welcome, tips, quick facts, calls to action, visitor counter, live date/time, local name greeting |
| John | `/sitemap` | Sitemap | Group and link all pages |
| Tochi | `/basics` | Budgeting Basics | Six budget concepts, sample monthly budget, interactive question, expandable explanations |
| Tochi | `/needs-wants` | Needs vs Wants | Item classification, explanatory feedback, decision guide |
| Tochi | `/mistakes` | Money Mistakes | Five scenarios with fixes and expandable cards |
| Favor | `/calculator` | 50-30-20 Rule | Validated income input, labelled estimates, visual result, learning note |
| Favor | `/goals` | Savings Goals | Goal inputs, remaining amount, estimated months, progress, tip, validation |
| Favor | `/planner` | Expense Planner | Sample budget, dated categories, temporary table, totals, remaining balance, edit/remove |
| Daniel | `/assistant` | Chatbot | Question input, local JSON keyword answers, prompts, fallback, disclaimer |
| Daniel | `/gallery` | Infographics | Local visuals, captions, alt text, search, topic filters, sorting, empty state |
| Daniel | `/about` | About | Site purpose and project creators |
| Daniel | `/feedback` | Feedback | Name, email, rating, comments, client-side validation, confirmation |
| Daniel | `/contact` | Contact | Contact information and validated client-side form |

## Folder conventions

- Shared site components live in `src/components/common/`.
- Each routed page lives in its own folder under `src/pages/`.
- Data-driven content lives in `src/data/` as JSON.
- Locally created or approved images live in `src/assets/images/`.
- `src/styles/style.css` is the single global stylesheet. Page and component styling belongs in a colocated `.module.css` file.
- Reuse the global theme variables and shared control classes. Do not hardcode page colors.

## SRS rules

Keep the website client-side. Do not add a backend, database, login storage, payment flow, or server transmission of form content. Calculator results are learning estimates. Chatbot information is educational and not professional financial advice. Meaningful images require descriptive alternative text. Controls need labels, keyboard support, and visible focus states. Check layouts on mobile, tablet, and desktop, and complete Lighthouse review before final submission.

## Team workflow

Work on an individual feature branch based on `develop`. Push the feature branch and open a pull request into `develop`; the project lead reviews and approves it. Promote stable work from `develop` to `main` with a separately reviewed pull request. Protect both shared branches against direct pushes.

## Submission checklist

The final submission needs a comprehensive source-free project report, assumptions and installation instructions, JSON or text test data, a project archive, and a demonstration video showing all features. A live URL is optional. Acknowledge all AI tools used and ensure team members understand the submitted work.
