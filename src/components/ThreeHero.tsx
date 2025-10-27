"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, useGLTF } from "@react-three/drei";
import { Suspense, useMemo } from "react";

// function HeroModel() {
//     const { scene } = useGLTF('/models/hero.glb')
//     const cloned = useMemo(() => scene.clone(), [scene])
//     return <primitive object={cloned} />
// }
useGLTF.preload("/models/hero.glb");

export default function ThreeHero() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 1.1, 3], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <Suspense fallback={null}>
          <Float speed={1.3} rotationIntensity={0.35} floatIntensity={0.6}>
            {/* <HeroModel /> */}
          </Float>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
