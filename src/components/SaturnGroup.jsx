import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

const SaturnGroup = ({ onSelect, elapsed, isPaused, radius, distance, speed }) => {
    const saturnTexture = useLoader(TextureLoader, "/textures/saturn.jpg");
    const ringTexture = useLoader(TextureLoader, "/textures/saturn_ring.png");

    const groupRef = useRef(null);
    const angleRef = useRef(Math.random() * Math.PI * 2);

    useFrame((state, delta) => {
        if (isPaused) return;

        groupRef.current.rotation.y += delta * 0.2;

        const angle = elapsed * speed * 0.01;
        groupRef.current.position.x = Math.cos(angle) * distance;
        groupRef.current.position.z = Math.sin(angle) * distance;

    })

    return (
        <group ref={groupRef}>
            <mesh onClick={(e) => {
                e.stopPropagation();
                onSelect("Saturn");
            }}>
                <sphereGeometry args={[radius, 32, 32]} />
                <meshStandardMaterial map={saturnTexture} />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[radius * 1.2, radius * 2.2, 64]} />
                <meshStandardMaterial
                    map={ringTexture}
                    side={THREE.DoubleSide}
                    transparent
                />
            </mesh>
        </group>
    )
}

export default SaturnGroup;