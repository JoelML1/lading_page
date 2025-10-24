import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: "💻",
      title: "Tecnología de Vanguardia",
      description: "Aprende con las últimas tecnologías y herramientas del mercado laboral actual."
    },
    {
      icon: "📦",
      title: "Logística Moderna",
      description: "Domina los procesos logísticos y de cadena de suministro más avanzados."
    },
    {
      icon: "📊",
      title: "Gestión de Mercados",
      description: "Desarrolla habilidades en análisis de mercados y estrategias comerciales."
    },
    {
      icon: "🏆",
      title: "Certificación SENA",
      description: "Obtén certificaciones reconocidas a nivel nacional e internacional."
    }
  ]

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Quiénes somos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            El Centro de Gestión de Mercados, Logística y Tecnologías de la Información 
            es una institución líder en formación técnica y tecnológica, comprometida 
            con el desarrollo integral de nuestros aprendices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Contenido textual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Nuestra Misión
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Formar ciudadanos libres, pensantes, con sentido crítico, solidarios y 
              emprendedores, que contribuyan al desarrollo tecnológico, económico y 
              social del país, a través de un proceso de Formación Profesional Integral.
            </p>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Nuestra Visión
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              En el 2030, el SENA será una entidad de clase mundial en formación 
              profesional integral y en el uso y apropiación de tecnología e innovación 
              al servicio de personas y empresas.
            </p>
          </motion.div>

          {/* Video/Imagen placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-video bg-gradient-to-br from-sena-blue to-sena-green rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-lg font-semibold">Ver video institucional</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Características */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Números impactantes */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 bg-gradient-to-r from-sena-green to-sena-blue rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">117</div>
              <p className="text-lg opacity-90">Centros de Formación</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">900+</div>
              <p className="text-lg opacity-90">Programas de Formación</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">9M+</div>
              <p className="text-lg opacity-90">Colombianos Beneficiados</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">60+</div>
              <p className="text-lg opacity-90">Años de Experiencia</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About