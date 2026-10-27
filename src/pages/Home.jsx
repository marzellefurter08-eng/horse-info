import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import LoadingScreen from '../components/LoadingScreen'
import InfoModal from '../components/InfoModal'

function Home() {
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
      <Hero />
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#0a0000] dark:to-[#1a0000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Why Learn About Horses?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 group cursor-pointer hover:scale-105"
              onClick={() => openModal('Understanding Breeds', 'Different horse breeds have unique characteristics that make them suitable for specific activities and environments.\n\nKey factors to consider:\n• Size and build\n• Temperament and personality\n• Energy levels and exercise needs\n• Grooming requirements\n• Health predispositions\n\nUnderstanding these traits helps you choose the right breed for your lifestyle and provide optimal care.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3 group-hover:scale-105 transition-transform">Understanding Breeds</h3>
              <p className="text-gray-700 dark:text-[#ffffff]">Different horse breeds have unique characteristics that make them suitable for specific activities and environments.</p>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 group cursor-pointer hover:scale-105"
              onClick={() => openModal('Proper Care', 'Knowing your horse\'s breed helps provide better nutrition, training, and healthcare tailored to their needs.\n\nEssential care aspects:\n• Nutrition: Quality forage, clean water, balanced supplements\n• Shelter: Protection from weather, safe fencing\n• Health: Regular vet checkups, vaccinations, dental care\n• Grooming: Daily brushing, hoof care, coat maintenance\n\nEach breed has specific requirements that should be researched thoroughly.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3 group-hover:scale-105 transition-transform">Proper Care</h3>
              <p className="text-gray-700 dark:text-[#ffffff]">Knowing your horse's breed helps provide better nutrition, training, and healthcare tailored to their needs.</p>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 group cursor-pointer hover:scale-105"
              onClick={() => openModal('Building Bonds', 'Understanding horse behavior and breed traits strengthens the relationship between horse and rider.\n\nBuilding a strong bond:\n• Spend quality time together\n• Learn their body language\n• Be consistent in your interactions\n• Use positive reinforcement\n• Respect their boundaries\n\nA strong partnership is built on trust, patience, and mutual respect.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3 group-hover:scale-105 transition-transform">Building Bonds</h3>
              <p className="text-gray-700 dark:text-[#ffffff]">Understanding horse behavior and breed traits strengthens the relationship between horse and rider.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-200 to-gray-100 dark:from-[#1a0000] dark:to-[#0a0000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">The History of Horses</h2>
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-8 border border-gray-300 dark:border-[#ff0000]/30">
            <p className="text-gray-700 dark:text-[#ffffff] leading-relaxed mb-6">
              Horses have been human companions for over 6,000 years. From their early domestication on the Eurasian steppes to their crucial role in building civilizations, 
              horses have shaped human history in countless ways. They've been essential in warfare, agriculture, transportation, and sports.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="text-center p-4 bg-gray-200/50 dark:bg-[#000000]/50 rounded-xl border border-gray-300 dark:border-[#ff0000]/20">
                <div className="text-3xl font-bold text-[#ff0000] mb-2">6,000+</div>
                <div className="text-gray-600 dark:text-[#ffffff]/80 text-sm">Years of Domestication</div>
              </div>
              <div className="text-center p-4 bg-gray-200/50 dark:bg-[#000000]/50 rounded-xl border border-gray-300 dark:border-[#ff0000]/20">
                <div className="text-3xl font-bold text-[#ff0000] mb-2">300+</div>
                <div className="text-gray-600 dark:text-[#ffffff]/80 text-sm">Breeds Worldwide</div>
              </div>
              <div className="text-center p-4 bg-gray-200/50 dark:bg-[#000000]/50 rounded-xl border border-gray-300 dark:border-[#ff0000]/20">
                <div className="text-3xl font-bold text-[#ff0000] mb-2">58M</div>
                <div className="text-gray-600 dark:text-[#ffffff]/80 text-sm">Horses Globally</div>
              </div>
              <div className="text-center p-4 bg-gray-200/50 dark:bg-[#000000]/50 rounded-xl border border-gray-300 dark:border-[#ff0000]/20">
                <div className="text-3xl font-bold text-[#ff0000] mb-2">100+</div>
                <div className="text-gray-600 dark:text-[#ffffff]/80 text-sm">Countries with Horses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#0a0000] dark:to-[#1a0000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Essential Horse Care Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Nutrition & Feeding', 'Provide high-quality forage, clean water, and balanced supplements. Feed small meals frequently rather than large amounts at once.\n\nKey feeding guidelines:\n• Fresh water always available (20-30 gallons daily)\n• Quality hay or pasture (1.5-2% of body weight)\n• Grain based on activity level\n• Regular feeding schedule (2-3 times daily)\n• Avoid sudden diet changes\n• Monitor weight and condition\n\nProper nutrition is the foundation of horse health.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">🍎 Nutrition & Feeding</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Provide high-quality forage, clean water, and balanced supplements. Feed small meals frequently rather than large amounts at once.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Fresh water always available</li>
                <li>• Quality hay or pasture</li>
                <li>• Grain based on activity level</li>
                <li>• Regular feeding schedule</li>
              </ul>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Shelter & Environment', 'Horses need protection from extreme weather. Provide adequate shelter, clean bedding, and safe fencing.\n\nShelter requirements:\n• Three-sided shelter minimum\n• Clean, dry bedding (straw, shavings)\n• Secure fencing (wood, electric, vinyl)\n• Good ventilation\n• Protection from sun and wind\n• Safe turnout area\n\nA comfortable environment reduces stress and promotes health.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">🏠 Shelter & Environment</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Horses need protection from extreme weather. Provide adequate shelter, clean bedding, and safe fencing.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Three-sided shelter minimum</li>
                <li>• Clean, dry bedding</li>
                <li>• Secure fencing</li>
                <li>• Good ventilation</li>
              </ul>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Health & Veterinary Care', 'Regular veterinary checkups, vaccinations, and dental care are essential for your horse\'s wellbeing.\n\nHealth care schedule:\n• Annual vaccinations (tetanus, flu, West Nile)\n• Regular dental exams (every 6-12 months)\n• Hoof care every 6-8 weeks\n• Deworming schedule (every 2-3 months)\n• Coggins test annually\n• Emergency preparedness\n\nPreventive care is more effective and economical than treating problems.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">🏥 Health & Veterinary Care</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Regular veterinary checkups, vaccinations, and dental care are essential for your horse's wellbeing.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Annual vaccinations</li>
                <li>• Regular dental exams</li>
                <li>• Hoof care every 6-8 weeks</li>
                <li>• Deworming schedule</li>
              </ul>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Exercise & Training', 'Regular exercise keeps horses healthy and happy. Training should be consistent and positive.\n\nExercise guidelines:\n• Daily turnout preferred (4+ hours)\n• Consistent training routine\n• Variety in activities\n• Rest days included\n• Warm-up and cool-down\n• Progressive conditioning\n\nA well-exercised horse is physically and mentally healthier.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">🏃 Exercise & Training</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Regular exercise keeps horses healthy and happy. Training should be consistent and positive.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Daily turnout preferred</li>
                <li>• Consistent training routine</li>
                <li>• Variety in activities</li>
                <li>• Rest days included</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-200 to-gray-100 dark:from-[#1a0000] dark:to-[#0a0000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Horse Behavior & Communication</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Body Language', 'Horses communicate through ear position, tail movement, and overall posture. Learning these signals helps understand their mood and intentions.\n\nKey signals:\n• Ears forward: attentive, interested\n• Ears back: annoyed, threatened\n• Tail swishing: irritation\n• Pawing: impatience\n• Relaxed posture: calm\n• Tense muscles: fear or stress\n\nUnderstanding body language prevents accidents and improves communication.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">Body Language</h3>
              <p className="text-gray-700 dark:text-[#ffffff]">Horses communicate through ear position, tail movement, and overall posture. Learning these signals helps understand their mood and intentions.</p>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Social Structure', 'Horses are herd animals with complex social hierarchies. They form strong bonds and prefer company of other horses.\n\nHerd dynamics:\n• Clear hierarchy with leaders\n• Mutual grooming strengthens bonds\n• Separation anxiety common\n• Buddy system for safety\n• Learning from herd members\n\nUnderstanding herd behavior helps in management and training.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">Social Structure</h3>
              <p className="text-gray-700 dark:text-[#ffffff]">Horses are herd animals with complex social hierarchies. They form strong bonds and prefer company of other horses.</p>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Flight Response', 'As prey animals, horses have a strong flight instinct. Understanding this helps in training and handling situations.\n\nFlight response:\n• First instinct is to run\n• React quickly to perceived threats\n• Can spook at sudden movements\n• Need time to assess situations\n• Desensitization training helps\n\nPatience and gradual exposure build confidence and reduce flight reactions.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">Flight Response</h3>
              <p className="text-gray-700 dark:text-[#ffffff]">As prey animals, horses have a strong flight instinct. Understanding this helps in training and handling situations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-200 to-gray-100 dark:from-[#1a0000] dark:to-[#0a0000] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center animate-pulse-slow">🏆 Horse Records & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-[0_0_40px_rgba(255,0,0,0.5)] group"
              onClick={() => openModal('Fastest Horse', 'The fastest recorded speed for a horse is 43.97 mph (70.76 km/h), achieved by Winning Brew in 2008.\n\nSpeed records:\n• Quarter Horses are fastest over short distances\n• Thoroughbreds excel at longer distances\n• Secretariat still holds track records\n\nSpeed is a combination of genetics, training, and heart.')}
            >
              <div className="text-4xl font-bold text-[#ff0000] mb-2 group-hover:scale-110 transition-transform">43.97 mph</div>
              <div className="text-gray-600 dark:text-[#ffffff]/80">Fastest Recorded Speed</div>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-[0_0_40px_rgba(255,0,0,0.5)] group"
              onClick={() => openModal('Tallest Horse', 'The tallest horse ever recorded was a Shire named Mammoth, standing at 21.2 hands (86.5 inches or 219 cm) tall.\n\nGiant breeds:\n• Shire horses are typically the tallest\n• Belgian Drafts also reach great heights\n• Proper nutrition is crucial for growth\n\nThese gentle giants are truly magnificent creatures.')}
            >
              <div className="text-4xl font-bold text-[#ff0000] mb-2 group-hover:scale-110 transition-transform">21.2 hands</div>
              <div className="text-gray-600 dark:text-[#ffffff]/80">Tallest Horse Ever</div>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-[0_0_40px_rgba(255,0,0,0.5)] group"
              onClick={() => openModal('Oldest Horse', 'The oldest horse reliably recorded was Old Billy, who lived to be 62 years old (1760-1822).\n\nLongevity factors:\n• Good nutrition and care\n• Regular veterinary attention\n• Appropriate exercise\n• Low-stress environment\n\nWith proper care, horses can live long, healthy lives.')}
            >
              <div className="text-4xl font-bold text-[#ff0000] mb-2 group-hover:scale-110 transition-transform">62 years</div>
              <div className="text-gray-600 dark:text-[#ffffff]/80">Oldest Horse Recorded</div>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-[0_0_40px_rgba(255,0,0,0.5)] group"
              onClick={() => openModal('Longest Jump', 'The longest horse jump recorded was 8 feet 1.25 inches (2.47 meters), achieved by Huaso in 1949.\n\nJumping records:\n• Show jumping requires technique and power\n• Training builds confidence and skill\n• Proper conditioning prevents injury\n\nThese records showcase the incredible athleticism of horses.')}
            >
              <div className="text-4xl font-bold text-[#ff0000] mb-2 group-hover:scale-110 transition-transform">8 ft 1.25 in</div>
              <div className="text-gray-600 dark:text-[#ffffff]/80">Longest Jump</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#0a0000] dark:to-[#1a0000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">🌍 Horses Around the World</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('North America', 'North America has the highest horse population with over 10 million horses. The Quarter Horse is the most popular breed.\n\nNorth American horse culture:\n• Western riding traditions\n• Rodeo and ranching heritage\n• Thoroughbred racing industry\n• Diverse breed population\n\nHorses are deeply embedded in North American history and culture.')}
            >
              <h3 className="text-2xl font-bold text-[#ff0000] mb-3">🇺🇸 North America</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Over 10 million horses, home to the Quarter Horse and Thoroughbred racing industry.</p>
              <div className="text-[#ff0000] font-bold">10M+ Horses</div>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Europe', 'Europe has a rich equestrian heritage with famous breeds like the Arabian, Andalusian, and various warmbloods. Dressage originated here.\n\nEuropean equestrian traditions:\n• Classical dressage schools\n• Famous warmblood breeds\n• Olympic equestrian excellence\n• Historical royal stables\n\nEurope\'s equestrian traditions have influenced horse riding worldwide.')}
            >
              <h3 className="text-2xl font-bold text-[#ff0000] mb-3">🇪🇺 Europe</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Rich equestrian heritage, home to dressage, warmbloods, and classical riding schools.</p>
              <div className="text-[#ff0000] font-bold">7M+ Horses</div>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Asia & Australia', 'Asia is home to the Arabian horse\'s origins, while Australia has a strong wild horse (brumby) population and racing culture.\n\nAsian & Australian horses:\n• Arabian horse origins\n• Australian brumbies\n• Growing racing industries\n• Unique native breeds\n\nThese regions have diverse and fascinating horse populations.')}
            >
              <h3 className="text-2xl font-bold text-[#ff0000] mb-3">🌏 Asia & Australia</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Origin of Arabian horses, home to Australian brumbies and growing racing industries.</p>
              <div className="text-[#ff0000] font-bold">15M+ Horses</div>
            </div>
          </div>
        </div>
      </section>
      
      <InfoModal title={modalData.title} content={modalData.content} onClose={closeModal} />
    </div>
  )
}

export default Home
