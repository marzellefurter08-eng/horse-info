import React from 'react'
import { Trophy, Music, Target, Star, Wrench, Heart } from 'lucide-react'

function BreedsByUse() {
  const uses = [
    {
      icon: Trophy,
      title: 'Racing Horses',
      description: 'Horse racing is a thrilling sport that showcases the speed and agility of certain breeds. Thoroughbreds dominate flat racing, while Quarter Horses excel in sprint races.',
      breeds: ['Thoroughbred', 'Quarter Horse'],
      color: 'from-[#ff0000] to-[#ff0000]'
    },
    {
      icon: Music,
      title: 'Dressage Horses',
      description: 'Dressage is a discipline that requires precision, grace, and strength. Warmblood breeds like the Dutch Warmblood, Hanoverian, and Oldenburg are popular choices for dressage.',
      breeds: ['Dutch Warmblood', 'Hanoverian', 'Oldenburg'],
      color: 'from-[#ff0000] to-[#ff0000]'
    },
    {
      icon: Target,
      title: 'Jumping Horses',
      description: 'Show jumping requires power, agility, and courage from both horse and rider. Breeds known for their jumping ability include Warmbloods, Irish Sport Horse, and Thoroughbred.',
      breeds: ['Warmbloods', 'Irish Sport Horse', 'Thoroughbred', 'Holsteiner'],
      color: 'from-[#ff0000] to-[#ff0000]'
    },
    {
      icon: Star,
      title: 'Rodeo Horses',
      description: 'Rodeo events like barrel racing, roping, and cutting demand quick reflexes, athleticism, and a strong partnership. The American Quarter Horse is a popular choice.',
      breeds: ['Quarter Horse', 'Appaloosa', 'Paint Horse'],
      color: 'from-[#ff0000] to-[#ff0000]'
    },
    {
      icon: Wrench,
      title: 'Work Horses',
      description: 'Workhorses are bred for their strength and endurance, making them ideal for tasks such as plowing, logging, and pulling heavy loads. Draft breeds excel as work horses.',
      breeds: ['Belgian', 'Clydesdale', 'Percheron'],
      color: 'from-[#ff0000] to-[#ff0000]'
    },
    {
      icon: Heart,
      title: 'Companion Horses',
      description: 'Companion horses are prized for their gentle nature, versatility, and suitability for riders of all ages and skill levels. They make wonderful family horses.',
      breeds: ['Morgan', 'Haflinger', 'Welsh Pony', 'Miniature Horse'],
      color: 'from-[#ff0000] to-[#ff0000]'
    }
  ]

  return (
    <section id="uses" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Popular Breeds for Different Uses</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-700 dark:text-[#ffffff]">
            Different horse breeds excel in various equestrian activities and roles. Discover which breeds are best suited for each purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uses.map((use, index) => {
            const Icon = use.icon
            return (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl shadow-lg hover:shadow-[0_0_40px_rgba(255,0,0,0.5)] transition-all duration-300 overflow-hidden border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transform hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${use.color}`} />
                
                <div className="p-8">
                  <div className={`w-14 h-14 bg-gradient-to-br ${use.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg group-hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{use.title}</h3>
                  <p className="text-gray-700 dark:text-[#ffffff] mb-6 leading-relaxed">{use.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-900 dark:text-[#ffffff] uppercase tracking-wide">Ideal Breeds:</p>
                    <div className="flex flex-wrap gap-2">
                      {use.breeds.map((breed, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-red-100 dark:bg-[#ff0000]/10 text-red-600 dark:text-[#ff0000] border border-red-300 dark:border-[#ff0000]/50 group-hover:bg-red-200 dark:group-hover:bg-[#ff0000] group-hover:text-red-700 dark:group-hover:text-[#ffffff] transition-all duration-300 transform hover:scale-105"
                        >
                          {breed}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BreedsByUse
