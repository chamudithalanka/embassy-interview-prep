import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} Chamudith Lanka. All rights reserved.</p>
          </div>
          <nav className="flex space-x-4">
            <Link href="/privacy" className="text-sm hover:text-blue-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:text-blue-400 transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm hover:text-blue-400 transition-colors duration-300">
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300">
            <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300">
            <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  )
}