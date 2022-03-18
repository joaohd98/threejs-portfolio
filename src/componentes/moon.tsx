import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";

const MeshMoon = () => {
  const moonTexture = useLoader(TextureLoader, "moon.jpg");
  const normalTexture = useLoader(TextureLoader, "normal.jpg");

  return (
    <mesh>
      <sphereGeometry args={[3, 32, 32]} />
      <meshStandardMaterial map={moonTexture} normalMap={normalTexture} />
    </mesh>
  );
}
export default MeshMoon;
