import {useThree} from "@react-three/fiber";
import {TextureLoader} from "three";

const MeshBackground = () => {
  const {scene} = useThree();
  scene.background = new TextureLoader().load("space.jpg");

  return null;
}

export default MeshBackground;
