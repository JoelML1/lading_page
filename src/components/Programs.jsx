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
    <section id="programas" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Programas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                  ? 'bg-gradient-to-r from-sena-green to-sena-blue text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
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
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
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
                <h4 className="font-semibold text-gray-900 mb-3">Lo que aprenderás:</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {program.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-sena-green to-sena-blue text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all group-hover:scale-105">
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
          className="mt-20 text-center bg-white rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            ¿Listo para comenzar tu futuro?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Únete a miles de colombianos que han transformado sus vidas a través 
            de la formación SENA. ¡Tu futuro profesional comienza aquí!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-sena-green to-sena-blue text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Inscribirse Ahora
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-sena-blue text-sena-blue px-8 py-4 rounded-full text-lg font-semibold hover:bg-sena-blue hover:text-white transition-all"
            >
              Descargar Información
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Programs