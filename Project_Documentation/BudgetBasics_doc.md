# BudgetBasics - Consolidated Project Report

## Project overview

BudgetBasics is a responsive educational website for students who want to understand income, spending, budgeting, and saving. The project was built by the Aptech TechWiz 7 team as a React single-page application. It provides educational examples and planning demonstrations; it does not provide banking, financial transactions, or professional financial advice.

## Problem definition

Students may begin managing allowances, scholarships, internship income, or part-time earnings without a clear way to plan their money. Small daily expenses can reduce the funds available for housing, transport, learning materials, food, and savings. BudgetBasics responds with student-friendly explanations, examples, visual learning materials, and temporary interactive tools.

## Project objectives

- Explain income, fixed and variable expenses, requirements, wants, and savings.
- Help learners practice a simple budget and understand the 50-30-20 guideline.
- Show how to plan savings goals and record sample expenses.
- Explain common money mistakes and ways to avoid them.
- Provide a visual learning gallery and a rule-based educational question assistant.
- Keep the experience responsive, accessible, and privacy-conscious.

## Scope and constraints

The site runs in the browser and has no backend, database, login, transaction processing, or server-side storage. Educational material is held in local JSON files. Calculator and planner examples are learning demonstrations. Feedback and Contact forms validate locally and show confirmations; they do not store or transmit submitted content. The visitor name, theme preference, and visit counter are kept only in browser local storage. Planner entries and savings goals remain temporary page state.

## Information architecture and design

The site has thirteen routes grouped into three areas. Learn contains Budgeting Basics, Needs vs Wants, Money Mistakes, and Infographics. Plan contains the 50-30-20 calculator, Savings Goals, and Expense Planner. More contains Home, the educational Chatbot, About, Feedback, Contact, and Sitemap.

The shared design uses light and dark theme tokens, a green-led palette, responsive spacing, readable typography, visible focus states, cards, buttons, form controls, alerts, tables, badges, and progress indicators. Route pages and shared components use colocated CSS Modules. Layouts use responsive breakpoints and reflow cards, forms, navigation, and tables for narrow screens.

## Page features and team process

### John - project lead

I set up the route structure and site shell. I created the Home page with its tagline, welcome card, local name greeting, featured links, JSON-powered rotating tips, quick facts, visitor count, and live date and time. I built the Learn and Plan dropdown navigation, mobile menu, active links, theme toggle, footer, visible Sitemap link, back-to-top control, and keyboard skip link. I grouped all routes on the Sitemap and established shared styles and starter page conventions for the team.

### Tochi - learning pages

Tochi built Budgeting Basics, Needs vs Wants, and Money Mistakes. The Basics page explains six budget concepts, provides a sample student month with labelled naira values, expands cards for detailed explanations, and includes a knowledge check. Needs vs Wants offers a ten-item quiz with explanations, score feedback, replay, and a decision guide. Money Mistakes presents five student scenarios with corrective actions in expandable cards.

### Favor - planning tools

Favor built the 50-30-20 calculator, Savings Goals, Expense Planner, and reusable progress indicator. The calculator validates income and labels needs, wants, and savings as learning estimates. Savings Goals estimates remaining funds, time to target, and progress. Expense Planner supports a sample monthly budget, seven categories, temporary expense entries, editing, removal, totals, and remaining balance. These tools validate user inputs and keep demonstration data in the current browser session.

### Daniel - learning support and information pages

Daniel built the Chatbot, Infographics gallery, About, Feedback, and Contact pages. The chatbot matches keywords against local JSON answers, offers suggested questions and a safe fallback, and displays a financial education disclaimer. The gallery uses local illustrations, captions, and alternative text, and supports search, topic filtering, sorting, and a no-results state. About explains the project's purpose and credits its creators. Feedback and Contact forms validate locally and display confirmations without transmitting form data.

## Data and test examples

The project includes JSON content for budgeting concepts, a sample student month, a knowledge check, needs and wants quiz examples, common mistakes, Home tips, chatbot keyword answers, and gallery entries. Sample budget values use Nigerian naira. The calculators and planner should be reviewed with valid positive values, blank entries, non-numeric input, negative input, boundary amounts, and editing/removal cases. Gallery review should include matching and non-matching search terms, every topic filter, both title sort orders, and the no-results state. Form review should include valid details, missing fields, and malformed email addresses.

## Activity flows

### Data flow overview

A visitor opens the app, selects a route, and receives that page's content from local JSON where applicable.

The browser validates visitor input and updates temporary page state or shows a local confirmation; it does not send form data to a server.

The browser stores the theme choice, visitor greeting, and visit count in local storage for later display; no account or remote profile is created.

### Budget and calculator flow

Learner opens a learning or planning route; enters sample values; the page validates the values; the page displays an explanation or estimate; the learner can revise the values or return to another route.

### Expense planner flow

Learner enters a monthly budget; enters a dated expense and category; the page validates the fields; the temporary table updates; totals and remaining balance recalculate; the learner may edit or remove an entry.

### Feedback and contact flow

Learner fills a form; the browser checks required details and email format; a valid form displays a confirmation; form content is neither stored nor transmitted.

## Installation and operation

Open a terminal in the BudgetBasics app directory, the directory containing `package.json`. Install the listed project dependencies with `npm install`, start the development site with `npm run dev`, and open the local URL printed by Vite. Running npm from the parent TechWiz workspace fails because that parent directory has no app `package.json`. The production bundle can be checked with `npm run build`, and code style can be checked with `npm run lint`.

## Verification status

The current source passed `npm run lint` and `npm run build`. Source review confirmed route coverage, local JSON use for the relevant educational content, CSS Module coverage, theme token usage, and responsive layout rules. A browser was not available in the review session, so visual checks at 375 px, 768 px, and desktop widths, interactive console checks, and Google Lighthouse measurements have not yet been completed.

## Known release items

- Run visual checks at mobile, tablet, and desktop sizes in supported browsers and complete Google Lighthouse review for performance, accessibility, and SEO.
- Record the required demonstration video showing every feature and prepare the final project archive and any institution-required Word-format ReadMe/report deliverables.
- Review all project content and be ready to explain design and implementation decisions during evaluation.

## Assumptions

All calculator figures and expense entries are samples for learning, not personal financial records. The 50-30-20 split is an adjustable guideline. The chatbot is a local keyword-based educational helper, not a live generative AI or professional adviser. Theme, visitor name, and visit count are browser-local preferences or demonstration values. The Contact page displays the Gmail address supplied by the team, the phone number published for Aptech Ajao Estate, and links to Aptech corporate Instagram and LinkedIn accounts. The social links go to Aptech corporate accounts rather than claiming to be BudgetBasics profiles.

## AI tools used

The project records identify Claude and OpenAI Codex as tools used during the work. Claude was used as a design reference, and Codex supported implementation, debugging, code review, documentation, SRS review, and the creation of local gallery SVG artwork. The artwork was not taken from a stock image site. Codex also helped inspect the official Aptech social destinations before linking the corporate accounts. Team members must add any other AI tools they used so this acknowledgement covers the complete team effort. AI output was treated as assistance and reviewed and adapted for BudgetBasics.
