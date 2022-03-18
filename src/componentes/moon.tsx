import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import {FC, RefObject} from "react";

const MeshMoon: FC<{
  moonRef: RefObject<any>
}> = ({moonRef}) => {
  const moonTexture = useLoader(TextureLoader, "moon.jpg");
  const normalTexture = useLoader(TextureLoader, "normal.jpg");

  return (
    <mesh ref={moonRef} position={[-10, 0, 15]}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshStandardMaterial map={moonTexture} normalMap={normalTexture} />
    </mesh>
  );
}
export default MeshMoon;
