import React from "react";
import { Canvas } from "@react-three/fiber";

import SCameraController from "./component/SCameraControl";

const App = () => {
  return (
    <div
      className="hero "
      style={{ background: "black", height: "100vh", width: "100%"  }}
    >
      <Canvas
      //  style={{ height: "100vh", paddingTop: "500px" }}
       >
        {/* <CameraController /> */}
        <SCameraController />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial  wireframe color="orange" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default App;
