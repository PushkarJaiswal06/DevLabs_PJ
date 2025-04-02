import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const BuzzworthyModel = () => {
  const groupRef = useRef();

  useFrame((state) => {
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.1) * 0.1;
  });

  return (
    <Float
      speed={0.8}
      rotationIntensity={0.3}
      floatIntensity={0.3}
    >
      <group ref={groupRef}>
        {/* Main geometric shapes */}
        <mesh position={[0, 0, 0]}>
          <dodecahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Decorative elements */}
        <mesh position={[2, 1, 0]}>
          <torusGeometry args={[0.8, 0.2, 16, 100]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.4}
          />
        </mesh>

        <mesh position={[-2, -1, 0]}>
          <octahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.4}
          />
        </mesh>

        {/* Floating particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <mesh
            key={i}
            position={[
              (Math.random() - 0.5) * 6,
              (Math.random() - 0.5) * 6,
              (Math.random() - 0.5) * 6,
            ]}
          >
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshStandardMaterial
              color="#ffffff"
              metalness={0.9}
              roughness={0.1}
              transparent
              opacity={0.3}
            />
          </mesh>
        ))}

        {/* Ambient light effects */}
        <mesh position={[0, 0, -2]}>
          <planeGeometry args={[10, 10]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.03}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </Float>
  );
};

export default BuzzworthyModel; 