'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPassport, faCity, faCloudSun } from '@fortawesome/free-solid-svg-icons'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const toolCards = [
  { href: '/embassy-prep', title: 'Embassy Preparation', description: 'View Q&A for embassy interviews', icon: faPassport },
  { href: '/city-details', title: 'City Details', description: 'Explore information about Romanian cities', icon: faCity },
  { href: '/weather-forecast', title: 'Weather Forecast', description: 'Check weather predictions for Romanian cities', icon: faCloudSun },
]

export default function ToolsPage() {
  return (
    <div className="min-h-[calc(100vh-64px-80px)] bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Embassy Interview Preparation Tools
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {toolCards.map((card, index) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={card.href}>
                <Card className="h-full transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl text-blue-600">
                      <FontAwesomeIcon icon={card.icon} className="mr-2" />
                      {card.title}
                    </CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}