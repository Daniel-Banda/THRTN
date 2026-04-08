"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import AbstractShape from "./AbstractShape";

export default function Scene3D() {
    return (
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-black pointer-events-none">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={1} />

                <AbstractShape />

                <Environment preset="city" />
                {/* OrbitControls allowed for debug interaction if user wants to spin it manually, 
            but strictly speaking maybe not needed if it's just background. 
            I'll leave it out for now to keep it purely decorative, 
            or add with enableZoom={false} if needed. */}
            </Canvas>
        </div>
    );
}
