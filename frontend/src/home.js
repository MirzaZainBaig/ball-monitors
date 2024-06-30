import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { SketchPicker } from 'react-color'; // Import color picker component
import "bootstrap/dist/css/bootstrap.min.css";

function Box({ color }) {
    return (
        <mesh>
            <sphereGeometry args={[1, 30, 30]} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
}

function Home() {
    const [color, setColor] = useState('green'); // State for the sphere color

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark d-flex justify-content-center align-items-center">
                <h1 className="navbar-brand">BallMonitors</h1>
            </nav>
            <div className="d-flex justify-content-center align-items-center vh-100 bg-dark bg-gradient">
                <Canvas>
                    <OrbitControls />
                    <ambientLight intensity={5} />
                    <Box color={color} />
                </Canvas>
                <div className="position-absolute" style={{ top: 20, right: 20 }}>
                    <SketchPicker
                        color={color}
                        onChangeComplete={(newColor) => setColor(newColor.hex)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
