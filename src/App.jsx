import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/common/Navbar/Navbar'
import Footer from './components/common/Footer/Footer'
import BackToTop from './components/common/BackToTop/BackToTop'
import Home from './pages/Home/Home'
import Sitemap from './pages/Sitemap/Sitemap'
import BudgetingBasics from './pages/BudgetingBasics/BudgetingBasics'
import NeedsVsWants from './pages/NeedsVsWants/NeedsVsWants'
import MoneyMistakes from './pages/MoneyMistakes/MoneyMistakes'
import Budget503020 from './pages/Budget503020/Budget503020'
import SavingsGoals from './pages/SavingsGoals/SavingsGoals'
import ExpensePlanner from './pages/ExpensePlanner/ExpensePlanner'
import Chatbot from './pages/Chatbot/Chatbot'
import Infographics from './pages/Infographics/Infographics'
import About from './pages/About/About'
import Feedback from './pages/Feedback/Feedback'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/basics" element={<BudgetingBasics />} />
          <Route path="/needs-wants" element={<NeedsVsWants />} />
          <Route path="/mistakes" element={<MoneyMistakes />} />
          <Route path="/calculator" element={<Budget503020 />} />
          <Route path="/goals" element={<SavingsGoals />} />
          <Route path="/planner" element={<ExpensePlanner />} />
          <Route path="/assistant" element={<Chatbot />} />
          <Route path="/gallery" element={<Infographics />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
