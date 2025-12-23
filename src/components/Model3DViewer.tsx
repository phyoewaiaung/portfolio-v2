"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Model({ url, onError }: { url: string; onError: () => void }) {
  const gltf = useGLTF(url);

  if (!gltf) {
    console.log("Model still loading...");
    return null;
  }

  console.log("Model loaded successfully:", gltf);
  return <primitive object={gltf.scene} scale={3.5} />;
}

function ProfileImage() {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      "/images/profile.png",
      (loadedTexture) => {
        console.log("Profile image loaded successfully");
        setTexture(loadedTexture);
      },
      undefined,
      (error) => {
        console.error("Error loading profile image:", error);
      },
    );
  }, []);

  if (!texture) {
    return null;
  }

  return (
    <mesh scale={3.5}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} transparent={true} />
    </mesh>
  );
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
  const [useImage, setUseImage] = useState(true);

  const handleModelError = () => {
    console.error("Model loading error occurred");
    setModelError(true);
  };

  useEffect(() => {
    console.log("Model3DViewer mounted, attempting to load /models/hero.glb");
  }, []);

  return (
    <div className="w-full h-full relative">
      {/* Toggle button */}
      <button
        onClick={() => setUseImage(!useImage)}
        className="absolute top-4 right-4 z-10 px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 rounded-lg text-xs text-emerald-300 hover:bg-emerald-500/30 transition-colors"
      >
        {useImage ? "3D Model" : "Image"}
      </button>

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
              useImage ? (
                <ProfileImage />
              ) : (
                <Model url="/models/hero.glb" onError={handleModelError} />
              )
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
