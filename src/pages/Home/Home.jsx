import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const featuredLinks = [
  { icon: '◫', title: 'Budgeting Basics', text: 'Build a budget that works with student life.', to: '/basics', label: 'Start learning', tone: 'learn' },
  { icon: '◎', title: '50-30-20 Rule', text: 'Try a simple plan for needs, wants, and savings.', to: '/calculator', label: 'Plan a budget', tone: 'plan' },
  { icon: '✳', title: 'Savings Goals', text: 'Turn something you want into a clear savings plan.', to: '/goals', label: 'Set a goal', tone: 'save' },
]
const tips = [
  'Write down every expense for one week. Small spending is easier to manage when you can see it.',
  'Before buying something optional, pause and ask: will I still want this next week?',
  'Try saving a small amount as soon as money comes in, even if you start with just a little.',
  'Give your money a simple plan before the month begins, then adjust when real life happens.',
  'Compare prices and transport costs before deciding that a purchase is a bargain.',
]

function getStoredValue(key, fallback = '') {
  try { return window.localStorage.getItem(key) || fallback } catch { return fallback }
}
function recordVisit() {
  try {
    const count = Number(getStoredValue('budgetbasics-visits', '0')) + 1
    window.localStorage.setItem('budgetbasics-visits', String(count))
    return count
  } catch { return 1 }
}

function Home() {
  const [name, setName] = useState(getStoredValue('budgetbasics-name'))
  const [nameInput, setNameInput] = useState('')
  const [now, setNow] = useState(() => new Date())
  const [visits] = useState(recordVisit)
  const [tipIndex, setTipIndex] = useState(() => new Date().getDate() % tips.length)

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    const ticker = window.setInterval(() => setTipIndex((index) => (index + 1) % tips.length), 7000)
    return () => { window.clearInterval(timer); window.clearInterval(ticker) }
  }, [])

  function saveName(event) {
    event.preventDefault()
    const cleanName = nameInput.trim()
    if (!cleanName) return
    setName(cleanName)
    setNameInput('')
    try { window.localStorage.setItem('budgetbasics-name', cleanName) } catch { /* The greeting is still kept for this visit. */ }
  }

  function clearName() {
    setName('')
    try { window.localStorage.removeItem('budgetbasics-name') } catch { /* Storage may be unavailable. */ }
  }

  return (
    <div className={styles.home}>
      <section className={styles.hero} aria-labelledby="home-heading">
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}><span /> Money skills for real life</p>
          <h1 id="home-heading">Small steps today.<br /><span>More confident choices tomorrow.</span></h1>
          <p className={styles.heroLead}>Learn to budget, save for what matters, and make your money work harder while you study.</p>
          <div className={styles.heroActions}><Link className="btn btn--primary" to="/basics">Learn the basics <span aria-hidden="true">→</span></Link><Link className="btn btn--secondary" to="/calculator">Try the budget planner</Link></div>
          <p className={styles.heroNote}><span aria-hidden="true">✓</span> Free student-friendly tools. No account needed.</p>
        </div>
        <div className={styles.heroVisual} role="img" aria-label="A sample budget split between needs, wants and savings">
          <div className={`${styles.orbit} ${styles.orbitOne}`} /><div className={`${styles.orbit} ${styles.orbitTwo}`} />
          <div className={styles.budgetCard}><span className={styles.budgetIcon}>₦</span><span className={styles.budgetCaption}>A plan that fits you</span><strong>Your money, your goals</strong><div className={styles.budgetMeter}><i /><i /><i /></div><div className={styles.budgetLegend}><span>Needs</span><span>Wants</span><span>Save</span></div></div>
          <div className={`${styles.floatingNote} ${styles.noteTop}`}><span>✦</span> One goal at a time</div><div className={`${styles.floatingNote} ${styles.noteBottom}`}><span>↗</span> Progress, not perfection</div>
          <span className={`${styles.sparkle} ${styles.sparkleOne}`}>✳</span><span className={`${styles.sparkle} ${styles.sparkleTwo}`}>✦</span>
        </div>
      </section>

      <section className={styles.welcome} aria-label="Your visit"><div className={styles.welcomeHello}><span className={styles.welcomeIcon}>✦</span><div><strong>{name ? `Hi, ${name}!` : 'Welcome, money learner!'}</strong><span>{name ? 'Ready for your next small money win?' : 'Make yourself at home. This is your space to learn.'}</span></div></div>
        {!name ? <form className={styles.nameForm} onSubmit={saveName}><label className="sr-only" htmlFor="visitor-name">Your name</label><input id="visitor-name" value={nameInput} onChange={(event) => setNameInput(event.target.value)} placeholder="What should we call you?" maxLength={40} /><button className="btn btn--small btn--primary" type="submit" disabled={!nameInput.trim()}>Save name</button></form> : <button className={styles.textButton} type="button" onClick={clearName}>Change name</button>}
      </section>

      <section className={styles.learning} aria-labelledby="start-heading"><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Your next step</p><h2 id="start-heading">Build money confidence,<br />one idea at a time.</h2></div><p>Clear lessons and practical tools to help you make informed choices, at your own pace.</p></div>
        <div className={styles.featureGrid}>{featuredLinks.map((item) => <article className={`${styles.featureCard} ${styles[item.tone]}`} key={item.title}><span className={styles.featureIcon} aria-hidden="true">{item.icon}</span><span className={styles.cardStep}>{item.tone === 'learn' ? '01 / LEARN' : item.tone === 'plan' ? '02 / PLAN' : '03 / GROW'}</span><h3>{item.title}</h3><p>{item.text}</p><Link to={item.to}>{item.label}<span aria-hidden="true">→</span></Link></article>)}</div>
      </section>

      <section className={styles.tipSection} aria-labelledby="tip-heading"><div className={styles.tipDecor} aria-hidden="true">✳</div><div className={styles.tipInner}><div className={styles.tipHeading}><span className={styles.tipIcon}>✦</span><div><p className={styles.eyebrow}>A little reminder</p><h2 id="tip-heading">Today’s money tip</h2></div></div><p className={styles.tipText} aria-live="polite">{tips[tipIndex]}</p><div className={styles.tipControls}><div className={styles.tipDots} aria-label={`Tip ${tipIndex + 1} of ${tips.length}`}>{tips.map((tip, index) => <button key={tip} type="button" className={index === tipIndex ? styles.activeDot : ''} aria-label={`Show tip ${index + 1}`} aria-pressed={index === tipIndex} onClick={() => setTipIndex(index)} />)}</div><Link to="/mistakes">Explore money habits <span aria-hidden="true">→</span></Link></div></div></section>

      <section className={styles.facts} aria-labelledby="facts-heading"><div className={styles.factsIntro}><p className={styles.eyebrow}>BudgetBasics at a glance</p><h2 id="facts-heading">Useful tools.<br />Clear next steps.</h2></div><div className={styles.fact}><span className={styles.factNumber}>50<span>/</span>30<span>/</span>20</span><span>One simple way to think about a budget</span></div><div className={styles.fact}><span className={styles.factNumber}>7</span><span>Spending categories in the expense planner</span></div><div className={styles.fact}><span className={styles.factNumber}>₦</span><span>Made for everyday student money decisions</span></div></section>

      <section className={styles.visitDetails} aria-label="Local visit information"><div className={styles.visitCard}><span className={styles.visitIcon}>↗</span><div><span className={styles.visitLabel}>Your visits on this browser</span><strong>{visits}</strong><span className={styles.visitFine}>Stored on this device only</span></div></div><div className={styles.visitCard}><span className={styles.visitIcon}>◷</span><div><span className={styles.visitLabel}>Your local date and time</span><strong>{new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'medium' }).format(now)}</strong><span className={styles.visitFine}>Live local time · {Intl.DateTimeFormat().resolvedOptions().timeZone}</span></div></div></section>

      <section className={styles.closing}><div><p className={styles.eyebrow}>Start where you are</p><h2>Your money journey is yours to shape.</h2><p>Choose one small idea and put it into practice today.</p></div><Link className="btn btn--primary" to="/sitemap">Explore all pages <span aria-hidden="true">→</span></Link></section>
    </div>
  )
}

export default Home

