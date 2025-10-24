import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import HeroScene3D from './HeroScene3D'

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Fondo 3D */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <HeroScene3D />
          </Suspense>
        </Canvas>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-cyan-400 mb-6 animate-glow"
            style={{
              textShadow: '0 0 20px #00FFFF, 0 0 40px #00FFFF, 0 0 60px #00FFFF'
            }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              SENA CGMLTI
            </span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-cyan-300 mb-8 font-light"
            style={{
              textShadow: '0 0 10px #00DDDD'
            }}
          >
            Centro de Gestión de Mercados, Logística y Tecnologías de la Información
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-cyan-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Forma tu futuro con nosotros. Explora nuestros programas de formación en tecnología, 
            logística y gestión de mercados. Donde la innovación encuentra la oportunidad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#programas"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 255, 255, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-600 to-cyan-400 text-black px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all cursor-pointer inline-block"
            >
              Explorar Programas
            </motion.a>
            
            <motion.a
              href="https://betowa.sena.edu.co/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all cursor-pointer inline-block"
            >
              Ir a Betowa
            </motion.a>
          </motion.div>

          {/* Estadísticas */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2"
                style={{
                  textShadow: '0 0 15px #00FFFF'
                }}
              >
                50+
              </motion.div>
              <p className="text-cyan-300 text-lg">Programas de Formación</p>
            </div>
            
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2"
                style={{
                  textShadow: '0 0 15px #00FFFF'
                }}
              >
                10,000+
              </motion.div>
              <p className="text-cyan-300 text-lg">Estudiantes Graduados</p>
            </div>
            
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2"
                style={{
                  textShadow: '0 0 15px #00FFFF'
                }}
              >
                95%
              </motion.div>
              <p className="text-cyan-300 text-lg">Tasa de Empleabilidad</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center shadow-lg shadow-cyan-500/50"
        >
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero