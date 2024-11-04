'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faUser } from '@fortawesome/free-solid-svg-icons'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

export default function Home() {
  const [name, setName] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      toast({
        title: `Hello ${name}!`,
        description: "Welcome to the Embassy Interview Preparation Tool.",
      })
      router.push('/tools')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px-80px)] bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-8 bg-white rounded-lg shadow-lg w-full max-w-md"
      >
        <motion.h1 
          className="text-3xl font-bold mb-6 text-center text-gray-800"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
        >
          <FontAwesomeIcon icon={faPlane} className="mr-2" />
          Embassy Interview Prep
        </motion.h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Enter your name
            </label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Enter
          </Button>
        </form>
      </motion.div>
    </div>
  )
}