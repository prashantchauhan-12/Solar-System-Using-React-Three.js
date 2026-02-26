import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const AnimationController = ({ isPaused, setElapsed }) => {

    useFrame((state, delta) => {
        if (!isPaused) {
            setElapsed(prev => prev + delta);
        }
    })

    return null;
}

export default AnimationController;