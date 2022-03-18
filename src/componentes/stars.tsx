import {FC, useMemo} from "react";
import * as three from "three";

const MeshStars: FC = () => {
  const renderStars = useMemo(() => {
    const elements: JSX.Element[] = [];

    for(let i = 0; i < 200; i++) {
      const [x, y, z] = [
        three.MathUtils.randFloatSpread(100),
        three.MathUtils.randFloatSpread(100),
        three.MathUtils.randFloatSpread(100)
      ];

      elements.push(
        <mesh key={i} position={[x, y, z]}>
          <sphereGeometry args={[0.25, 24, 24]} />
          <meshStandardMaterial color={0xffffff} />
        </mesh>
      )
    }

    return elements;
  }, []);

  return <>{renderStars}</>;
}

export default MeshStars
