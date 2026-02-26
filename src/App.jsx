import { Canvas } from "@react-three/fiber"
import Sun from "./components/Sun"
import Planet from "./components/Planet";
import { Stars, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useState, useMemo } from "react";
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import AnimationController from "./components/AnimationController";
import SaturnGroup from "./components/SaturnGroup";
import InfoPanel from "./components/InfoPanel";

const OrbitLine = ({ distance }) => {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(angle) * distance, 0, Math.sin(angle) * distance));
    }
    return pts;
  }, [distance]);

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    // Needed for dashed lines to render dashes based on total length
    geo.computeLineDistances();
    return geo;
  }, [points]);

  return (
    <line geometry={lineGeometry}>
      <lineDashedMaterial
        color="#ffffff"
        transparent
        opacity={0.3}
        dashSize={0.5}
        gapSize={0.5}
      />
    </line>
  );
};

const App = () => {
  const [elapsed, setElapsed] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selected, setSelected] = useState(null);

  const planets = [
    { name: "Mercury", radius: 0.38, distance: 5.8, speed: 47.4, texture: "/textures/mercury.jpg" },
    { name: "Venus", radius: 0.95, distance: 10.8, speed: 35.0, texture: "/textures/venus.jpg" },
    { name: "Earth", radius: 1, distance: 15, speed: 29.8, texture: "/textures/earth.jpg" },
    { name: "Mars", radius: 0.53, distance: 22.8, speed: 24.1, texture: "/textures/mars.jpg" },
    { name: "Jupiter", radius: 11.2, distance: 77.8, speed: 13.1, texture: "/textures/jupiter.jpg" },
    { name: "Uranus", radius: 4, distance: 287.1, speed: 6.8, texture: "/textures/uranus.jpg" },
    { name: "Neptune", radius: 3.88, distance: 449.5, speed: 5.4, texture: "/textures/neptune.jpg" }
  ]

  return (
    <>
      <button style={{
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: '100',
        padding: '12px 20px',
        fontSize: '20px',
        borderRadius: '8px',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
        fontWeight: 'bold',
        background: isPaused ? "#00ff00" : "#ff0000",
      }} onClick={() => setIsPaused(!isPaused)}>
        {isPaused ? "Resume" : "Pause"}
      </button>

      {selected && <InfoPanel planet={selected} onClose={() => setSelected(null)} />}

      {/* We set a very high `far` distance so panning/tilting the camera doesn't cut off stars or orbits */}
      <Canvas camera={{ position: [0, 10, 20], fov: 45, far: 5000 }}>
        <AnimationController isPaused={isPaused} setElapsed={setElapsed} />

        {/* Soft, low intensity ambient light */}
        <ambientLight intensity={0.4} />
        {/* The sun is at the center, casting light outwards */}
        <pointLight position={[0, 0, 0]} intensity={4} distance={1000} decay={0} castShadow />

        {/* Global Post Processing */}
        <EffectComposer disableNormalPass>
          <Bloom
            mipmapBlur
            intensity={2.5} // strength of the bloom
            luminanceThreshold={0.8} // lower threshold so it blooms slightly more
            luminanceSmoothing={1.0}
          />
        </EffectComposer>

        <Sun />

        {planets.map((planet) => (
          <group key={planet.name}>
            <OrbitLine distance={planet.distance} />
            <Planet
              name={planet.name}
              radius={planet.radius}
              distance={planet.distance}
              speed={planet.speed}
              elapsed={elapsed}
              isPaused={isPaused}
              onSelect={setSelected}
            />
          </group>
        ))}

        <group>
          <OrbitLine distance={143.4} />
          <SaturnGroup
            onSelect={setSelected}
            elapsed={elapsed}
            speed={9.7}
            radius={9.45}
            distance={143.4}
            isPaused={isPaused}
          />
        </group>

        {/* Adjust starfield to look more natural and spread out */}
        <Stars radius={300} depth={60} count={5000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          panSpeed={2.5}
          rotateSpeed={1.0}
          zoomSpeed={1.0}
          minDistance={2}
          maxDistance={1000}
          autoRotate={!isPaused}
          autoRotateSpeed={0.4}
          mouseButtons={{
            LEFT: THREE.MOUSE.ROTATE,
            RIGHT: THREE.MOUSE.PAN,
            MIDDLE: THREE.MOUSE.DOLLY,
          }}
          touches={{
            ONE: THREE.TOUCH.PAN,
            TWO: THREE.TOUCH.DOLLY_PAN,
          }}
        />
      </Canvas >
    </>
  )
}


export default App
