import React from "react";
const InfoPanel = ({ planet, onClose }) => {
    const info = {
        Mercury: {
            description: "Mercury is the closest planet to the Sun and has extreme temperature variations.",
            name: "Mercury",
            radius: "2,439.7 km",
            distance: "57.9 million km",
            speed: "47.4 km/s",
            texture: "/textures/mercury.jpg"
        },
        Venus: {
            description: "Venus has a thick, toxic atmosphere that traps heat, making it the hottest planet in our solar system.",
            name: "Venus",
            radius: "6,051.8 km",
            distance: "108.2 million km",
            speed: "35.0 km/s",
            texture: "/textures/venus.jpg"
        },
        Earth: {
            description: "Earth is the only known planet to harbor life, with vast oceans of liquid water.",
            name: "Earth",
            radius: "6,371 km",
            distance: "149.6 million km",
            speed: "29.8 km/s",
            texture: "/textures/earth.jpg"
        },
        Mars: {
            description: "Mars is a dusty, cold, desert world with a very thin atmosphere, known as the Red Planet.",
            name: "Mars",
            radius: "3,389.5 km",
            distance: "227.9 million km",
            speed: "24.1 km/s",
            texture: "/textures/mars.jpg"
        },
        Jupiter: {
            description: "Jupiter is a gas giant and the largest planet in our solar system, with a Great Red Spot.",
            name: "Jupiter",
            radius: "69,911 km",
            distance: "778.5 million km",
            speed: "13.1 km/s",
            texture: "/textures/jupiter.jpg"
        },
        Saturn: {
            description: "Saturn is a gas giant with a stunning, complex system of icy rings.",
            name: "Saturn",
            radius: "58,232 km",
            distance: "1.43 billion km",
            speed: "9.7 km/s",
            texture: "/textures/saturn.jpg"
        },
        Uranus: {
            description: "Uranus is an ice giant that rotates on its side, making it highly unique.",
            name: "Uranus",
            radius: "25,362 km",
            distance: "2.87 billion km",
            speed: "6.8 km/s",
            texture: "/textures/uranus.jpg"
        },
        Neptune: {
            description: "Neptune is dark, cold, and whipped by supersonic winds, making it the windiest planet.",
            name: "Neptune",
            radius: "24,622 km",
            distance: "4.5 billion km",
            speed: "5.4 km/s",
            texture: "/textures/neptune.jpg"
        }
    }

    return <div style={{
        position: "absolute",
        bottom: 30,
        left: 30,
        zIndex: 100
    }}>
        <div style={{
            background: "rgba(0,0,0,0.7)",
            padding: "20px",
            borderRadius: "10px",
            color: "white",
            width: "300px",
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
            }}>
                <h2 style={{ margin: 0 }}>{info[planet].name}</h2>
                <button onClick={onClose} style={{
                    background: "transparent",
                    border: "none",
                    color: "white",
                    fontSize: "20px",
                    cursor: "pointer",
                }}>X</button>
            </div>
            <p>{info[planet].description}</p>
            <p><strong>Radius:</strong> {info[planet].radius}</p>
            <p><strong>Distance:</strong> {info[planet].distance}</p>
            <p><strong>Speed:</strong> {info[planet].speed}</p>
        </div>
    </div>

}

export default InfoPanel;
