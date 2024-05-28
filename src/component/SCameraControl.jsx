// SCameraController.js
import { useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";

const SCameraController = () => {
  const { camera } = useThree();
  const [sphericalCoords, setSphericalCoords] = useState({
    radius: 5,
    theta: Math.PI / 2,
    phi: Math.PI / 2,
  });
  const [lastTouchY, setLastTouchY] = useState(null);

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
      const newTheta = Math.max(
        0.1,
        Math.min(
          Math.PI - 0.1,
          sphericalCoords.theta + event.deltaY * scrollSpeed
        )
      );

      setSphericalCoords((prevCoords) => ({
        ...prevCoords,
        phi: newPhi,
        theta: newTheta,
      }));
    };

    const handleTouchStart = (event) => {
      if (event.touches.length === 1) {
        setLastTouchY(event.touches[0].clientY);
      }
    };

    const handleTouchMove = (event) => {
      if (event.touches.length === 1) {
        const touchY = event.touches[0].clientY;
        const deltaY = touchY - lastTouchY;
        const scrollSpeed = 0.005;
        const newPhi = Math.max(
          0.1,
          Math.min(Math.PI - 0.1, sphericalCoords.phi + deltaY * scrollSpeed)
        );
        const newTheta = Math.max(
          0.1,
          Math.min(Math.PI - 0.1, sphericalCoords.theta + deltaY * scrollSpeed)
        );

        setSphericalCoords((prevCoords) => ({
          ...prevCoords,
          phi: newPhi,
          theta: newTheta,
        }));
        setLastTouchY(touchY);
      }
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [sphericalCoords, lastTouchY]);

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
