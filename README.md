# BudgetBasics

BudgetBasics is a student-focused budgeting education website built with React, Vite, and React Router. The app runs in the browser and has no backend, database, login, or real financial transactions.

## Start the app

Open a terminal in the BudgetBasics directory, where `package.json` is located. Install dependencies with `npm install`, then start the development server with `npm run dev`. Vite prints the local address. The parent TechWiz folder is a workspace container and does not have the app package file.

To check the app before submission, run the ESLint check with `npm run lint` and make a production build with `npm run build` from the BudgetBasics directory.

## Project map

- `src/App.jsx` defines all page routes and the shared site shell.
- `src/components/common/` contains the reusable Navbar, Footer, ThemeToggle, BackToTop, and ProgressBar components.
- `src/pages/` contains one folder per route and shared page-level pieces.
- `src/data/` contains local JSON learning and sample content.
- `src/assets/images/` contains the project’s locally authored SVG learning illustrations.
- `src/styles/style.css` defines global resets, theme tokens, accessibility helpers, and shared controls.
- Page and component styling belongs in colocated CSS Modules.

## Collaboration conventions

Use the shared CSS variables for color, spacing, radius, and shadows. Keep page-specific styling in the page’s CSS Module. Keep educational text and quiz/gallery/chatbot entries in local JSON when the feature is data-driven. Do not add a backend, real login, server storage, financial transactions, or network submission of form data. Calculator results are learning estimates, and chatbot content must retain its financial education disclaimer.

The intended workflow is contributor feature branch, pull request into `develop`, then a reviewed pull request from `develop` into `main`.
