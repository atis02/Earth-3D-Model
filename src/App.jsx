import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import Earth from "../public/Earth";

function App() {
  return (
    <>
      <div style={{ background: "gray", height: "85.7vh" }}>
        <h1
          style={{
            textAlign: "center",
            background: "gray",
            paddingTop: 50,
          }}
        >
          3D Model of Earth
        </h1>
        <p style={{ textAlign: "center", background: "gray" }}>
          Copyright © {new Date().getFullYear()} | Powered by
          <a
            href="https://github.com/atis02"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            {""} Atamyrat Ikramow {""}
          </a>
          (Web Developer)
        </p>
        <Canvas>
          <ambientLight />
          <OrbitControls />
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
      </div>
    </>
  );
}

export default App;
