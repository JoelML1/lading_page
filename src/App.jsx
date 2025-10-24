import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Programs from './components/Programs'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Scene3D from './components/Scene3D'

function App() {
  return (
    <div className="min-h-screen bg-black text-cyan-400">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Contact />
      <Footer />
      
      {/* Canvas 3D de fondo */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <Canvas>
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default App
