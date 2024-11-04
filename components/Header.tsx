'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faHome, faPassport, faCity, faCloudSun } from '@fortawesome/free-solid-svg-icons'

const navItems = [
  { href: '/', label: 'Home', icon: faHome },
  { href: '/embassy-prep', label: 'Embassy Prep', icon: faPassport },
  { href: '/city-details', label: 'City Details', icon: faCity },
  { href: '/weather-forecast', label: 'Weather', icon: faCloudSun },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Embassy Guide
        </Link>
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={item.icon} className="mr-2" />
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden text-gray-600 hover:text-blue-600 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
        </button>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon={item.icon} className="mr-2" />
              {item.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </header>
  )
}