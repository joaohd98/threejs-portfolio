import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import {FC, RefObject} from "react";

const MeshAvatar: FC<{
  avatarRef: RefObject<any>
}> = ({avatarRef}) => {
  const texture = useLoader(TextureLoader, "mega-man.jpg");

  return (
    <mesh ref={avatarRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default MeshAvatar
