import React from 'react'
import { ArrowDown, Sparkles, PawPrint, Target } from 'lucide-react'

function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-[#0a0000] dark:to-[#1a0000]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#ff0000]/20 to-[#ff0000]/10 text-[#ff0000] px-4 py-2 rounded-full text-sm font-medium border border-[#ff0000]/50 animate-float backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>Discover the Magnificent World of Horses</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight">
            Horse Info
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-700 dark:text-[#ffffff] leading-relaxed">
            Explore the fascinating diversity of horse breeds, from swift racing champions to gentle draft giants. 
            Learn about their unique characteristics, histories, and the roles they play in our world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/breeds" 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#ff0000] to-[#cc0000] text-white px-8 py-4 rounded-full font-semibold hover:from-[#ff3333] hover:to-[#ff0000] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transform hover:-translate-y-1 hover:scale-105"
            >
              <span>Explore Breeds</span>
              <ArrowDown className="w-5 h-5" />
            </a>
            <a 
              href="/classification" 
              className="inline-flex items-center space-x-2 border-2 border-[#ff0000] text-[#ff0000] px-8 py-4 rounded-full font-semibold hover:bg-[#ff0000]/10 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <span>Learn Classifications</span>
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 shadow-lg hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] transition-all duration-300 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transform hover:-translate-y-2 group">
            <div className="w-12 h-12 bg-gradient-to-br from-[#ff0000]/20 to-[#ff0000]/10 rounded-xl flex items-center justify-center mb-4 border border-[#ff0000]/50 group-hover:animate-pulse-slow">
              <PawPrint className="w-6 h-6 text-[#ff0000]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#ff0000] transition-colors">20+ Popular Breeds</h3>
            <p className="text-gray-700 dark:text-[#ffffff] group-hover:text-gray-500 dark:group-hover:text-gray-300 transition-colors">Discover the most beloved horse breeds from around the world</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 shadow-lg hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] transition-all duration-300 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transform hover:-translate-y-2 group">
            <div className="w-12 h-12 bg-gradient-to-br from-[#ff0000]/20 to-[#ff0000]/10 rounded-xl flex items-center justify-center mb-4 border border-[#ff0000]/50 group-hover:animate-pulse-slow">
              <Sparkles className="w-6 h-6 text-[#ff0000]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#ff0000] transition-colors">4 Classifications</h3>
            <p className="text-gray-700 dark:text-[#ffffff] group-hover:text-gray-500 dark:group-hover:text-gray-300 transition-colors">Learn about light horses, draft horses, gaited horses, and ponies</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 shadow-lg hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] transition-all duration-300 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transform hover:-translate-y-2 group">
            <div className="w-12 h-12 bg-gradient-to-br from-[#ff0000]/20 to-[#ff0000]/10 rounded-xl flex items-center justify-center mb-4 border border-[#ff0000]/50 group-hover:animate-pulse-slow">
              <Target className="w-6 h-6 text-[#ff0000]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#ff0000] transition-colors">6 Different Uses</h3>
            <p className="text-gray-700 dark:text-[#ffffff] group-hover:text-gray-500 dark:group-hover:text-gray-300 transition-colors">Explore how different breeds excel in various equestrian activities</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
