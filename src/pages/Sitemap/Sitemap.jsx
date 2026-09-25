import { Link } from 'react-router-dom'
import styles from './Sitemap.module.css'

const pageGroups = [
  { title: 'Learn', intro: 'Build practical money knowledge.', icon: '◫', pages: [['Budgeting Basics', '/basics', 'Start with income, spending and savings.'], ['Needs vs Wants', '/needs-wants', 'Make thoughtful choices about spending.'], ['Money Mistakes', '/mistakes', 'Spot common habits and learn helpful fixes.'], ['Infographics', '/gallery', 'Explore visual guides to money topics.']] },
  { title: 'Plan', intro: 'Put what you learn into practice.', icon: '◎', pages: [['50-30-20 Rule', '/calculator', 'Create a simple spending estimate.'], ['Savings Goals', '/goals', 'Make a goal and plan your next steps.'], ['Expense Planner', '/planner', 'Organize spending in one place.']] },
  { title: 'More', intro: 'Get to know BudgetBasics.', icon: '✳', pages: [['Home', '/', 'Return to your starting point.'], ['AI Chatbot', '/assistant', 'Explore common budgeting questions.'], ['About Us', '/about', 'Learn why BudgetBasics was created.'], ['Feedback', '/feedback', 'Tell us what you think.'], ['Contact Us', '/contact', 'Find our contact details.']] },
]

function Sitemap() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="sitemap-heading"><div className={styles.heroCopy}><p className={styles.eyebrow}>Everything in one place</p><h1 id="sitemap-heading">Find your next<br /><span>money move.</span></h1><p>Explore lessons, planning tools, and helpful information across BudgetBasics.</p></div><div className={styles.mapArt} aria-hidden="true"><div className={styles.mapRing}><span>13</span><small>ways to<br />get started</small></div><i /><i /><i /></div></section>
      <nav className={styles.groupGrid} aria-label="All BudgetBasics pages">{pageGroups.map((group, groupIndex) => <section className={styles.group} key={group.title} aria-labelledby={`sitemap-${group.title.toLowerCase()}`}><div className={styles.groupHeading}><span className={`${styles.groupIcon} ${styles[`groupTone${groupIndex}`]}`} aria-hidden="true">{group.icon}</span><div><p className={styles.groupCount}>{String(group.pages.length).padStart(2, '0')} PAGES</p><h2 id={`sitemap-${group.title.toLowerCase()}`}>{group.title}</h2><p>{group.intro}</p></div></div><ul>{group.pages.map(([label, path, description], index) => <li key={path}><Link to={path}><span className={styles.linkIndex}>{String(index + 1).padStart(2, '0')}</span><span className={styles.linkBody}><strong>{label}</strong><small>{description}</small></span><span className={styles.linkArrow} aria-hidden="true">↗</span></Link></li>)}</ul></section>)}</nav>
      <section className={styles.helpCard}><span className={styles.helpIcon} aria-hidden="true">✦</span><div><p className={styles.eyebrow}>Not sure where to begin?</p><h2>Start with the basics, then make a plan.</h2><p>Learn how budgets work before trying the planning tools.</p></div><Link className="btn btn--primary" to="/basics">Start learning <span aria-hidden="true">→</span></Link></section>
    </div>
  )
}

export default Sitemap
