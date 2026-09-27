import { useState } from 'react'
import answers from '../../data/chatbot.json'
import styles from './Chatbot.module.css'

const suggestions = ['What is a need?', 'How much should I save?', 'How do I avoid overspending?']
const fallback = 'I can help with budgeting, saving, spending, needs, and money goals. Try asking about one of those topics.'

function getResponse(question) {
  const normalized = question.toLocaleLowerCase()
  const match = answers.find((item) => item.keywords.some((keyword) => normalized.includes(keyword)))
  return match?.answer || fallback
}

function Chatbot() {
  const [messages, setMessages] = useState([{ type: 'bot', text: 'Hi! I can answer common questions about budgeting, saving, and spending. What would you like to learn?' }])
  const [input, setInput] = useState('')

  function sendMessage(question = input) {
    const text = question.trim()
    if (!text) return
    setMessages((current) => [...current, { type: 'user', text }, { type: 'bot', text: getResponse(text) }])
    setInput('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    sendMessage()
  }

  return <section className={styles.page} aria-labelledby="chatbot-heading"><div className={styles.content}>
    <header className={styles.heading}><span className={styles.icon} aria-hidden="true">✦</span><div><p className={styles.eyebrow}>BudgetBasics · Learning assistant</p><h1 id="chatbot-heading">Ask a money question</h1><p className={styles.subtitle}>Answers come from the project’s local learning guide; nothing is sent to an AI service.</p></div></header>
    <div className={styles.chatCard}>
      <div className={styles.chatHeader}><span className={styles.statusDot} aria-hidden="true" /><div><strong>BudgetBasics Assistant</strong><span>Local guide · Ready to help</span></div></div>
      <div className={styles.messages} aria-live="polite" aria-label="Conversation">{messages.map((message, index) => <div key={`${message.type}-${index}`} className={message.type === 'user' ? styles.userRow : styles.botRow}>{message.type === 'bot' && <span className={styles.botAvatar} aria-hidden="true">B</span>}<p className={message.type === 'user' ? styles.userMessage : styles.botMessage}>{message.text}</p></div>)}</div>
      <div className={styles.suggestions}><p>Try a question</p><div className={styles.suggestionButtons}>{suggestions.map((suggestion) => <button key={suggestion} type="button" onClick={() => sendMessage(suggestion)}>{suggestion}</button>)}</div></div>
      <form className={styles.inputArea} onSubmit={handleSubmit}><label className="sr-only" htmlFor="chat-question">Your question</label><input id="chat-question" type="text" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about budgeting or saving…" /><button className="btn btn--primary" type="submit" disabled={!input.trim()}>Ask</button></form>
    </div>
    <p className={styles.disclaimer}>This chatbot provides general financial education only and is not professional financial advice.</p>
  </div></section>
}

export default Chatbot
