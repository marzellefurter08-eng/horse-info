import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PawPrint, Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()

  React.useEffect(() => {
    window.scrollTo(0, 0)
    setIsMenuOpen(false)
  }, [location])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white via-gray-100 to-white dark:from-[#0a0000] dark:via-[#1a0000] dark:to-[#0a0000] backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-[#ff0000]/30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900 dark:text-white">Horse Info from Marzelle</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 dark:text-[#ffffff] hover:text-[#ff0000] dark:hover:text-[#ff0000] hover:scale-105 transition-all duration-300 font-medium">Home</Link>
            <Link to="/classification" className="text-gray-700 dark:text-[#ffffff] hover:text-[#ff0000] dark:hover:text-[#ff0000] hover:scale-105 transition-all duration-300 font-medium">Classification</Link>
            <Link to="/breeds" className="text-gray-700 dark:text-[#ffffff] hover:text-[#ff0000] dark:hover:text-[#ff0000] hover:scale-105 transition-all duration-300 font-medium">Popular Breeds</Link>
            <Link to="/uses" className="text-gray-700 dark:text-[#ffffff] hover:text-[#ff0000] dark:hover:text-[#ff0000] hover:scale-105 transition-all duration-300 font-medium">Breeds by Use</Link>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-[#000000] transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-[#ff0000]" /> : <Moon className="w-5 h-5 text-[#ff0000]" />}
            </button>
          </div>

          <div className="flex items-center md:hidden space-x-2">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-[#000000] transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-[#ff0000]" /> : <Moon className="w-5 h-5 text-[#ff0000]" />}
            </button>
            <button 
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-[#000000]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link to="/" className="block py-2 text-gray-700 dark:text-[#ffffff] hover:text-[#ff0000] dark:hover:text-[#ff0000] hover:pl-4 transition-all duration-300">Home</Link>
            <Link to="/classification" className="block py-2 text-gray-700 dark:text-[#ffffff] hover:text-[#ff0000] dark:hover:text-[#ff0000] hover:pl-4 transition-all duration-300">Classification</Link>
            <Link to="/breeds" className="block py-2 text-gray-700 dark:text-[#ffffff] hover:text-[#ff0000] dark:hover:text-[#ff0000] hover:pl-4 transition-all duration-300">Popular Breeds</Link>
            <Link to="/uses" className="block py-2 text-gray-700 dark:text-[#ffffff] hover:text-[#ff0000] dark:hover:text-[#ff0000] hover:pl-4 transition-all duration-300">Breeds by Use</Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
