import React, { useState, useEffect } from 'react'
import BreedsByUse from '../components/BreedsByUse'
import LoadingScreen from '../components/LoadingScreen'
import InfoModal from '../components/InfoModal'

function UsesPage() {
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
      <BreedsByUse />
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Finding Your Perfect Match</h2>
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-8 border border-gray-300 dark:border-[#ff0000]/30">
            <p className="text-gray-700 dark:text-[#ffffff] leading-relaxed mb-6">
              When choosing a horse, consider your experience level, intended activities, and the time you can dedicate to care and training. 
              Different breeds excel in different areas, and matching the right breed to your goals ensures a successful partnership.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-[#ff0000]/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-300 dark:border-[#ff0000]/50">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-bold text-[#ff0000] mb-2">Define Goals</h3>
                <p className="text-gray-600 dark:text-[#ffffff]/80 text-sm">Identify what you want to do with your horse</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-[#ff0000]/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-300 dark:border-[#ff0000]/50">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-lg font-bold text-[#ff0000] mb-2">Research Breeds</h3>
                <p className="text-gray-600 dark:text-[#ffffff]/80 text-sm">Learn about breeds suited to your activities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-[#ff0000]/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-300 dark:border-[#ff0000]/50">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-bold text-[#ff0000] mb-2">Build Partnership</h3>
                <p className="text-gray-600 dark:text-[#ffffff]/80 text-sm">Develop trust and understanding with your horse</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-200 to-gray-100 dark:from-[#0a0000] dark:to-[#1a0000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Training for Different Disciplines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Racing Training', 'Racehorses require specialized conditioning programs starting at a young age. Focus on speed, stamina, and gate training.\n\nTraining components:\n• Early conditioning (starting as yearlings)\n• Gate training and breaking\n• Speed work intervals\n• Recovery protocols\n• Distance building\n• Mental preparation\n\nSuccessful racing combines physical conditioning with mental readiness.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">🏃 Racing Training</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Racehorses require specialized conditioning programs starting at a young age. Focus on speed, stamina, and gate training.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Early conditioning</li>
                <li>• Gate training</li>
                <li>• Speed work intervals</li>
                <li>• Recovery protocols</li>
              </ul>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Dressage Training', 'Dressage requires years of systematic training developing collection, impulsion, and submission through progressive levels.\n\nTraining progression:\n• Basic groundwork\n• Lateral movements\n• Collection work\n• Musical freestyle\n• Grand Prix movements\n• Perfecting the partnership\n\nDressage is the highest expression of horse training, requiring patience and precision.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">🎨 Dressage Training</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Dressage requires years of systematic training developing collection, impulsion, and submission through progressive levels.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Basic groundwork</li>
                <li>• Lateral movements</li>
                <li>• Collection work</li>
                <li>• Musical freestyle</li>
              </ul>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Jumping Training', 'Jumping horses need confidence, technique, and fitness. Training progresses from ground poles to complex courses.\n\nTraining progression:\n• Grid work for technique\n• Course design practice\n• Stride control\n• Fitness conditioning\n• Confidence building\n• Competition preparation\n\nSuccessful jumping requires trust between horse and rider.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">🏇 Jumping Training</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Jumping horses need confidence, technique, and fitness. Training progresses from ground poles to complex courses.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Grid work</li>
                <li>• Course design</li>
                <li>• Stride control</li>
                <li>• Fitness conditioning</li>
              </ul>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Western Training', 'Western disciplines emphasize cow sense, reining patterns, and speed events. Training focuses on responsiveness and agility.\n\nTraining focus:\n• Rein control and neck reining\n• Rollbacks and spins\n• Cow work and cutting\n• Pattern work\n• Speed events\n• Ranch riding skills\n\nWestern training develops athleticism and cattle-working abilities.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">🤠 Western Training</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Western disciplines emphasize cow sense, reining patterns, and speed events. Training focuses on responsiveness and agility.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Rein control</li>
                <li>• Rollbacks and spins</li>
                <li>• Cow work</li>
                <li>• Pattern work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Essential Equipment by Discipline</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('English Riding Equipment', 'English tack is designed for close contact and precise communication between horse and rider.\n\nEssential English tack:\n• Close-contact saddle (jumping or dressage)\n• Snaffle bridle with cavesson\n• Protective boots (splint, tendon)\n• Helmet (required for safety)\n• Girth and stirrup leathers\n\nEnglish equipment emphasizes minimal interference with the horse\'s movement.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">English Riding</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">English tack is designed for close contact and precise communication between horse and rider.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Close-contact saddle</li>
                <li>• Snaffle bridle</li>
                <li>• Protective boots</li>
                <li>• Helmet required</li>
              </ul>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Western Riding Equipment', 'Western tack provides comfort for long hours and security for ranch work and rodeo events.\n\nEssential Western tack:\n• Western saddle (with horn and deep seat)\n• Curb bit or hackamore\n• Saddle bags for gear\n• Chaps (optional for protection)\n• Breast collar for stability\n\nWestern equipment is built for durability and rider comfort during long rides.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">Western Riding</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Western tack provides comfort for long hours and security for ranch work and rodeo events.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Western saddle</li>
                <li>• Curb bit or hackamore</li>
                <li>• Saddle bags</li>
                <li>• Chaps optional</li>
              </ul>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Driving Equipment', 'Driving equipment includes harness, cart, and specialized tack for controlling from behind.\n\nEssential driving equipment:\n• Breast collar or full harness\n• Breeching for braking\n• Cart or carriage\n• Long reins for control\n• Whip for communication\n• Shafts or pole for cart attachment\n\nDriving requires specialized equipment and training for both horse and driver.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">Driving</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Driving equipment includes harness, cart, and specialized tack for controlling from behind.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Breast collar harness</li>
                <li>• Breeching</li>
                <li>• Cart or carriage</li>
                <li>• Long reins</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-200 to-gray-100 dark:from-[#0a0000] dark:to-[#1a0000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Competition Levels & Organizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Local & Regional Competitions', 'Entry-level competitions perfect for beginners. Focus on learning the rules and gaining experience in a supportive environment.\n\nLocal competition features:\n• Beginner-friendly divisions\n• Learning-focused atmosphere\n• Lower entry fees\n• Local judging standards\n• Great for gaining experience\n• Build confidence before advancing\n\nStart locally to build skills and confidence before moving to higher levels.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">🏅 Local & Regional</h3>
              <p className="text-gray-700 dark:text-[#ffffff]">Entry-level competitions perfect for beginners. Focus on learning the rules and gaining experience in a supportive environment.</p>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('National Level Competitions', 'Higher competition with qualified judges and stricter standards. Requires consistent training and preparation.\n\nNational competition features:\n• Qualified judges and officials\n• Stricter scoring standards\n• Higher entry requirements\n• More competitive fields\n• Qualification rounds often required\n• Greater prestige and recognition\n\nNational competition demands dedication and consistent preparation.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">🌟 National Level</h3>
              <p className="text-gray-700 dark:text-[#ffffff]">Higher competition with qualified judges and stricter standards. Requires consistent training and preparation.</p>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('International Competitions', 'Elite competitions like the Olympics and World Equestrian Games. Represents the highest level of equestrian sport.\n\nInternational competition features:\n• Olympic Games (every 4 years)\n• World Equestrian Games\n• World Cup series\n• Continental championships\n• FEI rules and regulations\n• Highest level of competition\n\nInternational competition represents the pinnacle of equestrian achievement.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">🏆 International</h3>
              <p className="text-gray-700 dark:text-[#ffffff]">Elite competitions like the Olympics and World Equestrian Games. Represents the highest level of equestrian sport.</p>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Major Organizations', 'FEI (International), USEF (USA), British Equestrian (UK), and national federations worldwide govern the sport.\n\nKey organizations:\n• FEI - International governing body\n• USEF - United States Equestrian Federation\n• British Equestrian - UK governing body\n• National federations worldwide\n• Breed registries and associations\n• Discipline-specific organizations\n\nThese organizations set rules, sanction competitions, and promote the sport.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">📋 Major Organizations</h3>
              <p className="text-gray-700 dark:text-[#ffffff]">FEI (International), USEF (USA), British Equestrian (UK), and national federations worldwide govern the sport.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Horse Care by Activity Level</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Light Work Care', 'Horses used for occasional riding need basic maintenance but can thrive on pasture and simple feeding programs.\n\nLight work care:\n• Basic veterinary care (annual checkups)\n• Hoof trimming every 8 weeks\n• Pasture-based diet with hay supplement\n• Regular grooming for health\n• Minimal grain needed\n• Turnout for mental health\n\nLight work horses can maintain good health with basic care routines.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">🌿 Light Work (Pleasure)</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Horses used for occasional riding need basic maintenance but can thrive on pasture and simple feeding programs.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Basic veterinary care</li>
                <li>• Hoof trimming every 8 weeks</li>
                <li>• Pasture-based diet</li>
                <li>• Regular grooming</li>
              </ul>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Moderate Work Care', 'Horses in regular training need enhanced nutrition, more frequent hoof care, and conditioning programs.\n\nModerate work care:\n• Performance diet with supplements\n• Hoof care every 6 weeks\n• Regular exercise schedule\n• Massage and therapy as needed\n• Increased grain for energy\n• Monitoring for overuse injuries\n\nRegular training horses require more intensive care and monitoring.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">🏃 Moderate Work (Training)</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Horses in regular training need enhanced nutrition, more frequent hoof care, and conditioning programs.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Performance diet</li>
                <li>• Hoof care every 6 weeks</li>
                <li>• Regular exercise schedule</li>
                <li>• Massage and therapy</li>
              </ul>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Intense Work Care', 'High-performance horses require specialized care, nutrition, and recovery protocols to maintain peak condition.\n\nIntense work care:\n• High-performance nutrition program\n• Hoof care every 4-5 weeks\n• Daily conditioning and training\n• Advanced therapies (chiropractic, acupuncture)\n• Strict monitoring of health indicators\n• Professional support team\n\nCompetition horses need comprehensive care and professional support.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">⚡ Intense Work (Competition)</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">High-performance horses require specialized care, nutrition, and recovery protocols to maintain peak condition.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2 text-sm">
                <li>• High-performance nutrition</li>
                <li>• Hoof care every 4-5 weeks</li>
                <li>• Daily conditioning</li>
                <li>• Advanced therapies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UsesPage
