import React, { useState, useEffect } from 'react'
import Classification from '../components/Classification'
import LoadingScreen from '../components/LoadingScreen'
import InfoModal from '../components/InfoModal'

function ClassificationPage() {
  const [loading, setLoading] = useState(true)
  const [modalData, setModalData] = useState({ title: null, content: null })

  useEffect(() => {
    window.scrollTo(0, 0)
    const timer = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  const openModal = (title, content) => {
    setModalData({ title, content })
  }

  const closeModal = () => {
    setModalData({ title: null, content: null })
  }

  if (loading) return <LoadingScreen />

  return (
    <div>
      <Classification />
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Understanding Horse Classifications</h2>
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-8 border border-gray-300 dark:border-[#ff0000]/30">
            <p className="text-gray-700 dark:text-[#ffffff] leading-relaxed mb-6">
              Horse classifications help us understand the diverse world of equines. Each category represents horses bred for specific purposes, 
              from racing and jumping to heavy farm work. Understanding these classifications helps in choosing the right horse for your needs 
              and providing appropriate care.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div 
                className="bg-gray-200/50 dark:bg-[#000000]/50 rounded-xl p-6 border border-gray-300 dark:border-[#ff0000]/20 cursor-pointer hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 hover:scale-105"
                onClick={() => openModal('Physical Characteristics', 'Size, build, and conformation vary significantly between classifications, affecting their capabilities and uses.\n\nKey physical traits:\n• Height ranges from ponies (<14.2 hands) to drafts (17+ hands)\n• Body type: refined (light) vs muscular (draft)\n• Bone structure affects strength and speed\n• Conformation influences movement and soundness\n\nUnderstanding physical characteristics helps match horses to appropriate disciplines.')}
              >
                <h3 className="text-lg font-bold text-[#ff0000] mb-2">Physical Characteristics</h3>
                <p className="text-gray-600 dark:text-[#ffffff]/80">Size, build, and conformation vary significantly between classifications, affecting their capabilities and uses.</p>
              </div>
              <div 
                className="bg-gray-200/50 dark:bg-[#000000]/50 rounded-xl p-6 border border-gray-300 dark:border-[#ff0000]/20 cursor-pointer hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 hover:scale-105"
                onClick={() => openModal('Temperament & Training', 'Each classification has typical temperament traits that influence training methods and suitability for different riders.\n\nTemperament factors:\n• Hot breeds: sensitive, energetic, need experienced handlers\n• Cold breeds: calm, steady, good for beginners\n• Training approaches vary by classification\n• Handler experience level matters\n\nMatching temperament to rider skill ensures successful partnerships.')}
              >
                <h3 className="text-lg font-bold text-[#ff0000] mb-2">Temperament & Training</h3>
                <p className="text-gray-600 dark:text-[#ffffff]/80">Each classification has typical temperament traits that influence training methods and suitability for different riders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0000] to-[#1a0000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Light Horses: Speed & Agility</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Light Horses Characteristics', 'Light horses are typically 14.2 to 17 hands high, with refined builds and long legs. They excel in speed, agility, and endurance activities.\n\nKey characteristics:\n• Lean, athletic build\n• Fast metabolism\n• High energy levels\n• Sensitive temperament\n• Quick reflexes\n\nThese traits make them ideal for racing, jumping, and other performance disciplines.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">Characteristics</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Light horses are typically 14.2 to 17 hands high, with refined builds and long legs. They excel in speed, agility, and endurance activities.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Lean, athletic build</li>
                <li>• Fast metabolism</li>
                <li>• High energy levels</li>
                <li>• Sensitive temperament</li>
              </ul>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Light Horses Best Uses', 'These horses dominate in racing, jumping, dressage, and endurance riding. Their speed and agility make them perfect for competitive sports.\n\nBest uses:\n• Horse racing (flat, steeplechase)\n• Show jumping\n• Dressage\n• Eventing\n• Endurance riding\n• Polo\n\nTheir versatility makes them popular across many equestrian disciplines.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">Best Uses</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">These horses dominate in racing, jumping, dressage, and endurance riding. Their speed and agility make them perfect for competitive sports.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Horse racing</li>
                <li>• Show jumping</li>
                <li>• Dressage</li>
                <li>• Eventing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Draft Horses: Power & Strength</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Draft Horses Characteristics', 'Draft horses are massive, standing 16 to 19 hands high, with muscular builds and powerful legs. Known as "gentle giants" for their calm nature.\n\nKey characteristics:\n• Heavy, muscular build\n• Feathers on lower legs\n• Calm, steady temperament\n• Incredible pulling power\n• Slow metabolism\n\nTheir strength and gentle nature make them beloved for heavy work and as family companions.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">Characteristics</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Draft horses are massive, standing 16 to 19 hands high, with muscular builds and powerful legs. Known as "gentle giants" for their calm nature.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Heavy, muscular build</li>
                <li>• Feathers on lower legs</li>
                <li>• Calm, steady temperament</li>
                <li>• Incredible pulling power</li>
              </ul>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Draft Horses Best Uses', 'Originally bred for farm work and heavy hauling, they\'re now popular for carriage driving, logging, and as show horses.\n\nBest uses:\n• Farm work and plowing\n• Carriage driving\n• Logging operations\n• Parades and shows\n• Pleasure driving\n• Crossbreeding for sport horses\n\nTheir versatility extends from traditional farm work to modern exhibition and pleasure use.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">Best Uses</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Originally bred for farm work and heavy hauling, they're now popular for carriage driving, logging, and as show horses.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Farm work</li>
                <li>• Carriage driving</li>
                <li>• Logging</li>
                <li>• Parades and shows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0000] to-[#1a0000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Gaited Horses: Smooth & Comfortable</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Gaited Horses Characteristics', 'Gaited horses perform smooth, four-beat gaits instead of the typical trot. This makes them incredibly comfortable for long-distance riding.\n\nKey characteristics:\n• Natural smooth gaits\n• Comfortable ride\n• Often medium-sized\n• Steady temperament\n• Unique footfall patterns\n\nTheir smooth gaits reduce rider fatigue and make them ideal for long hours in the saddle.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">Characteristics</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Gaited horses perform smooth, four-beat gaits instead of the typical trot. This makes them incredibly comfortable for long-distance riding.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Natural smooth gaits</li>
                <li>• Comfortable ride</li>
                <li>• Often medium-sized</li>
                <li>• Steady temperament</li>
              </ul>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Gaited Horses Best Uses', 'Perfect for trail riding, pleasure riding, and shows where smooth gaits are judged. Popular for riders who spend long hours in the saddle.\n\nBest uses:\n• Trail riding\n• Pleasure riding\n• Gaited horse shows\n• Endurance riding\n• Competitive trail\n• Parade horses\n\nTheir comfort makes them favorites for recreational riders and competitive gaited events.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">Best Uses</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Perfect for trail riding, pleasure riding, and shows where smooth gaits are judged. Popular for riders who spend long hours in the saddle.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Trail riding</li>
                <li>• Pleasure riding</li>
                <li>• Gaited horse shows</li>
                <li>• Endurance riding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Ponies: Small But Mighty</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Ponies Characteristics', 'Ponies stand under 14.2 hands high but are proportionally stronger than full-sized horses. They\'re known for their hardiness and intelligence.\n\nKey characteristics:\n• Under 14.2 hands\n• Sturdy, compact build\n• Strong for their size\n• Often intelligent\n• Hardy constitution\n\nTheir strength and smarts make them versatile and beloved companions for all ages.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">Characteristics</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Ponies stand under 14.2 hands high but are proportionally stronger than full-sized horses. They're known for their hardiness and intelligence.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Under 14.2 hands</li>
                <li>• Sturdy, compact build</li>
                <li>• Strong for their size</li>
                <li>• Often intelligent</li>
              </ul>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Ponies Best Uses', 'Ideal for children, small adults, and driving. Many pony breeds excel in jumping, driving competitions, and as family horses.\n\nBest uses:\n• Children\'s riding\n• Driving competitions\n• Family horses\n• Therapy animals\n• Pony club activities\n• Show jumping (pony divisions)\n\nTheir versatility and manageable size make them perfect for beginners and competitive riders alike.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">Best Uses</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Ideal for children, small adults, and driving. Many pony breeds excel in jumping, driving competitions, and as family horses.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Children's riding</li>
                <li>• Driving competitions</li>
                <li>• Family horses</li>
                <li>• Therapy animals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-200 to-gray-100 dark:from-[#0a0000] dark:to-[#1a0000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center animate-pulse-slow">📊 Classification Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-[0_0_40px_rgba(255,0,0,0.5)] group"
              onClick={() => openModal('Light Horse Population', 'Light horses make up approximately 60% of the global horse population. They are the most versatile and widely used classification.\n\nLight horse dominance:\n• Most common type worldwide\n• Used in nearly all disciplines\n• Include popular breeds like Quarter Horse and Thoroughbred\n• Adaptable to various climates\n\nTheir versatility makes them the most prevalent horse type.')}
            >
              <div className="text-4xl font-bold text-[#ff0000] mb-2 group-hover:scale-110 transition-transform">60%</div>
              <div className="text-gray-600 dark:text-[#ffffff]/80">Light Horses</div>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-[0_0_40px_rgba(255,0,0,0.5)] group"
              onClick={() => openModal('Draft Horse Population', 'Draft horses represent about 15% of the horse population. Though fewer in number, they are essential for heavy work and beloved as gentle giants.\n\nDraft horse significance:\n• Critical for agriculture in many regions\n• Popular for showing and driving\n• Growing interest in crossbreeding\n• Conservation efforts for rare breeds\n\nTheir strength and gentle nature make them irreplaceable.')}
            >
              <div className="text-4xl font-bold text-[#ff0000] mb-2 group-hover:scale-110 transition-transform">15%</div>
              <div className="text-gray-600 dark:text-[#ffffff]/80">Draft Horses</div>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-[0_0_40px_rgba(255,0,0,0.5)] group"
              onClick={() => openModal('Gaited Horse Population', 'Gaited horses account for approximately 10% of horses. They are especially popular in North America for trail riding and shows.\n\nGaited horse popularity:\n• Growing interest in smooth-riding horses\n• Popular in trail riding communities\n• Competitive gaited horse shows\n• Regional breed preferences\n\nTheir smooth gaits make them increasingly popular.')}
            >
              <div className="text-4xl font-bold text-[#ff0000] mb-2 group-hover:scale-110 transition-transform">10%</div>
              <div className="text-gray-600 dark:text-[#ffffff]/80">Gaited Horses</div>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-[0_0_40px_rgba(255,0,0,0.5)] group"
              onClick={() => openModal('Pony Population', 'Ponies make up about 15% of the equine population. They are essential for children\'s riding, driving, and as therapy animals.\n\nPony importance:\n• Critical for youth equestrian programs\n• Popular in driving competitions\n• Used extensively in therapy programs\n• Many endangered pony breeds need conservation\n\nTheir size and temperament make them perfect for specific roles.')}
            >
              <div className="text-4xl font-bold text-[#ff0000] mb-2 group-hover:scale-110 transition-transform">15%</div>
              <div className="text-gray-600 dark:text-[#ffffff]/80">Ponies</div>
            </div>
          </div>
        </div>
      </section>
      
      <InfoModal title={modalData.title} content={modalData.content} onClose={closeModal} />
    </div>
  )
}

export default ClassificationPage
