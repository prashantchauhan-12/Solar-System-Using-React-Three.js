# Interactive Solar System Simulation

A beautiful, interactive 3D solar system simulation built with React, Three.js, and React Three Fiber.

## Features Currently Implemented
- **3D Solar System:** Rendered with true-to-life planetary textures using `@react-three/fiber`.
- **Dynamic Physics:** Planets orbit the Sun and rotate on their axes at scaled speeds.
- **Interactive UI:** Click on any planet to open an informational panel with facts about the planet.
- **Lighting & Bloom:** Realistic lighting emitting from the Sun, enhanced with post-processing Bloom effects.
- **Saturn's Rings:** Custom Saturn component with a scaled ring geometry.
- **Camera Controls:** Pan, zoom, and rotate the solar system using OrbitControls.


## Running Locally

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`.

## Technologies Used
- React (`react`, `react-dom`)
- Vite
- Three.js (`three`)
- React Three Fiber (`@react-three/fiber`)
- React Three Drei (`@react-three/drei`)
- React Three Postprocessing (`@react-three/postprocessing`)
