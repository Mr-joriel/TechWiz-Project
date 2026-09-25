import { useEffect, useState } from 'react'
import styles from './ThemeToggle.module.css'

const STORAGE_KEY = 'budgetbasics-theme'
function getInitialTheme() {
  try { return window.localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light' } catch { return 'light' }
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { window.localStorage.setItem(STORAGE_KEY, theme) } catch { /* Theme still applies until the page closes. */ }
  }, [theme])
  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  return <button className={styles.toggle} type="button" onClick={() => setTheme(nextTheme)} aria-label={`Switch to ${nextTheme} mode`} title={`Switch to ${nextTheme} mode`}><span className={styles.icon} aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span><span>{theme === 'dark' ? 'Light' : 'Dark'}</span></button>
}
export default ThemeToggle
