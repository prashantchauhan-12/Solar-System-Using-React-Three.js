import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Sun = () => {
    const sunTexture = useLoader(TextureLoader, "/textures/sun.jpg");

    return <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial
            map={sunTexture}
            emissive={0xffffff}
            emissiveMap={sunTexture}
            emissiveIntensity={5}
            toneMapped={false}
        />
    </mesh>
}

export default Sun
