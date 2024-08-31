import { Canvas } from '@react-three/fiber'
import React from 'react'
import './style.css'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import { MacContainer } from './component/macContainer/macContainer'

const menus = [
  'Store',
  'Mac',
  'Iphone',
  'Ipad',
  'Watch',
  'AirPods',
  'Tv',
  'Entertainment',
  'Accessories',
  'Support',
]

const App = () => {
  return (
    <div className="w-full h-screen font-['SF Pro Display']">
      <div className="navbar line flex gap-10 pt-4 pb-3 absolute top-0 left-1/2 -translate-x-1/2">
        {menus.map((menu, i) => (
          <a
            href=""
            className="text-white font-[400] text-sm capitalize hover:cursor-pointer"
            key={i}
          >
            {menu}
          </a>
        ))}
      </div>
      <div className="absolute flex flex-col items-center text-white top-16 left-1/2 -translate-x-1/2">
        <h3 className="masked text-7xl tracking-tighter font-[700]">
          MacBook Pro
        </h3>
        <h5 className="my-4 text-lg font-bold">Mind-blowing. Head-turning.</h5>
        <p className="text-center text-sm w-3/5 font-normal">
          Unleash creativity like never before with the new MacBook Pro.
          Experience groundbreaking speed, stunning visuals, and immersive power
          that redefine what's possible in a laptop.
        </p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
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
