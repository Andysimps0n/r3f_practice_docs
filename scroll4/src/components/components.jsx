import { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei'

export default function Box() {
    
    const boxRef = useRef();
    const scroll = useScroll()

    useFrame(()=> {
      boxRef.current.rotation.x += 0.005
      boxRef.current.rotation.y += 0.005

      // const offset = scroll.offset
      // if (boxRef.current) {
      //   boxRef.current.position.y = offset * 10 
      // }

    })
    return (
        <mesh position={[0,0,0]} ref={boxRef}>
            <boxGeometry args={[3, 3, 3]}></boxGeometry>
            <meshNormalMaterial></meshNormalMaterial>
        </mesh>
    )
  }