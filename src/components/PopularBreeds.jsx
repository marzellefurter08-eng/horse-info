import React, { useState } from 'react'
import { Star } from 'lucide-react'
import BreedModal from './BreedModal'

function PopularBreeds() {
  const [selectedBreed, setSelectedBreed] = useState(null)

  const breeds = [
    {
      name: 'Thoroughbred',
      description: 'Known for their speed and agility, Thoroughbreds are the stars of horse racing. Originating in England, they have a lean, athletic build and a spirited temperament.',
      origin: 'England'
    },
    {
      name: 'Quarter Horse',
      description: 'The most popular breed in the United States, the versatile Quarter Horse excels in various disciplines, from rodeo events to trail riding. They are known for their strong hindquarters and calm demeanor.',
      origin: 'United States'
    },
    {
      name: 'Arabian',
      description: 'One of the oldest horse breeds, the Arabian is a small, elegant horse with a distinctive dished face and high tail carriage. They are known for their endurance and intelligence.',
      origin: 'Middle East'
    },
    {
      name: 'Paint Horse',
      description: 'A colorful breed with a combination of Quarter Horse and Thoroughbred lineage, Paint Horses are admired for their unique coat patterns and versatility in various equestrian activities.',
      origin: 'United States'
    },
    {
      name: 'Appaloosa',
      description: 'Originating from the Nez Perce Native American tribe, Appaloosas are recognized by their spotted coats and striped hooves. They are hardy, intelligent, and versatile horses.',
      origin: 'United States'
    },
    {
      name: 'Warmblood',
      description: 'A group of middle-weight horses known for their athleticism and versatility, Warmbloods excel in dressage, show jumping, and eventing. They originated in Europe.',
      origin: 'Europe'
    },
    {
      name: 'Standardbred',
      description: 'Bred primarily for harness racing, Standardbreds are known for their exceptional trotting and pacing abilities. They are strong, hard-working horses with a friendly disposition.',
      origin: 'United States'
    },
    {
      name: 'Tennessee Walking Horse',
      description: 'A gaited breed known for its smooth, four-beat "running walk," the Tennessee Walking Horse is a comfortable mount for trail and pleasure riding.',
      origin: 'United States'
    },
    {
      name: 'Morgan',
      description: 'One of the oldest American horse breeds, Morgans are compact, versatile, and spirited horses. They excel in various disciplines, from driving and dressage to western riding.',
      origin: 'United States'
    },
    {
      name: 'Friesian',
      description: 'Originating from the Netherlands, Friesians are elegant, powerful horses with striking black coats and long, flowing manes and tails. Known for their graceful movement.',
      origin: 'Netherlands'
    },
    {
      name: 'Miniature Horse',
      description: 'Miniature horses are small but mighty equines, standing no taller than 38 inches. They make great companions and therapy animals.',
      origin: 'Various'
    },
    {
      name: 'Shetland Pony',
      description: 'Originating from the Shetland Islands in Scotland, these hardy, small ponies are known for their strength, resilience, and gentle temperament.',
      origin: 'Scotland'
    },
    {
      name: 'Welsh Pony',
      description: 'Native to Wales, Welsh Ponies come in various sizes and types, making them suitable for riders of all ages. They are known for their versatility and athleticism.',
      origin: 'Wales'
    },
    {
      name: 'Haflinger',
      description: 'Hailing from Austria, Haflingers are small, sturdy horses with a beautiful golden chestnut coat and flaxen mane and tail. Known for endurance and gentle disposition.',
      origin: 'Austria'
    },
    {
      name: 'Andalusian',
      description: 'Also known as the Pure Spanish Horse, the Andalusian is an elegant, powerful breed with a rich history in dressage, bullfighting, and classical riding.',
      origin: 'Spain'
    },
    {
      name: 'American Saddlebred',
      description: 'Known as the "Peacock of the Horse World," the American Saddlebred is a versatile breed with a high-stepping gait and elegant appearance.',
      origin: 'United States'
    },
    {
      name: 'Belgian',
      description: 'One of the largest and strongest draft breeds, the Belgian horse is a gentle giant known for its impressive pulling power and calm disposition.',
      origin: 'Belgium'
    },
    {
      name: 'Clydesdale',
      description: 'Originating in Scotland, the Clydesdale is a tall, powerful draft breed with distinctive feathering on their lower legs. Renowned for strength and grace.',
      origin: 'Scotland'
    },
    {
      name: 'Mustang',
      description: 'Wild horses of the American West, Mustangs are known for their hardiness, intelligence, and free spirit. They descend from horses brought by Spanish explorers.',
      origin: 'United States'
    },
    {
      name: 'Paso Fino',
      description: 'A gaited breed known for its smooth, natural four-beat gait, the Paso Fino is comfortable to ride and excels in trail riding and shows.',
      origin: 'Latin America'
    }
  ]

  return (
    <section id="breeds" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#1a0000] dark:via-[#0a0000] dark:to-[#1a0000]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#ff0000] to-[#cc0000] text-white px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-[0_0_20px_rgba(255,0,0,0.5)] animate-pulse-slow">
            <Star className="w-4 h-4" />
            <span>Featured</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">The 20 Most Popular Horse Breeds</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-700 dark:text-[#ffffff]">
            Each breed has its unique qualities, history, and characteristics. Click on any breed to learn more about it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {breeds.map((breed, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1a0000] dark:to-[#0a0000] rounded-2xl shadow-lg hover:shadow-[0_0_40px_rgba(255,0,0,0.5)] transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-300 dark:border-[#ff0000]/30 hover:border-red-500 dark:hover:border-[#ff0000] transform hover:-translate-y-2 hover:scale-105"
              onClick={() => setSelectedBreed(breed)}
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 dark:from-[#ff0000]/20 dark:to-[#ff0000]/10 rounded-xl flex items-center justify-center mb-4 border border-red-300 dark:border-[#ff0000]/50 group-hover:animate-pulse-slow">
                  <Star className="w-6 h-6 text-[#ff0000] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#ff0000] transition-colors">{breed.name}</h3>
                <p className="text-sm text-[#ff0000] font-medium mb-3 group-hover:text-[#ff3333] transition-colors">Origin: {breed.origin}</p>
                <p className="text-xs text-gray-600 dark:text-[#ffffff]/60 group-hover:text-[#ff0000]/80 transition-colors">Click for details</p>
              </div>
              
              <div className="h-1 bg-gradient-to-r from-[#ff0000] via-[#ff3333] to-[#ff0000] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>
      </div>
      
      <BreedModal breed={selectedBreed} onClose={() => setSelectedBreed(null)} />
    </section>
  )
}

export default PopularBreeds
