import { Canvas } from '@react-three/fiber'
import React from 'react'
import './style.css'
import { Environment, ScrollControls } from '@react-three/drei'
import { MacContainer } from './component/macContainer/macContainer'
import Navbar from './component/navbar/navbar'

const App = () => {
  return (
    <div className="w-full h-screen font-['SF Pro Display']">
      <Navbar />
      <div className="absolute flex flex-col items-center text-white top-24 lg:top-16  lg:left-1/2 lg:-translate-x-1/2">
        <h3 className="masked lg:text-7xl text-4xl tracking-tighter font-[700]">
          MacBook Pro
        </h3>
        <h5 className="my-4 text-lg font-bold">Mind-blowing. Head-turning.</h5>
        <p className="text-center text-sm w-1/2 md:w-2/5 lg:w-3/5 font-normal">
          Unleash creativity like never before with the new MacBook Pro.
          Experience groundbreaking speed, stunning visuals, and immersive power
          that redefine what's possible in a laptop.
        </p>
      </div>
      <Canvas 
      camera={{ fov: 12, position: [0, -10, 220] }}
      >
        <Environment
          files={[
            'https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/2k/studio_small_09_2k.exr',
          ]}
        />
        <ScrollControls>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App
