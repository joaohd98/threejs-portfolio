import {FC, Suspense, useEffect, useRef} from "react";
import MeshBackground from "./background";
import MeshTouros from "./touros";
import MeshStars from "./stars";
import MeshAvatar from "./avatar";
import MeshMoon from "./moon";
import {OrbitControls} from "@react-three/drei";
import * as three from "three";
import {Canvas} from "@react-three/fiber";

const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const CustomCanvas: FC = () => {
  const moonRef = useRef<three.Mesh>();
  const avatarRef = useRef<three.Mesh>();

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onScroll = () => {
    const top = document.body.getBoundingClientRect().top;

    if(moonRef.current) {
      moonRef.current.rotation.x += 0.05;
      moonRef.current.rotation.y += 0.075;
      moonRef.current.rotation.z += 0.05;
    }

    if(avatarRef.current) {
      avatarRef.current.rotation.y += 0.01;
      avatarRef.current.rotation.z += 0.01;
    }

    camera.position.z = top * -0.01;
    camera.position.x = top * -0.0002;
    camera.position.y = top * -0.0002;
  };


  return (
    <div className="canvas-container">
      <Suspense fallback={<div />}>
        <Canvas camera={camera}>
          <MeshBackground />
          <MeshTouros />
          <MeshStars />
          <MeshAvatar avatarRef={avatarRef} />
          <MeshMoon moonRef={moonRef}/>
          <OrbitControls camera={camera} makeDefault />
          <gridHelper args={[200, 50]} />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default CustomCanvas;
