import React from 'react'
import { PawPrint, Mail, Heart } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 dark:from-[#0a0000] dark:to-black text-gray-900 dark:text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-[#ff0000]/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">Horse Info from Marzelle</span>
            </div>
            <p className="text-gray-700 dark:text-[#ffffff] leading-relaxed">
              Your comprehensive guide to understanding the magnificent world of horses.
              Learn about different breeds, their characteristics, and their roles in our lives.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-700 dark:text-[#ffffff] hover:text-[#ff0000] hover:translate-x-1 transition-all duration-300">Home</a>
              </li>
              <li>
                <a href="/classification" className="text-gray-700 dark:text-[#ffffff] hover:text-[#ff0000] hover:translate-x-1 transition-all duration-300">Classification</a>
              </li>
              <li>
                <a href="/breeds" className="text-gray-700 dark:text-[#ffffff] hover:text-[#ff0000] hover:translate-x-1 transition-all duration-300">Popular Breeds</a>
              </li>
              <li>
                <a href="/uses" className="text-gray-700 dark:text-[#ffffff] hover:text-[#ff0000] hover:translate-x-1 transition-all duration-300">Breeds by Use</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-[#ff0000]/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700 dark:text-[#ffffff] text-sm mb-4 md:mb-0">
            © {currentYear} Horse Info from Marzelle. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-gray-700 dark:text-[#ffffff] text-sm">
            <span>Made with Marzelle</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
