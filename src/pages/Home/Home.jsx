import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import tips from '../../data/tips.json'
import styles from './Home.module.css'

const featuredLinks = [
  { icon: '◫', title: 'Budgeting Basics', text: 'Build a budget that works with student life.', to: '/basics', label: 'Start learning', tone: 'learn' },
  { icon: '◎', title: '50-30-20 Rule', text: 'Try a simple plan for needs, wants, and savings.', to: '/calculator', label: 'Plan a budget', tone: 'plan' },
  { icon: '✳', title: 'Savings Goals', text: 'Turn something you want into a clear savings plan.', to: '/goals', label: 'Set a goal', tone: 'save' },
]
let visitCountUpdated = false

function getLocalValue(key) {
  try { return window.localStorage.getItem(key) || '' } catch { return '' }
}

function incrementVisitCount() {
  try {
    if (visitCountUpdated) return Number(window.localStorage.getItem('budgetbasics-visits') || 1)
    const count = Number(window.localStorage.getItem('budgetbasics-visits') || 0) + 1
    window.localStorage.setItem('budgetbasics-visits', String(count))
    visitCountUpdated = true
    return count
  } catch { return 1 }
}

function Home() {
  const [name, setName] = useState(getLocalValue('budgetbasics-name'))
  const [nameInput, setNameInput] = useState('')
  const [now, setNow] = useState(() => new Date())
  const [visits] = useState(incrementVisitCount)
  const [tipIndex, setTipIndex] = useState(() => new Date().getDate() % tips.length)

  useEffect(() => {
    const clockTimer = window.setInterval(() => setNow(new Date()), 1000)
    const tipTimer = window.setInterval(() => setTipIndex((index) => (index + 1) % tips.length), 7000)
    return () => { window.clearInterval(clockTimer); window.clearInterval(tipTimer) }
  }, [])

  function saveName(event) {
    event.preventDefault()
    const nextName = nameInput.trim()
    if (!nextName) return
    setName(nextName)
    setNameInput('')
    try { window.localStorage.setItem('budgetbasics-name', nextName) } catch { /* The greeting still works for this visit. */ }
  }

  function clearName() {
    setName('')
    try { window.localStorage.removeItem('budgetbasics-name') } catch { /* Storage may be unavailable. */ }
  }

  return <div className={styles.home}>
    <section className={styles.hero} aria-labelledby="home-heading">
      <div className={styles.heroContent}><p className={styles.eyebrow}>Money skills for real life</p><h1 id="home-heading">Small steps today.<br /><span>More confident choices tomorrow.</span></h1><p className={styles.heroLead}>Learn to budget, save for what matters, and make your money work harder while you study.</p><div className={styles.heroActions}><Link className="btn btn--primary" to="/basics">Learn the basics <span aria-hidden="true">→</span></Link><Link className="btn btn--secondary" to="/calculator">Try the budget planner</Link></div><p className={styles.heroNote}>Free student-friendly tools. No account needed.</p></div>
      <div className={styles.heroVisual} role="img" aria-label="A sample budget divided between needs, wants and savings"><div className={styles.orbit} /><div className={styles.budgetCard}><span className={styles.budgetIcon}>₦</span><small>A plan that fits you</small><strong>Your money, your goals</strong><div className={styles.meter}><i /><i /><i /></div><div className={styles.legend}><span>Needs</span><span>Wants</span><span>Save</span></div></div><span className={styles.floatingTop}>✦ One goal at a time</span><span className={styles.floatingBottom}>↗ Progress, not perfection</span></div>
    </section>

    <section className={styles.welcome} aria-label="Your visit"><div className={styles.greeting}><span aria-hidden="true">✦</span><div><strong>{name ? `Hi, ${name}!` : 'Welcome, money learner!'}</strong><small>{name ? 'Ready for your next small money win?' : 'Make yourself at home. This is your space to learn.'}</small></div></div>{name ? <button className={styles.textButton} type="button" onClick={clearName}>Change name</button> : <form className={styles.nameForm} onSubmit={saveName}><label className="sr-only" htmlFor="visitor-name">Your name</label><input id="visitor-name" value={nameInput} maxLength={40} onChange={(event) => setNameInput(event.target.value)} placeholder="What should we call you?" /><button className="btn btn--small btn--primary" disabled={!nameInput.trim()}>Save name</button></form>}</section>

    <section className={styles.learning} aria-labelledby="learning-heading"><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Your next step</p><h2 id="learning-heading">Build money confidence,<br />one idea at a time.</h2></div><p>Clear lessons and practical tools to help you make informed choices at your own pace.</p></div><div className={styles.featureGrid}>{featuredLinks.map((item, index) => <article className={`${styles.featureCard} ${styles[item.tone]}`} key={item.title}><span className={styles.featureIcon} aria-hidden="true">{item.icon}</span><small>0{index + 1} / {['LEARN', 'PLAN', 'GROW'][index]}</small><h3>{item.title}</h3><p>{item.text}</p><Link to={item.to}>{item.label} <span aria-hidden="true">→</span></Link></article>)}</div></section>

    <section className={styles.tipBand} aria-labelledby="tip-heading"><div className={styles.tipContent}><p className={styles.eyebrow}>A little reminder</p><h2 id="tip-heading">Today’s money tip</h2><p className={styles.tipText} aria-live="polite">{tips[tipIndex]}</p><div className={styles.tipFooter}><div className={styles.tipDots} role="group" aria-label="Choose a money tip">{tips.map((tip, index) => <button key={tip} type="button" aria-label={`Show tip ${index + 1}`} aria-pressed={tipIndex === index} className={tipIndex === index ? styles.activeDot : ''} onClick={() => setTipIndex(index)} />)}</div><Link to="/mistakes">Explore money habits <span aria-hidden="true">→</span></Link></div></div></section>

    <section className={styles.facts} aria-label="BudgetBasics quick facts"><div><strong>50<span>/</span>30<span>/</span>20</strong><small>A simple way to think about a budget</small></div><div><strong>7</strong><small>Spending categories in the expense planner</small></div><div><strong>₦</strong><small>Made for everyday student money decisions</small></div></section>

    <section className={styles.visitInfo} aria-label="Local visit information"><article className="card"><small>Your visits on this browser</small><strong>{visits}</strong><span>Stored on this device only</span></article><article className="card"><small>Your local date and time</small><strong>{new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'medium' }).format(now)}</strong><span>Live local time · {Intl.DateTimeFormat().resolvedOptions().timeZone}</span></article></section>

    <section className={styles.closing}><div><p className={styles.eyebrow}>Start where you are</p><h2>Your money journey is yours to shape.</h2><p>Choose one small idea and put it into practice today.</p></div><Link className="btn btn--primary" to="/sitemap">Explore all pages <span aria-hidden="true">→</span></Link></section>
  </div>
}

export default Home
