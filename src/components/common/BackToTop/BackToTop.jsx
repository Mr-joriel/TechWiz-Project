import { useEffect, useState } from 'react'
import styles from './BackToTop.module.css'

function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 360)
    window.addEventListener('scroll', updateVisibility, { passive: true })
    updateVisibility()
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])
  if (!visible) return null
  return <button className={styles.button} type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><span aria-hidden="true">↑</span><span>Back to top</span></button>
}
export default BackToTop
