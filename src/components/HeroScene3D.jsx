import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Float, Sphere, Box, Torus, Cylinder } from '@react-three/drei'

const TechShape = ({ position, shape, color, speed = 1 }) => {
  const ref = useRef()
  
  useFrame((state) => {
    ref.current.rotation.x += 0.01 * speed
    ref.current.rotation.y += 0.01 * speed
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3
  })

  const shapes = {
    laptop: () => (
      <group>
        <Box args={[1.5, 0.1, 1]} position={[0, 0, 0]} />
        <Box args={[1.5, 1, 0.1]} position={[0, 0.5, -0.5]} />
      </group>
    ),
    server: () => (
      <group>
        <Box args={[1, 2, 0.8]} />
        <Cylinder args={[0.1, 0.1, 0.2]} position={[0.3, 0.5, 0.5]} />
        <Cylinder args={[0.1, 0.1, 0.2]} position={[-0.3, 0.5, 0.5]} />
      </group>
    ),
    network: () => (
      <group>
        <Sphere args={[0.2]} position={[0, 0, 0]} />
        <Sphere args={[0.15]} position={[1, 0.5, 0]} />
        <Sphere args={[0.15]} position={[-1, -0.5, 0]} />
        <Sphere args={[0.15]} position={[0, 1, 0.5]} />
        <Cylinder args={[0.02, 0.02, 1]} rotation={[0, 0, Math.PI/4]} position={[0.5, 0.25, 0]} />
        <Cylinder args={[0.02, 0.02, 1]} rotation={[0, 0, -Math.PI/4]} position={[-0.5, -0.25, 0]} />
      </group>
    ),
    logistics: () => (
      <group>
        <Box args={[1.5, 0.8, 0.8]} />
        <Cylinder args={[0.3, 0.3, 0.1]} position={[-0.5, -0.5, 0]} />
        <Cylinder args={[0.3, 0.3, 0.1]} position={[0.5, -0.5, 0]} />
      </group>
    )
  }

  const ShapeComponent = shapes[shape] || (() => <Box args={[1, 1, 1]} />)

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.2}>
      <mesh ref={ref} position={position}>
        <ShapeComponent />
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </mesh>
    </Float>
  )
}

const HeroScene3D = () => {
  return (
    <>
      {/* Iluminación */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, 5, 5]} color="#00FFFF" intensity={0.8} />
      <pointLight position={[5, -5, 5]} color="#00DDDD" intensity={0.6} />

      {/* Elementos tecnológicos flotantes */}
      <TechShape position={[-4, 2, -2]} shape="laptop" color="#00FFFF" speed={0.8} />
      <TechShape position={[4, -1, -3]} shape="server" color="#00DDDD" speed={1.2} />
      <TechShape position={[0, 3, -5]} shape="network" color="#00CCCC" speed={0.6} />
      <TechShape position={[-3, -2, -4]} shape="logistics" color="#00FFFF" speed={1.0} />
      
      {/* Elementos adicionales para crear profundidad */}
      <TechShape position={[6, 1, -6]} shape="laptop" color="#00DDDD" speed={0.9} />
      <TechShape position={[-6, -1, -7]} shape="network" color="#00CCCC" speed={0.7} />
      
      {/* Partículas de datos */}
      {Array.from({ length: 30 }).map((_, i) => (
        <Float key={i} speed={Math.random() * 2 + 0.5}>
          <mesh
            position={[
              (Math.random() - 0.5) * 25,
              (Math.random() - 0.5) * 15,
              (Math.random() - 0.5) * 10 - 5
            ]}
          >
            <Sphere args={[0.05]} />
            <meshStandardMaterial 
              color={['#00FFFF', '#00DDDD', '#00CCCC', '#00AAAA'][Math.floor(Math.random() * 4)]} 
              transparent 
              opacity={0.8}
              emissive={['#00FFFF', '#00DDDD', '#00CCCC'][Math.floor(Math.random() * 3)]}
              emissiveIntensity={0.3}
            />
          </mesh>
        </Float>
      ))}

      {/* Texto flotante 3D */}
      <Float speed={0.5} rotationIntensity={0.1}>
        <Text
          position={[0, -3, -8]}
          fontSize={0.8}
          color="#00FFFF"
          anchorX="center"
          anchorY="middle"
          transparent
          opacity={0.6}
        >
          INNOVACIÓN
        </Text>
      </Float>
      
      <Float speed={0.7} rotationIntensity={0.1}>
        <Text
          position={[-5, 1, -10]}
          fontSize={0.6}
          color="#00DDDD"
          anchorX="center"
          anchorY="middle"
          transparent
          opacity={0.7}
        >
          TECNOLOGÍA
        </Text>
      </Float>
      
      <Float speed={0.6} rotationIntensity={0.1}>
        <Text
          position={[5, -2, -9]}
          fontSize={0.6}
          color="#00CCCC"
          anchorX="center"
          anchorY="middle"
          transparent
          opacity={0.7}
        >
          LOGÍSTICA
        </Text>
      </Float>
    </>
  )
}

export default HeroScene3D