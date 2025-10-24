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
    <section id="nosotros" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6 animate-glow">
            ¿Quiénes somos?
          </h2>
          <p className="text-xl text-cyan-300 max-w-3xl mx-auto leading-relaxed">
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
            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              Nuestra Misión
            </h3>
            <p className="text-lg text-cyan-200 mb-8 leading-relaxed">
              Formar ciudadanos libres, pensantes, con sentido crítico, solidarios y 
              emprendedores, que contribuyan al desarrollo tecnológico, económico y 
              social del país, a través de un proceso de Formación Profesional Integral.
            </p>
            
            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              Nuestra Visión
            </h3>
            <p className="text-lg text-cyan-200 leading-relaxed">
              En el 2030, el SENA será una entidad de clase mundial en formación 
              profesional integral y en el uso y apropiación de tecnología e innovación 
              al servicio de personas y empresas.
            </p>
          </motion.div>

          {/* Logo del SENA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <motion.div 
              className="w-80 h-80 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-full shadow-2xl shadow-cyan-500/50 flex items-center justify-center"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <motion.img 
                src="http://www.sena.edu.co/Style%20Library/alayout/images/logoSena.png" 
                alt="Logo SENA" 
                className="w-48 h-48 object-contain filter brightness-0 invert"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)'
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            {/* Partículas flotantes alrededor del logo */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-cyan-400 rounded-full opacity-60"
                style={{
                  left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 8)}%`,
                  top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 8)}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
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
              className="text-center p-6 bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-cyan-400 mb-3">{feature.title}</h4>
              <p className="text-cyan-200 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Números impactantes */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-2xl p-8 md:p-12 text-black shadow-lg shadow-cyan-500/50"
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