import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { ShimmerButton } from "./magicui/shimmer-button";
import { AuroraText } from "./magicui/aurora-text";
import { TextAnimate } from "./magicui/text-animate";

// Configuration constants
const MIN_RADIUS = 7.5;
const MAX_RADIUS = 15;
const DEPTH = 2;
const LEFT_COLOR = "0a0a0a";
const RIGHT_COLOR = "ffffff";
const NUM_POINTS = 2500;

// Utility functions
const getGradientStop = (ratio: number): string => {
  ratio = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio;

  const c0 = LEFT_COLOR.match(/.{1,2}/g)!.map(
    (oct) => parseInt(oct, 16) * (1 - ratio)
  );
  const c1 = RIGHT_COLOR.match(/.{1,2}/g)!.map(
    (oct) => parseInt(oct, 16) * ratio
  );
  const ci = [0, 1, 2].map((i) => Math.min(Math.round(c0[i] + c1[i]), 255));
  const color = ci
    .reduce((a, v) => (a << 8) + v, 0)
    .toString(16)
    .padStart(6, "0");

  return `#${color}`;
};

const calculateColor = (x: number): string => {
  const maxDiff = MAX_RADIUS * 2;
  const distance = x + MAX_RADIUS;
  const ratio = distance / maxDiff;
  return getGradientStop(ratio);
};

const randomFromInterval = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

// Point interface
interface Point {
  idx: number;
  position: [number, number, number];
  color: string;
}

// Point component
const Point: React.FC<{ position: [number, number, number]; color: string }> = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.05, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

// PointCircle component
const PointCircle: React.FC<{ pointsInner: Point[]; pointsOuter: Point[] }> = ({ pointsInner, pointsOuter }) => {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={`outer-${point.idx}`} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

// Main ParticleRingHero component
const ParticleRingHero: React.FC = () => {
  // Generate points once using useMemo for performance
  const { pointsInner, pointsOuter } = useMemo(() => {
    const inner: Point[] = Array.from({ length: NUM_POINTS }, (_, k) => k + 1).map((num) => {
      const randomRadius = randomFromInterval(MIN_RADIUS, MAX_RADIUS);
      const randomAngle = Math.random() * Math.PI * 2;

      const x = Math.cos(randomAngle) * randomRadius;
      const y = Math.sin(randomAngle) * randomRadius;
      const z = randomFromInterval(-DEPTH, DEPTH);

      return {
        idx: num,
        position: [x, y, z] as [number, number, number],
        color: calculateColor(x),
      };
    });

    const outer: Point[] = Array.from({ length: NUM_POINTS / 4 }, (_, k) => k + 1).map((num) => {
      const randomRadius = randomFromInterval(MIN_RADIUS / 2, MAX_RADIUS * 2);
      const angle = Math.random() * Math.PI * 2;

      const x = Math.cos(angle) * randomRadius;
      const y = Math.sin(angle) * randomRadius;
      const z = randomFromInterval(-DEPTH * 10, DEPTH * 10);

      return {
        idx: num,
        position: [x, y, z] as [number, number, number],
        color: calculateColor(x),
      };
    });

    return { pointsInner: inner, pointsOuter: outer };
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Three.js Canvas Background */}
      <Canvas
        camera={{
          position: [10, -7.5, -16],
        }}
        style={{ height: "100vh" }}
        className="bg-gray-950"
      >
        <OrbitControls 
          maxDistance={20} 
          minDistance={10} 
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
        />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle pointsInner={pointsInner} pointsOuter={pointsOuter} />
      </Canvas>

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl mb-2 md:text-6xl lg:text-7xl font-bold text-slate-100 leading-tight">
            Turn your <AuroraText colors={['#1e3a8a', '#3b82f6', '#fb923c', '#ea580c']}>Data</AuroraText> into <AuroraText colors={['#1e3a8a', '#3b82f6', '#fb923c', '#ea580c']}>Business</AuroraText> Value
          </h1>
          <TextAnimate 
            className="text-white max-w-5xl mb-2 mx-auto leading-relaxed"
            by="word"
            animation="fadeIn"
            delay={0.5}
          >
            Turning Data into Business Value. Join hands with the experts at Tech. Create whatever you think of with care and precision. Join hands with the experts at Tech. Create whatever you think of with care and precision.
          </TextAnimate>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto">
            <InteractiveHoverButton 
              className="text-black"
              onClick={() => {
                window.location.href = "/services";
              }}
            >
              Explore Services
            </InteractiveHoverButton>
            <ShimmerButton
              onClick={() => {
                window.location.href = "/#contact";
              }}
            >
              Reach out
            </ShimmerButton>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ParticleRingHero;