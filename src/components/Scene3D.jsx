import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Float, Sphere, Box, Torus } from '@react-three/drei'

const FloatingShape = ({ position, color, shape }) => {
  const ref = useRef()
  
  useFrame((state) => {
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5
  })

  const ShapeComponent = {
    sphere: () => <Sphere args={[0.5]} />,
    box: () => <Box args={[1, 1, 1]} />,
    torus: () => <Torus args={[0.8, 0.3, 16, 100]} />
  }[shape]

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={ref} position={position}>
        <ShapeComponent />
        <meshStandardMaterial color={color} transparent opacity={0.7} />
      </mesh>
    </Float>
  )
}

const Scene3D = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -10]} color="#39A935" />
      
      {/* Formas flotantes representando tecnología */}
      <FloatingShape position={[-3, 2, -5]} color="#39A935" shape="sphere" />
      <FloatingShape position={[3, -1, -3]} color="#FF6B35" shape="box" />
      <FloatingShape position={[0, 3, -7]} color="#004A8A" shape="torus" />
      <FloatingShape position={[-2, -2, -4]} color="#39A935" shape="sphere" />
      <FloatingShape position={[4, 1, -6]} color="#FF6B35" shape="torus" />
      
      {/* Partículas de fondo */}
      {Array.from({ length: 20 }).map((_, i) => (
        <FloatingShape
          key={i}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20 - 10
          ]}
          color={`hsl(${Math.random() * 360}, 70%, 50%)`}
          shape={['sphere', 'box', 'torus'][Math.floor(Math.random() * 3)]}
        />
      ))}
    </>
  )
}

export default Scene3D