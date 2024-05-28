// CameraController.js
import { useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";

const SCameraController = () => {
  const { camera } = useThree();
  const [sphericalCoords, setSphericalCoords] = useState({
    radius: 5,
    theta: Math.PI / 2,
    phi: Math.PI / 2,
  });

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollSpeed = 0.005;
      const newPhi = Math.max(
        0.1,
        Math.min(
          Math.PI - 0.1,
          sphericalCoords.phi + event.deltaY * scrollSpeed
        )
      );

      const newtheta = Math.max(
        0.1,
        Math.min(
          Math.PI - 0.1,
          sphericalCoords.phi + event.deltaY * scrollSpeed
        )
      );

      setSphericalCoords((prevCoords) => ({
        ...prevCoords,
        phi: newPhi,
        theta: newtheta,
      }));
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [sphericalCoords]);

  useEffect(() => {
    const { radius, theta, phi } = sphericalCoords;
    camera.position.x = radius * Math.sin(phi) * Math.cos(theta);

    camera.position.y = radius * Math.cos(phi);

    camera.position.z = radius * Math.sin(phi) * Math.sin(theta);
    camera.lookAt(0, 0, 0);
  }, [camera, sphericalCoords]);

  return null;
};

export default SCameraController;
