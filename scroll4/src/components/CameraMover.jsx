import { useThree, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

// function CameraMover({current, target}){
//     const {camera} = useThree()

    

//     useFrame(({ clock })=>{
//         if (camera.position.z < target) {
//             let addingDistance = camera.position.z > -25 ? 0.2 : 0.7
//             camera.position.z += addingDistance
//         }
        
//     })

//     return null
// }

function easeIn(t) {
  return t * t
}

function CameraMover({ current, target }) {
  const { camera } = useThree()
  const startTime = useRef(null)
  const duration = 2 // seconds
  const startZ = useRef(camera.position.z)

  useFrame(({ clock }) => {
    if (startTime.current === null) {startTime.current = clock.getElapsedTime()}
    const elapsed = clock.getElapsedTime() - startTime.current
    const t = Math.min(elapsed / duration, 1)
    const easedT = easeIn(t)
    camera.position.z = startZ.current + (target - startZ.current) * easedT
  })

  return null
}

export default CameraMover