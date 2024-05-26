// CameraController.js
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const CameraController = () => {
  const { camera } = useThree();

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollSpeed = 0.1;
      camera.position.x += event.deltaY * scrollSpeed;
      console.log(`this is the value of X${camera.position.x}`);
      //   camera.position.z += event.deltaY * scrollSpeed;
      camera.position.y += event.deltaY * scrollSpeed;
      console.log(`this is the value of  Y ${camera.position.y}`);
      camera.lookAt(0, 0, 0);
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [camera]);

  return null;
};

export default CameraController;
