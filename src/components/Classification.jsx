import React from 'react'
import { Zap, Truck, Music, Heart } from 'lucide-react'

function Classification() {
  const classifications = [
    {
      icon: Zap,
      title: 'Light Horses',
      description: 'Taller, leaner, and faster than other breeds. They excel in activities like racing, jumping, and endurance riding.',
      examples: ['Thoroughbred', 'Arabian', 'Quarter Horse'],
      color: 'bg-gradient-to-br from-[#ff0000]/20 to-[#ff0000]/10 text-[#ff0000] border border-[#ff0000]/50'
    },
    {
      icon: Truck,
      title: 'Draft Horses',
      description: 'Large, muscular breeds built for heavy work, such as plowing fields or pulling carriages. These gentle giants are powerful yet calm.',
      examples: ['Belgian', 'Clydesdale', 'Shire'],
      color: 'bg-gradient-to-br from-[#ff0000]/20 to-[#ff0000]/10 text-[#ff0000] border border-[#ff0000]/50'
    },
    {
      icon: Music,
      title: 'Gaited Horses',
      description: 'Have unique, smooth gaits that make them comfortable for riding long distances. Known for their natural rhythm and grace.',
      examples: ['Tennessee Walking Horse', 'Paso Fino', 'Missouri Fox Trotter'],
      color: 'bg-gradient-to-br from-[#ff0000]/20 to-[#ff0000]/10 text-[#ff0000] border border-[#ff0000]/50'
    },
    {
      icon: Heart,
      title: 'Ponies',
      description: 'Smaller breeds, usually under 14.2 hands high, with sturdy frames and friendly dispositions. Popular among children and novice riders.',
      examples: ['Shetland Pony', 'Welsh Pony', 'Haflinger'],
      color: 'bg-gradient-to-br from-[#ff0000]/20 to-[#ff0000]/10 text-[#ff0000] border border-[#ff0000]/50'
    }
  ]

  return (
    <section id="classification" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0000] to-[#1a0000]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Classification of Horse Breeds</h2>
          <p className="max-w-2xl mx-auto text-xl text-[#ffffff]">
            Horses are categorized into four main classifications based on their physical characteristics and intended uses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {classifications.map((classification, index) => {
            const Icon = classification.icon
            return (
              <div 
                key={index}
                className="group bg-gradient-to-br from-[#1a0000] to-[#0a0000] rounded-2xl p-8 shadow-lg hover:shadow-[0_0_40px_rgba(255,0,0,0.4)] transition-all duration-300 border border-[#ff0000]/30 hover:border-[#ff0000] transform hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div className={`w-16 h-16 ${classification.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{classification.title}</h3>
                <p className="text-[#ffffff] mb-6 leading-relaxed">{classification.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {classification.examples.map((example, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#ff0000]/10 text-[#ff0000] border border-[#ff0000]/50 hover:bg-[#ff0000]/20 transition-colors"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Classification
