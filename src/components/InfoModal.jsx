import React from 'react'
import { X } from 'lucide-react'

function InfoModal({ title, content, onClose }) {
  if (!title) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose}>
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl shadow-[0_0_60px_rgba(255,0,0,0.5)] max-w-2xl w-full border border-gray-300 dark:border-[#ff0000]/50 overflow-hidden animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <div className="h-2 bg-gradient-to-r from-[#ff0000] via-[#ff3333] to-[#ff0000]" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-red-100 dark:bg-[#ff0000]/20 text-red-600 dark:text-[#ff0000] hover:bg-red-200 dark:hover:bg-[#ff0000] hover:text-red-700 dark:hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="p-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
            <div className="bg-gray-200/50 dark:bg-[#000000]/50 rounded-xl p-6 border border-gray-300 dark:border-[#ff0000]/30">
              <div className="text-gray-700 dark:text-[#ffffff] leading-relaxed whitespace-pre-line">{content}</div>
            </div>
            
            <button
              onClick={onClose}
              className="mt-6 w-full bg-gradient-to-r from-[#ff0000] to-[#cc0000] text-white py-3 rounded-xl font-semibold hover:from-[#ff3333] hover:to-[#ff0000] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transform hover:-translate-y-1"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoModal
