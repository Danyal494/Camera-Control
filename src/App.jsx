// App.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import CameraController from "./component/CameraController";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import SCameraController from "./component/SCameraControl";

const App = () => {
  return (
    <div
      className="hero "
      style={{ background: "black", height: "200vh", width: "100vh" }}
    >
      <Canvas style={{ height: "30vh", paddingTop: "500px" }}>
        {/* <CameraController /> */}
        <SCameraController />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial wireframe color="orange" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default App;
