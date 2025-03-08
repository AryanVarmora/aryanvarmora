import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 2, 3]} />
        <OrbitControls />
        <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial attach="material" color="hotpink" />
        </Sphere>
      </Canvas>
    </div>
  );
}

export default App;