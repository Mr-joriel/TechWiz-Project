# John - Project Lead Contribution Report

## Overview

I established the shared BudgetBasics app structure and built the project-wide experience that the other page contributors use. I connected the single-page app routes, implemented the Home and Sitemap pages, and created the reusable navigation, theme, footer, and back-to-top elements.

## App structure and routing

I organized the React and Vite app around one route per page, shared components under the common component directory, local JSON content under the data directory, and a global stylesheet for design tokens. Each page and shared component has a colocated CSS Module. The app has routes for Home, Sitemap, Budgeting Basics, Needs vs Wants, Money Mistakes, the 50-30-20 calculator, Savings Goals, Expense Planner, Chatbot, Infographics, About, Feedback, and Contact. Unknown routes return to Home.

## Home page

I designed the Home page as the starting point for student learners. It includes the BudgetBasics identity and tagline, a welcome banner, a name card, featured learning and planning links, quick facts, and calls to action. A tip ticker reads its content from the local tips JSON file. The browser-only visitor counter and live local date and time provide the requested visit details. A name and visit count remain in local browser storage; no server receives them.

## Navigation and shared controls

I created Learn and Plan dropdowns, active route states, a responsive mobile navigation menu, and links to the remaining pages. I added a theme switch that applies the dark theme to the document and remembers the choice locally. The footer provides navigation, a visible Sitemap link, and an educational disclaimer. The back-to-top control appears after scrolling, and a skip link supports keyboard users.

## Sitemap

I grouped all thirteen app routes into Learn, Plan, and More sections and provided a clear link and description for every page, including the Sitemap itself.

## Shared design system and collaborator support

I established a responsive visual system with light and dark color tokens, spacing, surfaces, typography, shared buttons, cards, fields, alerts, tables, badges, and progress indicators. I used CSS Modules for page and component styles, kept common layout guidance in the README, and added starter page structures for the other contributors. This lets the team build individual modules without duplicating the global site shell.

## Privacy, constraints, and checks

I kept the app client-side with no login, backend, database, or financial transactions. The app uses local JSON for educational content and temporary browser state for interactive demonstrations. During review I ran the ESLint check and Vite production build; both completed successfully. A visual browser and Lighthouse review remains to be completed on the target devices before final submission.

## AI tools acknowledged

The project records identify Claude as a design reference tool and OpenAI Codex as a coding, debugging, and documentation assistant. I reviewed and adapted the resulting work for this project. Other team members should add any additional AI tools they used before the final submission.
