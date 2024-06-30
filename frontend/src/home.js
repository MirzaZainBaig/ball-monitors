import React, { Suspense } from 'react'
// import { Canvas } from '@react-three/fiber'git push origin  main
// import { OrbitControls} from '@react-three/drei'
// import Earth from '../public/Earth'

function Box (){
    return(
        <mesh>
            {/* <boxBufferGeometry attach={'geometry'}></boxBufferGeometry>
            <meshLamberMaterial attach={'material'} color ='hotpink'></meshLamberMaterial> */}
            {/* <sphereBufferGeometry args={[1, 30, 30]} /> */}
            <h1>zain</h1>
        </mesh>
    );
}

function Home() {
  return (
    <div>

            <Box/>
    </div>
  )
}

export default Home