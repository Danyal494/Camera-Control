// App.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import CameraController from "./component/CameraController";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import SCameraController from "./component/SCameraControl";

const App = () => {
  return (
    <div className="hero">
      <Canvas style={{ height: "30vh", marginTop: "40px" }}>
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
