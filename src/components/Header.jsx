import { useState } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Programas', href: '#programas' },
    { name: 'Contacto', href: '#contacto' }
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 shadow-lg border-b border-cyan-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50">
              <span className="text-black font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-cyan-400 animate-glow">SENA</h1>
              <p className="text-sm text-cyan-500">CGMLTI</p>
            </div>
          </motion.div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors hover:shadow-lg hover:shadow-cyan-500/20"
                whileHover={{ scale: 1.1, textShadow: "0 0 8px #00FFFF" }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-cyan-400"></div>
              <div className="w-6 h-0.5 bg-cyan-400"></div>
              <div className="w-6 h-0.5 bg-cyan-400"></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-cyan-500/20 py-4 bg-black/90"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header