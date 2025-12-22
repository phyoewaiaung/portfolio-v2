"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { Suspense, useState } from "react";
import { useGLTF } from "@react-three/drei";

function Model({ url, onError }: { url: string; onError: () => void }) {
  try {
    const { scene } = useGLTF(url);
    return <primitive object={scene} scale={1.5} />;
  } catch (error) {
    onError();
    return null;
  }
}

function FallbackModel() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#10b981" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

export default function Model3DViewer() {
  const [modelError, setModelError] = useState(false);

  const handleModelError = () => {
    setModelError(true);
  };

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Suspense fallback={<FallbackModel />}>
            {!modelError ? (
              <Model url="/models/hero.glb" onError={handleModelError} />
            ) : (
              <FallbackModel />
            )}
          </Suspense>
        </Float>

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={3}
          maxDistance={8}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
