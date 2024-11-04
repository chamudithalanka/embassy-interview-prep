'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from 'next/image'

// Mock data for cities. Replace with actual data.
const cities = [
  { 
    name: 'Bucharest', 
    description: 'The capital and largest city of Romania, known for its wide, tree-lined boulevards and Belle Époque buildings.', 
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600'
    ]
  },
  { 
    name: 'Cluj-Napoca', 
    description: 'Often called the unofficial capital of Transylvania, known for its universities and vibrant cultural scene.', 
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600'
    ]
  },
  { 
    name: 'Timisoara', 
    description: 'A multicultural city in western Romania, known for its beautiful squares and parks.', 
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600'
    ]
  },
]

export default function CityDetailsPage() {
  const [selectedCity, setSelectedCity] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FontAwesomeIcon icon={faCity} className="mr-2" />
        City Details
      </motion.h1>
      <div className="mb-8">
        <Select onValueChange={(value) => setSelectedCity(cities.find(city => city.name === value))}>
          <SelectTrigger className="w-full md:w-[300px] bg-white">
            <SelectValue placeholder="Select a city" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city, index) => (
              <SelectItem key={index} value={city.name}>{city.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {selectedCity && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg p-6 shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
            {selectedCity.name}
          </h2>
          <p className="mb-6 text-gray-700">{selectedCity.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {selectedCity.images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <Image 
                  src={src} 
                  alt={`${selectedCity.name} image ${index + 1}`} 
                  width={600} 
                  height={400} 
                  className="rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300 object-cover w-full h-48" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faInfoCircle} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Image
                src={selectedImage}
                alt="Full-size image"
                width={1200}
                height={800}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={() => setSelectedImage(null)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}