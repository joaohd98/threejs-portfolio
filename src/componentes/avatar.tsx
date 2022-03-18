import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";

const MeshAvatar = () => {
  const texture = useLoader(TextureLoader, "mega-man.jpg");

  return (
    <mesh>
      <boxGeometry args={[3, 3, 3]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default MeshAvatar
