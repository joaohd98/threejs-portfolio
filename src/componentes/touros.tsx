import {FC, useRef} from "react";
import * as three from "three";
import {useFrame} from "@react-three/fiber";
import {useHelper} from "@react-three/drei";
import {PointLightHelper} from "three";

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


export default MeshTouros
