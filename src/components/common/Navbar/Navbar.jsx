import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import styles from './Navbar.module.css'

const learnLinks = [['Budgeting Basics', '/basics'], ['Needs vs Wants', '/needs-wants'], ['Money Mistakes', '/mistakes'], ['Infographics', '/gallery']]
const planLinks = [['50-30-20 Rule', '/calculator'], ['Savings Goals', '/goals'], ['Expense Planner', '/planner']]

function Dropdown({ label, links, open, onToggle, onNavigate }) {
  return <div className={`${styles.dropdown}${open ? ` ${styles.dropdownOpen}` : ''}`}><button className={styles.dropdownTrigger} type="button" aria-expanded={open} onClick={onToggle}>{label}<span aria-hidden="true">⌄</span></button><div className={styles.dropdownMenu} aria-label={`${label} pages`}>{links.map(([text, to]) => <NavLink key={to} to={to} onClick={onNavigate}>{text}</NavLink>)}</div></div>
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState('')
  const closeMenu = () => { setMenuOpen(false); setOpenDropdown('') }
  const toggleDropdown = (name) => setOpenDropdown((current) => current === name ? '' : name)

  return <header className={styles.header}><div className={styles.inner}><Link className={styles.brand} to="/" onClick={closeMenu} aria-label="BudgetBasics home"><span className={styles.mark} aria-hidden="true">₦</span><span>budget<span>basics</span></span></Link><button className={styles.menuToggle} type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}><span aria-hidden="true">{menuOpen ? '×' : '☰'}</span><span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span></button><nav id="primary-navigation" className={`${styles.nav}${menuOpen ? ` ${styles.navOpen}` : ''}`} aria-label="Main navigation"><NavLink className={styles.navLink} to="/" end onClick={closeMenu}>Home</NavLink><Dropdown label="Learn" links={learnLinks} open={openDropdown === 'learn'} onToggle={() => toggleDropdown('learn')} onNavigate={closeMenu} /><Dropdown label="Plan" links={planLinks} open={openDropdown === 'plan'} onToggle={() => toggleDropdown('plan')} onNavigate={closeMenu} /><NavLink className={styles.navLink} to="/assistant" onClick={closeMenu}>Ask a question</NavLink><NavLink className={styles.navLink} to="/about" onClick={closeMenu}>About</NavLink><div className={styles.actions}><ThemeToggle /><Link className="btn btn--primary" to="/calculator" onClick={closeMenu}>Start planning <span aria-hidden="true">→</span></Link></div><div className={styles.mobileLinks}><Link to="/feedback" onClick={closeMenu}>Feedback</Link><Link to="/contact" onClick={closeMenu}>Contact</Link><Link to="/sitemap" onClick={closeMenu}>Sitemap</Link></div></nav></div></header>
}

export default Navbar
