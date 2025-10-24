import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Programs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeCategory, setActiveCategory] = useState('tecnologia')

  const categories = [
    { id: 'tecnologia', name: 'Tecnologías de la Información', icon: '💻' },
    { id: 'logistica', name: 'Logística', icon: '📦' },
    { id: 'mercados', name: 'Gestión de Mercados', icon: '📊' }
  ]

  const programs = {
    tecnologia: [
      {
        title: 'Análisis y Desarrollo de Software',
        level: 'Tecnólogo',
        duration: '2.5 años',
        description: 'Desarrollo de aplicaciones web, móviles y de escritorio usando las últimas tecnologías.',
        skills: ['JavaScript', 'Python', 'React', 'Node.js', 'Bases de Datos'],
        color: 'from-blue-500 to-purple-600'
      },
      {
        title: 'Administración de Redes',
        level: 'Tecnólogo',
        duration: '2 años',
        description: 'Gestión y administración de infraestructura de redes empresariales.',
        skills: ['Cisco', 'Linux', 'Windows Server', 'Seguridad', 'Cloud'],
        color: 'from-green-500 to-blue-600'
      },
      {
        title: 'Sistemas de Información',
        level: 'Técnico',
        duration: '1.5 años',
        description: 'Soporte técnico y mantenimiento de sistemas informáticos.',
        skills: ['Hardware', 'Software', 'Soporte', 'Diagnóstico', 'Reparación'],
        color: 'from-orange-500 to-red-600'
      }
    ],
    logistica: [
      {
        title: 'Gestión Logística',
        level: 'Tecnólogo',
        duration: '2.5 años',
        description: 'Optimización de cadenas de suministro y procesos logísticos.',
        skills: ['Supply Chain', 'Inventarios', 'Transporte', 'Almacenamiento', 'SAP'],
        color: 'from-green-500 to-teal-600'
      },
      {
        title: 'Distribución Física Internacional',
        level: 'Tecnólogo',
        duration: '2 años',
        description: 'Manejo de operaciones de comercio exterior y logística internacional.',
        skills: ['Aduanas', 'Exportación', 'Importación', 'Documentos', 'INCOTERMS'],
        color: 'from-blue-500 to-green-600'
      },
      {
        title: 'Almacenamiento y Bodegaje',
        level: 'Técnico',
        duration: '1 año',
        description: 'Gestión eficiente de almacenes y centros de distribución.',
        skills: ['WMS', 'Picking', 'Inventarios', 'Seguridad', 'Calidad'],
        color: 'from-purple-500 to-pink-600'
      }
    ],
    mercados: [
      {
        title: 'Gestión Empresarial',
        level: 'Tecnólogo',
        duration: '2.5 años',
        description: 'Administración y dirección de empresas con enfoque estratégico.',
        skills: ['Administración', 'Finanzas', 'Marketing', 'RRHH', 'Estrategia'],
        color: 'from-indigo-500 to-purple-600'
      },
      {
        title: 'Mercadeo',
        level: 'Tecnólogo',
        duration: '2 años',
        description: 'Estrategias de mercadeo digital y tradicional.',
        skills: ['Marketing Digital', 'Publicidad', 'Branding', 'Redes Sociales', 'Analytics'],
        color: 'from-pink-500 to-red-600'
      },
      {
        title: 'Ventas y Servicios',
        level: 'Técnico',
        duration: '1 año',
        description: 'Técnicas de ventas y atención al cliente de alta calidad.',
        skills: ['Ventas', 'CRM', 'Servicio al Cliente', 'Negociación', 'Comunicación'],
        color: 'from-yellow-500 to-orange-600'
      }
    ]
  }

  return (
    <section id="programas" className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6 animate-glow">
            Nuestros Programas
          </h2>
          <p className="text-xl text-cyan-300 max-w-3xl mx-auto leading-relaxed">
            Descubre la amplia gama de programas de formación que tenemos para ti. 
            Cada uno diseñado para prepararte para el mundo laboral actual.
          </p>
        </motion.div>

        {/* Categorías */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center mb-12 gap-4"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-600 to-cyan-400 text-black shadow-lg shadow-cyan-500/50'
                  : 'bg-black/50 text-cyan-400 hover:bg-cyan-400/10 shadow border border-cyan-500/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Programas */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs[activeCategory].map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-black/60 backdrop-blur-sm border border-cyan-500/20 rounded-2xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 transition-all overflow-hidden group"
            >
              {/* Header con gradiente */}
              <div className={`bg-gradient-to-r ${program.color} p-6 text-white`}>
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    {program.level}
                  </span>
                  <span className="text-sm opacity-90">{program.duration}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-sm opacity-90">{program.description}</p>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Lo que aprenderás:</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {program.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-600 to-cyan-400 text-black py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all group-hover:scale-105">
                  Más Información
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center bg-black/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 md:p-12 shadow-lg shadow-cyan-500/20"
        >
          <h3 className="text-3xl font-bold text-cyan-400 mb-6 animate-glow">
            ¿Listo para comenzar tu futuro?
          </h3>
          <p className="text-lg text-cyan-300 mb-8 max-w-2xl mx-auto">
            Únete a miles de colombianos que han transformado sus vidas a través 
            de la formación SENA. ¡Tu futuro profesional comienza aquí!
          </p>
          
          {/* Logo del SENA en cian */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50">
              {/* Aquí irá el logo del SENA */}
              <img 
                src="http://www.sena.edu.co/Style%20Library/alayout/images/logoSena.png" 
                alt="Logo SENA" 
                className="w-16 h-16 object-contain filter brightness-0 invert"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)'
                }}
              />
            </div>
          </motion.div>
          
          <div className="flex justify-center">
            <motion.a
              href="https://betowa.sena.edu.co/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 255, 255, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-600 to-cyan-400 text-black px-10 py-4 rounded-full text-xl font-bold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all"
            >
              🚀 Ir a Betowa
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Programs