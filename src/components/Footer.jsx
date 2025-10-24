import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Programas': [
      'Tecnologías de la Información',
      'Logística',
      'Gestión de Mercados',
      'Todos los Programas'
    ],
    'Servicios': [
      'Formación Complementaria',
      'Emprendimiento',
      'Empleabilidad',
      'Bienestar al Aprendiz'
    ],
    'Información': [
      'Admisiones',
      'Calendario Académico',
      'Biblioteca',
      'Campus Virtual'
    ],
    'Enlaces': [
      'SENA Nacional',
      'SENA Sophia',
      'Oferta Educativa',
      'Territorium'
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Contenido principal del footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-sena-green to-sena-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">SENA CGMLTI</h3>
                <p className="text-gray-400 text-sm">Formación para la vida</p>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 leading-relaxed mb-6"
            >
              Centro de Gestión de Mercados, Logística y Tecnologías de la Información. 
              Comprometidos con la formación integral de nuestros aprendices y el 
              desarrollo del país.
            </motion.p>

            {/* Redes sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {[
                { name: 'Facebook', icon: '📘' },
                { name: 'Instagram', icon: '📷' },
                { name: 'YouTube', icon: '📺' },
                { name: 'LinkedIn', icon: '💼' }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-sena-green transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Links de navegación */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (categoryIndex + 1) }}
            >
              <h4 className="text-lg font-semibold mb-4 text-sena-green">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold mb-2">Mantente Actualizado</h4>
              <p className="text-gray-400">
                Recibe las últimas noticias sobre convocatorias, eventos y programas de formación.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sena-green"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-sena-green to-sena-blue text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Suscribirse
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="text-gray-400 text-sm">
              © {currentYear} SENA - Centro de Gestión de Mercados, Logística y Tecnologías de la Información. 
              Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <motion.a
                href="#"
                whileHover={{ color: '#39A935' }}
                className="text-gray-400 hover:text-sena-green transition-colors"
              >
                Términos y Condiciones
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#39A935' }}
                className="text-gray-400 hover:text-sena-green transition-colors"
              >
                Política de Privacidad
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#39A935' }}
                className="text-gray-400 hover:text-sena-green transition-colors"
              >
                Cookies
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de fin de página */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-1 bg-gradient-to-r from-sena-green via-sena-orange to-sena-blue"
      ></motion.div>
    </footer>
  )
}

export default Footer