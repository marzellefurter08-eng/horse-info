import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ClassificationPage from './pages/Classification'
import BreedsPage from './pages/Breeds'
import UsesPage from './pages/Uses'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classification" element={<ClassificationPage />} />
          <Route path="/breeds" element={<BreedsPage />} />
          <Route path="/uses" element={<UsesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
