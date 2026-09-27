import { useState } from 'react'
import styles from './Chatbot.module.css'

const suggestions = [
  'How can I save more money?',
  'How do I create a budget?',
  'How can I stop overspending?',
]

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! 👋 I'm the BudgetBasics AI Assistant. I can help you with budgeting, saving, spending, and managing your money. What would you like to know?",
    },
  ])

  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const getResponse = (question) => {
    const q = question.toLowerCase()

    if (
      q.includes('save') ||
      q.includes('saving') ||
      q.includes('savings')
    ) {
      return "A good way to save is to set a clear savings goal and include it in your budget. Decide how much you can comfortably save each time you receive income and track your progress."
    }

    if (
      q.includes('budget') ||
      q.includes('income') ||
      q.includes('salary') ||
      q.includes('earn')
    ) {
      return "Start by writing down your total income. Then list your essential expenses, other spending, and savings. Give each part of your income a purpose and review your budget regularly."
    }

    if (
      q.includes('spend') ||
      q.includes('spending') ||
      q.includes('overspend') ||
      q.includes('expense')
    ) {
      return "Try tracking every expense for a month. Once you know where your money goes, identify unnecessary spending and set realistic limits for different categories."
    }

    if (
      q.includes('debt') ||
      q.includes('loan') ||
      q.includes('owe')
    ) {
      return "Start by listing what you owe and the required payments. Keep up with required payments and consider directing extra money toward your debts while maintaining some savings for unexpected expenses."
    }

    if (
      q.includes('emergency') ||
      q.includes('unexpected')
    ) {
      return "An emergency fund is money kept aside for unexpected expenses. Start with an amount you can comfortably save and build it gradually over time."
    }

    if (
      q.includes('hello') ||
      q.includes('hi') ||
      q.includes('hey')
    ) {
      return "Hey! 👋 I'm ready to help with your budgeting, saving, spending, and money-management questions."
    }

    return "I'm the BudgetBasics AI Assistant 💰. I can help with budgeting, saving, spending, income, expenses, and managing money. Please ask me something related to your finances."
  }

  const sendMessage = (message = input) => {
    const text = message.trim()

    if (!text || isTyping) return

    setMessages((previous) => [
      ...previous,
      {
        type: 'user',
        text,
      },
    ])

    setInput('')
    setIsTyping(true)

    // Simulate AI thinking/loading time
    setTimeout(() => {
      const response = getResponse(text)

      setMessages((previous) => [
        ...previous,
        {
          type: 'bot',
          text: response,
        },
      ])

      setIsTyping(false)
    }, 1800)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    sendMessage()
  }

  return (
    <section
      className={styles.page}
      aria-labelledby="chatbot-heading"
    >
      <div className={styles.content}>

        <div className={styles.heading}>
          <div className={styles.icon}>✦</div>

          <div>
            <p className={styles.eyebrow}>
              BudgetBasics · AI Assistant
            </p>

            <h1 id="chatbot-heading">
              Budget Assistant
            </h1>

            <p className={styles.subtitle}>
              Get simple guidance on budgeting, saving and managing your money.
            </p>
          </div>
        </div>

        <div className={styles.chatCard}>

          <div className={styles.chatHeader}>
            <div className={styles.statusDot}></div>

            <div>
              <strong>BudgetBasics Assistant</strong>
              <span>Online · Ready to help</span>
            </div>
          </div>

          <div className={styles.messages}>

            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.type === 'user'
                    ? styles.userRow
                    : styles.botRow
                }
              >

                {message.type === 'bot' && (
                  <div className={styles.botAvatar}>
                    B
                  </div>
                )}

                <div
                  className={
                    message.type === 'user'
                      ? styles.userMessage
                      : styles.botMessage
                  }
                >
                  {message.text}
                </div>

              </div>
            ))}

            {/* AI typing indicator */}
            {isTyping && (
              <div className={styles.botRow}>
                <div className={styles.botAvatar}>
                  B
                </div>

                <div className={styles.typingBubble}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}

          </div>

          <div className={styles.suggestions}>
            <p>Try asking:</p>

            <div className={styles.suggestionButtons}>
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => sendMessage(suggestion)}
                  disabled={isTyping}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          <form
            className={styles.inputArea}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about budgeting or saving..."
              aria-label="Ask the BudgetBasics Assistant"
              disabled={isTyping}
            />

            <button
              type="submit"
              disabled={isTyping}
            >
              {isTyping ? 'Thinking...' : 'Send'}
            </button>
          </form>

        </div>

        <p className={styles.disclaimer}>
          BudgetBasics provides general financial education and budgeting
          guidance. It is not a substitute for professional financial advice.
        </p>

      </div>
    </section>
  )
}

export default Chatbot