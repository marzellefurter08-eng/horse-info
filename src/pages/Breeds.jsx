import React, { useState, useEffect } from 'react'
import PopularBreeds from '../components/PopularBreeds'
import LoadingScreen from '../components/LoadingScreen'
import InfoModal from '../components/InfoModal'

function BreedsPage() {
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
      <PopularBreeds />
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Choosing the Right Breed</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('For Beginners', 'Consider breeds known for calm temperaments and trainability like Quarter Horses, Morgans, or certain pony breeds.\n\nBest beginner breeds:\n• Quarter Horse - versatile, calm, willing\n• Morgan - steady, intelligent, versatile\n• Haflinger - gentle, sturdy, good temperament\n• Paint Horse - calm, colorful, versatile\n\nThese breeds are forgiving of mistakes and help build confidence in new riders.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">For Beginners</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Consider breeds known for calm temperaments and trainability like Quarter Horses, Morgans, or certain pony breeds.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2">
                <li>• Quarter Horse</li>
                <li>• Morgan</li>
                <li>• Haflinger</li>
              </ul>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('For Experienced Riders', 'Athletic breeds like Thoroughbreds, Arabians, and Warmbloods offer challenges and rewards for skilled equestrians.\n\nBest for experienced riders:\n• Thoroughbred - athletic, sensitive, fast\n• Arabian - intelligent, spirited, enduring\n• Warmblood - athletic, trainable, versatile\n\nThese breeds require skilled handling but offer exceptional performance in competition.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">For Experienced Riders</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Athletic breeds like Thoroughbreds, Arabians, and Warmbloods offer challenges and rewards for skilled equestrians.</p>
              <ul className="text-gray-600 dark:text-[#ffffff]/80 space-y-2">
                <li>• Thoroughbred</li>
                <li>• Arabian</li>
                <li>• Warmblood</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-200 to-gray-100 dark:from-[#0a0000] dark:to-[#1a0000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Breed Statistics & Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 text-center">
              <div className="text-4xl font-bold text-[#ff0000] mb-2">300+</div>
              <div className="text-gray-600 dark:text-[#ffffff]/80">Recognized Breeds</div>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 text-center">
              <div className="text-4xl font-bold text-[#ff0000] mb-2">50+</div>
              <div className="text-gray-600 dark:text-[#ffffff]/80">Endangered Breeds</div>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 text-center">
              <div className="text-4xl font-bold text-[#ff0000] mb-2">75%</div>
              <div className="text-gray-600 dark:text-[#ffffff]/80">Domesticated</div>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 text-center">
              <div className="text-4xl font-bold text-[#ff0000] mb-2">25%</div>
              <div className="text-gray-600 dark:text-[#ffffff]/80">Wild/feral</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Breed Care Considerations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Hot Breeds Care', 'Hot breeds like Arabians and Thoroughbreds require careful feeding to prevent weight loss. Need regular exercise and mental stimulation.\n\nCare requirements:\n• High-quality feed (grain, supplements)\n• Regular exercise (daily)\n• Blanketing in winter\n• Mental enrichment\n• Monitor weight closely\n\nThese breeds have fast metabolisms and need attentive management.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">Hot Breeds (Arabian, Thoroughbred)</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Require careful feeding to prevent weight loss. Need regular exercise and mental stimulation.</p>
              <ul className="text-[#ffffff]/80 space-y-2 text-sm">
                <li>• High-quality feed</li>
                <li>• Regular exercise</li>
                <li>• Blanketing in winter</li>
                <li>• Mental enrichment</li>
              </ul>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Cold Breeds Care', 'Cold breeds like Draft horses and Fjords are easy keepers that gain weight easily. Require less feed but need monitoring for obesity.\n\nCare requirements:\n• Monitor weight closely\n• Limited grain\n• Good forage quality\n• Regular hoof care\n• Watch for metabolic issues\n\nTheir slow metabolism makes them prone to weight gain if overfed.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">Cold Breeds (Draft, Fjord)</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Easy keepers that gain weight easily. Require less feed but need monitoring for obesity.</p>
              <ul className="text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Monitor weight closely</li>
                <li>• Limited grain</li>
                <li>• Good forage quality</li>
                <li>• Regular hoof care</li>
              </ul>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Pony Breeds Care', 'Ponies are prone to founder and metabolic issues. Strict diet management is essential for their health.\n\nCare requirements:\n• Strict diet control\n• Limited pasture access\n• Regular dental care\n• Weight monitoring\n• Watch for laminitis signs\n\nPonies require careful management to prevent obesity-related health problems.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">Pony Breeds</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Prone to founder and metabolic issues. Strict diet management is essential.</p>
              <ul className="text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Strict diet control</li>
                <li>• Limited pasture access</li>
                <li>• Regular dental care</li>
                <li>• Weight monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-200 to-gray-100 dark:from-[#0a0000] dark:to-[#1a0000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Famous Horse Breeds in History</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Thoroughbred - Racing Legends', 'Famous racehorses like Secretariat, Man o\' War, and American Pharoah have captured the world\'s imagination with their incredible speed and spirit.\n\nLegendary Thoroughbreds:\n• Secretariat - Triple Crown winner, record-holder\n• Man o\' War - Greatest racehorse of the 20th century\n• American Pharoah - First Triple Crown winner in 37 years\n• Seabiscuit - Underdog hero of the Great Depression\n\nThese horses represent the pinnacle of racing excellence.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">🏆 Thoroughbred - Racing Legends</h3>
              <p className="text-gray-700 dark:text-[#ffffff]">Famous racehorses like Secretariat, Man o' War, and American Pharoah have captured the world's imagination with their incredible speed and spirit.</p>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Arabian - Ancient Heritage', 'One of the oldest breeds, Arabians have influenced nearly every modern horse breed. Known for endurance and beauty throughout history.\n\nArabian legacy:\n• Originated in Arabian Peninsula\n• Foundation for many modern breeds\n• Known for intelligence and loyalty\n• Excel in endurance riding\n• Distinctive head shape and high tail carriage\n\nTheir bloodlines flow through horses worldwide.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">⚔️ Arabian - Ancient Heritage</h3>
              <p className="text-gray-700 dark:text-[#ffffff]">One of the oldest breeds, Arabians have influenced nearly every modern horse breed. Known for endurance and beauty throughout history.</p>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Quarter Horse - American Icon', 'America\'s most popular breed, essential in the development of the American West. Used for ranching, rodeo, and pleasure riding.\n\nQuarter Horse impact:\n• Most numerous breed in America\n• Foundation of western riding\n• Excel at sprinting (quarter-mile races)\n• Versatile in many disciplines\n• Ideal for ranch work and rodeo\n\nTheir versatility and temperament make them America\'s favorite.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">🌾 Quarter Horse - American Icon</h3>
              <p className="text-gray-700 dark:text-[#ffffff]">America's most popular breed, essential in the development of the American West. Used for ranching, rodeo, and pleasure riding.</p>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Andalusian - Royal Heritage', 'The preferred horse of European royalty for centuries. Known for elegance and used in classical dressage and bullfighting.\n\nAndalusian prestige:\n• Royal mounts of Spanish kings\n• Foundation of many warmblood breeds\n• Excel in classical dressage\n• Used in bullfighting (rejoneo)\n• Known for collected movements\n\nTheir elegance and presence make them truly noble horses.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">🏰 Andalusian - Royal Heritage</h3>
              <p className="text-gray-700 dark:text-[#ffffff]">The preferred horse of European royalty for centuries. Known for elegance and used in classical dressage and bullfighting.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center animate-pulse-slow">🌟 Rare & Endangered Breeds</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-[0_0_40px_rgba(255,0,0,0.5)]"
              onClick={() => openModal('Cleveland Bay', 'The Cleveland Bay is one of the rarest horse breeds in the world, with fewer than 1,000 purebred horses remaining.\n\nCleveland Bay facts:\n• Originated in England\n• Used in royal ceremonies\n• Excellent driving horse\n• Conservation efforts ongoing\n\nThis ancient breed needs dedicated preservation efforts.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">🏴󠁧󠁢󠁥󠁮󠁧󠁿 Cleveland Bay</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">One of the rarest breeds with fewer than 1,000 purebreds worldwide. An ancient English breed used in royal ceremonies.</p>
              <div className="text-[#ff0000] font-bold text-sm">Critically Endangered</div>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-[0_0_40px_rgba(255,0,0,0.5)]"
              onClick={() => openModal('Suffolk Punch', 'The Suffolk Punch is a critically endangered draft breed from England, with fewer than 500 horses remaining.\n\nSuffolk Punch facts:\n• Always chestnut in color\n• One of the oldest draft breeds\n• Excellent for farm work\n• Breed society working on conservation\n\nTheir unique color and strength make them truly special.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">🏴󠁧󠁢󠁥󠁮󠁧󠁿 Suffolk Punch</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Critically endangered English draft breed with fewer than 500 horses. Always chestnut in color.</p>
              <div className="text-[#ff0000] font-bold text-sm">Critically Endangered</div>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-[0_0_40px_rgba(255,0,0,0.5)]"
              onClick={() => openModal('Akhal-Teke', 'The Akhal-Teke is a rare breed from Turkmenistan known for its metallic coat and incredible endurance.\n\nAkhal-Teke facts:\n• Known for metallic sheen coat\n• One of the oldest breeds\n• Exceptional endurance\n• National treasure of Turkmenistan\n\nTheir unique appearance and abilities make them truly extraordinary.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">🇹🇲 Akhal-Teke</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Rare breed from Turkmenistan with a metallic coat sheen. Known as the "Golden Horse" for its unique appearance.</p>
              <div className="text-[#ff0000] font-bold text-sm">Rare Breed</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-200 to-gray-100 dark:from-[#0a0000] dark:to-[#1a0000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">💰 Breed Cost Considerations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Purchase Costs', 'Initial purchase prices vary widely by breed, training, and age. From R9,250 for untrained horses to millions for elite competition horses.\n\nPrice ranges:\n• Untrained horses: R9,250-R92,500\n• Trained pleasure horses: R92,500-R462,500\n• Competition horses: R462,500-R1,850,000+\n• Elite horses: R1,850,000-R18,500,000+\n\nResearch thoroughly before purchasing.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">💵 Purchase Price</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Prices range from R9,250 for untrained horses to millions for elite competition horses.</p>
              <ul className="text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Untrained: R9,250-R92,500</li>
                <li>• Trained: R92,500-R462,500</li>
                <li>• Competition: R462,500+</li>
              </ul>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Annual Costs', 'Annual ownership costs include feed, veterinary care, farrier services, and equipment. Budget R55,500-R185,000+ annually.\n\nAnnual expenses:\n• Feed: R22,200-R55,500\n• Veterinary: R9,250-R27,750\n• Farrier: R11,100-R22,200\n• Boarding: R55,500-R222,000\n• Equipment: R9,250-R37,000\n\nOwning a horse is a significant financial commitment.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">📅 Annual Costs</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Expect to spend R55,500-R185,000+ annually on feed, vet care, farrier, and boarding.</p>
              <ul className="text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Feed: R22,200-R55,500</li>
                <li>• Veterinary: R9,250-R27,750</li>
                <li>• Farrier: R11,100-R22,200</li>
              </ul>
            </div>
            <div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl p-6 border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal('Hidden Costs', 'Don\'t forget emergency vet bills, insurance, training, and unexpected expenses. Always have an emergency fund.\n\nHidden costs:\n• Emergency vet: R9,250-R92,500+\n• Insurance: R5,550-R22,200/year\n• Training: R9,250-R37,000/month\n• Equipment replacement: R9,250-\n• Competition fees: R1,850-R9,250/event\n\nPlan for the unexpected to avoid financial stress.')}
            >
              <h3 className="text-xl font-bold text-[#ff0000] mb-3">⚠️ Hidden Costs</h3>
              <p className="text-gray-700 dark:text-[#ffffff] mb-4">Emergency vet bills, insurance, training, and equipment replacement add up quickly.</p>
              <ul className="text-[#ffffff]/80 space-y-2 text-sm">
                <li>• Emergency fund needed</li>
                <li>• Insurance recommended</li>
                <li>• Training costs vary</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <InfoModal title={modalData.title} content={modalData.content} onClose={closeModal} />
    </div>
  )
}

export default BreedsPage
