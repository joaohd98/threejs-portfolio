import './styles.css'
import * as three from 'three'
import {Canvas} from '@react-three/fiber'
import {Suspense} from "react";
import {OrbitControls} from "@react-three/drei";
import MeshBackground from "../componentes/background";
import MeshAvatar from "../componentes/avatar";
import MeshMoon from "../componentes/moon";
import MeshTouros from "../componentes/touros";
import MeshStars from "../componentes/stars";

const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.setZ(30);

function Layout() {
  return (
    <div className="App">
      <div className="canvas-container">
        <Suspense fallback={<div />}>
          <Canvas camera={camera} style={{background: "space.jpg"}}  >
            <MeshBackground />
            <MeshTouros />
            <MeshStars />
            <MeshAvatar />
            <MeshMoon />
            <OrbitControls camera={camera} makeDefault />
            <gridHelper args={[200, 50]} />
          </Canvas>
        </Suspense>
      </div>
    </div>
  )
}

export default Layout

