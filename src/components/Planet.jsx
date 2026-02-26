import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';

const Planet = ({ name, radius, distance, speed, isPaused, onSelect }) => {
    const texture = useLoader(TextureLoader, `/textures/${name.toLowerCase()}.jpg`);

    const meshRef = useRef(null);
    const angleRef = useRef(Math.random() * Math.PI * 2);

    useFrame((state, delta) => {
        if (isPaused) return;

        meshRef.current.rotation.y += delta * 0.2;

        angleRef.current += delta * speed * 0.01;
        const angle = angleRef.current;
        meshRef.current.position.x = Math.cos(angle) * distance;
        meshRef.current.position.z = Math.sin(angle) * distance;

    })

    return <mesh
        ref={meshRef}
        position={[distance, 0, 0]}
        onClick={(e) => {
            e.stopPropagation();
            onSelect && onSelect(name);
        }}
    >
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial map={texture} />
    </mesh>
}

export default Planet;