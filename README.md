# BudgetBasics

BudgetBasics is a student-focused budgeting education single-page app built with React, Vite, and React Router. It runs entirely in the browser: there is no backend, database, or real sign-in. Content belongs in local JSON files under `src/data/`.

## Run the app

Open a terminal in the app folder (the folder containing `package.json`):

```bash
cd BudgetBasics
npm install
npm run dev
```

If your terminal is already inside `BudgetBasics`, run `npm run dev` there. The parent `TechWiz` folder is only the workspace container and does not contain the app's `package.json`.

## Project conventions

- Routes and shared site shell: `src/App.jsx`
- Reusable UI: `src/components/common/`
- One folder per route: `src/pages/<PageName>/`
- Local content: `src/data/*.json`
- Global tokens, reset, accessibility helpers, and shared controls: `src/styles/style.css`
- Import the colocated `<PageName>.module.css` in each page. Use CSS Modules for page-specific styles.
- Component styles belong in a colocated component `.module.css` beside the JSX file.
- Use shared tokens (`--bg`, `--surface`, `--surface-soft`, `--ink`, `--ink-soft`, `--primary`, `--needs`, `--wants`, `--savings`, `--success`, `--danger`, and `--space-1` through `--space-8`).
- Reuse `.btn`, `.card`, `.input`, `.alert`, `.table`, `.badge`, and `.progress` where useful. Do not hardcode page colors.
- Keep any visitor name or visit count in browser `localStorage` only. Never send it to a service.
- Chatbot content must say it is not professional financial advice. Calculator outputs are estimates for learning only.

## Page component starting point

```jsx
import styles from './ExamplePage.module.css'

function ExamplePage() {
  return (
    <section className={styles.page} aria-labelledby="example-heading">
      <div className={styles.content}>
        <p className={styles.eyebrow}>Section name</p>
        <h1 id="example-heading">Page title</h1>
        <article className={styles.card}>Page content</article>
      </div>
    </section>
  )
}

export default ExamplePage
```

## Build and check style rules

```bash
npm run lint
npm run build
```
