import './App.css'
import * as three  from 'three'
import {Canvas, useFrame} from '@react-three/fiber'
import {FC, useRef} from "react";
import {BoxHelper, PointLightHelper, GridHelper} from "three";
import {OrbitControls, useHelper} from "@react-three/drei";

const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.setZ(30);

const MeshTouros: FC = () => {
  const mesh = useRef<three.Mesh>();
  const pointLight = useRef<three.PointLight>();

  useFrame(() => {
    if(mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.005;
      mesh.current.rotation.z += 0.01;
    }
  });

  useHelper(pointLight, PointLightHelper)

  return (
    <mesh ref={mesh}>
      <torusGeometry args={[10, 3, 16, 100]} />
      <pointLight ref={pointLight} color={0xffffff} position={[10, 10, 10]} />
      <ambientLight color={0xffffff} />
      <meshStandardMaterial color={0xFF6347}  />
    </mesh>
  )
}

function App() {
  return (
    <div className="App">
      <div className="canvas-container">
        <Canvas camera={camera} >
          <MeshTouros />
          <OrbitControls camera={camera} makeDefault />
          <gridHelper args={[200, 50]} />
        </Canvas>
      </div>
    </div>
  )
}

export default App

