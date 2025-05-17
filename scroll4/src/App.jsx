import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, Scroll, OrbitControls,useGLTF, useTexture, Environment  } from '@react-three/drei'


import Box  from './components/components'
import CameraMover from './components/CameraMover'

function App() {

  let cameraPositionZ = -50

  return (
    <div id="canvas-container">
      <Canvas camera={{ position : [0, 0, cameraPositionZ], }}>
        <OrbitControls></OrbitControls>

          <Box></Box>


          <CameraMover current={cameraPositionZ} target={-10}></CameraMover>
          <ambientLight></ambientLight>

      </Canvas>
    </div>
  )
}

export default App
