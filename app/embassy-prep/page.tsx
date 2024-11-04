'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// This is a mock data structure. You would replace this with actual data from your PDF files.
const qaData = [
  { question: "What is the purpose of your visit to Romania?", answer: "I am visiting Romania for tourism and to explore its rich cultural heritage." },
  { question: "How long do you plan to stay in Romania?", answer: "I plan to stay in Romania for two weeks." },
  { question: "Do you have any relatives or friends in Romania?", answer: "No, I don't have any relatives or friends in Romania. This is purely a tourist visit." },
  { question: "What places do you plan to visit in Romania?", answer: "I plan to visit Bucharest, Brasov, and the Transylvania region, including Bran Castle and Peles Castle." },
  { question: "Can you show proof of sufficient funds for your stay?", answer: "Yes, I have brought bank statements and traveler's checks to demonstrate that I have sufficient funds for my stay in Romania." },
]

export default function EmbassyPrepPage() {
  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
        Embassy Interview Preparation
      </motion.h1>
      <Accordion type="single" collapsible className="w-full">
        {qaData.map((qa, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <AccordionItem value={`item-${index}`} className="bg-white rounded-lg mb-4 overflow-hidden">
              <AccordionTrigger className="px-4 py-2 hover:bg-gray-100 transition-colors duration-300">
                <span className="flex items-center text-lg text-blue-600">
                  <FontAwesomeIcon icon={faAngleDown} className="mr-2 transition-transform duration-300" />
                  {qa.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2 bg-gray-50">
                <p className="text-gray-700">{qa.answer}</p>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  )
}