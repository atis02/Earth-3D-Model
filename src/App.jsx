import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import Earth from "../public/Earth";

function App() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          background: "gray",
          paddingTop: 50,
        }}
      >
        3D Model of Earth
      </h1>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default App;
