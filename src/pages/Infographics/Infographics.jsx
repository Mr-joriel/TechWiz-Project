import { useMemo, useState } from 'react'
import infographics from '../../data/infographics.json'
import styles from './Infographics.module.css'

const images = import.meta.glob('../../assets/images/*.svg', { eager: true, query: '?url', import: 'default' })
const topics = ['All topics', ...new Set(infographics.map((item) => item.topic))]

function Infographics() {
  const [query, setQuery] = useState('')
  const [topic, setTopic] = useState('All topics')
  const [sort, setSort] = useState('title-asc')

  const visibleItems = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase()
    return infographics
      .filter((item) => topic === 'All topics' || item.topic === topic)
      .filter((item) => !normalizedQuery || `${item.title} ${item.caption}`.toLocaleLowerCase().includes(normalizedQuery))
      .sort((first, second) => {
        if (sort === 'title-desc') return second.title.localeCompare(first.title)
        if (sort === 'topic-asc') return first.topic.localeCompare(second.topic) || first.title.localeCompare(second.title)
        return first.title.localeCompare(second.title)
      })
  }, [query, topic, sort])

  return (
    <section className={styles.page} aria-labelledby="infographics-heading">
      <div className={styles.content}>
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>BudgetBasics · Visual learning</p>
            <h1 id="infographics-heading">Money ideas,<br /><span>made clearer.</span></h1>
            <p className={styles.intro}>Browse short visual guides to budgeting, spending, and saving. Search by topic or explore the full collection.</p>
          </div>
          <div className={styles.heroNote} aria-hidden="true"><span>✳</span><strong>Learn a little.<br />Use it every day.</strong><small>{infographics.length} illustrated guides</small></div>
        </header>

        <section className={styles.gallery} aria-labelledby="gallery-heading">
          <div className={styles.galleryHeading}><div><p className={styles.eyebrow}>The learning gallery</p><h2 id="gallery-heading">Explore money topics</h2></div><span className={styles.resultCount} aria-live="polite">{visibleItems.length} {visibleItems.length === 1 ? 'guide' : 'guides'}</span></div>
          <div className={styles.controls}>
            <label className={styles.search}><span aria-hidden="true">⌕</span><span className="sr-only">Search infographics</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search titles or descriptions" /></label>
            <label className={styles.sort}>Sort by <select value={sort} onChange={(event) => setSort(event.target.value)}><option value="title-asc">Title: A to Z</option><option value="title-desc">Title: Z to A</option><option value="topic-asc">Topic</option></select></label>
          </div>
          <div className={styles.filters} role="group" aria-label="Filter by topic">{topics.map((item) => <button type="button" key={item} className={`${styles.filter} ${topic === item ? styles.filterActive : ''}`} aria-pressed={topic === item} onClick={() => setTopic(item)}>{item}</button>)}</div>

          {visibleItems.length ? <div className={styles.grid}>{visibleItems.map((item, index) => {
            const imageUrl = images[`../../assets/images/${item.image}`]
            return <article className={styles.card} key={item.id}>
              <div className={styles.imageFrame}><img src={imageUrl} alt={item.imageAlt} loading={index < 3 ? 'eager' : 'lazy'} /><span className={styles.topicBadge}>{item.topic}</span></div>
              <div className={styles.cardBody}><h3>{item.title}</h3><p>{item.caption}</p><span className={styles.cardFooter}>Visual guide <span aria-hidden="true">↗</span></span></div>
            </article>
          })}</div> : <div className={styles.empty} role="status"><span aria-hidden="true">⌕</span><h3>No matching infographics</h3><p>Try another search term or choose a different topic.</p><button className="btn btn--secondary" type="button" onClick={() => { setQuery(''); setTopic('All topics') }}>Clear filters</button></div>}
        </section>
      </div>
    </section>
  )
}

export default Infographics
