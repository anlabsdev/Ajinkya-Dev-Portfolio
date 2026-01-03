import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { DeadpoolDancing } from '../models/deadpool_dancing'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { motion } from 'framer-motion'

const ModelAnimation = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <spotLight 
        position={[5, 5, 5]} 
        angle={0.15} 
        penumbra={1} 
        intensity={1.5}
        color="#ff0000"
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <DeadpoolDancing 
        position={[0, -2.5, 0]} 
        scale={1.5}
        rotation={[0, 0, 0]}
      />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        autoRotate={false}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  )
}

const ThankYou = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-black to-purple-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 2,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* 3D Model Container */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          shadows
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            <ModelAnimation />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <motion.h1 
            className="text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Thank You!
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl max-w-2xl mx-auto text-gray-200 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Your message has been received. I'll get back to you as soon as possible.
          </motion.p>
        </motion.div>

        {/* Beat Visualizer */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex gap-3 items-end">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-12 bg-gradient-to-t from-red-500 to-purple-500 rounded-full"
              animate={{
                height: [12, 48, 12],
                opacity: [0.5, 1, 0.5],
                y: [0, -5, 0]
              }}
              transition={{
                duration: 1.2,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ThankYou
