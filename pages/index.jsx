import Head from 'next/head'
import Link from 'next/link'
import { Canvas, useFrame } from '@react-three/fiber'
import { useState, useRef, Suspense } from 'react'
import { useGLTF, Stars, Float } from '@react-three/drei'
import { BiLinkExternal } from 'react-icons/bi'
import { MdOutlineRotateLeft, MdOutlineRotateRight, MdPause, MdPlayArrow } from 'react-icons/md'
import { RiEyeCloseFill, RiEyeFill } from 'react-icons/ri'

/**
 * function Robot(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/robot.glb')
  
  return (
      <group ref={group} {...props} dispose={null} scale={0.28} position={[0, -2.8, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh geometry={nodes.Object_2.geometry} material={materials.BlackMetal} />
              <mesh geometry={nodes.Object_3.geometry} material={materials.ButterflyBody} />
              <mesh geometry={nodes.Object_4.geometry} material={materials.ButterflyWings} />
              <mesh geometry={nodes.Object_5.geometry} material={materials.Glow} />
              <mesh geometry={nodes.Object_6.geometry} material={materials.OrangePaint} />
              <mesh geometry={nodes.Object_7.geometry} material={materials.Screen} />
              <mesh geometry={nodes.Object_8.geometry} material={materials.Stripes} />
          </group>
      </group>
  )
}

useGLTF.preload('/robot.glb')
 */

function LegoSpaceship(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/lego_spaceship.glb')
  return (
    <group ref={group} {...props} dispose={null} scale={0.3} rotation={[0.3, 1, 0.4]} position={[-0.5, 0.4, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, 0.8]}>
            <mesh geometry={nodes.Object_10.geometry} material={materials['Material.010']} material-color={props.customColors} />
          </group>
          <group position={[0, 0.16, 8.04]} scale={[0.83, 1, 1.05]}>
            <mesh geometry={nodes.Object_12.geometry} material={materials['Material.009']} /> {/* X */}
          </group>
          <group position={[0.91, -0.44, 4.73]}>
            <mesh geometry={nodes.Object_14.geometry} material={materials['Material.011']} material-color={props.customColors} />
          </group>
          <group position={[0, 0.62, -0.25]}>
            <mesh geometry={nodes.Object_16.geometry} material={materials['Material.014']} /> {/* ??? */}
          </group>
          <group position={[0, -0.42, -4.56]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object_18.geometry} material={materials['Material.015']} />
          </group>
          <group position={[2.31, -0.45, 2.12]}>
            <mesh geometry={nodes.Object_20.geometry} material={materials.Material} material-color={props.customColors} />
          </group>
          <group position={[1.3, -0.37, -1.54]}>
            <mesh geometry={nodes.Object_22.geometry} material={materials['Material.001']} /> {/* ??? */}
          </group>
          <group position={[2.74, -0.27, -3.13]}>
            <mesh geometry={nodes.Object_24.geometry} material={materials['Material.003']} material-color={props.customColors} />
          </group>
          <group position={[5.95, -0.43, -2.96]}>
            <mesh geometry={nodes.Object_26.geometry} material={materials['Material.007']} /> {/** */}
          </group>
          <group position={[2.74, -0.83, -2.88]} scale={[1, 1.14, 1]}>
            <mesh geometry={nodes.Object_28.geometry} material={materials['Material.004']} /> {/* ??? */}
          </group>
          <group position={[2.73, -1.33, 1.34]}>
            <mesh geometry={nodes.Object_30.geometry} material={materials['Material.006']} material-color={props.customColors} />
          </group>
          <group position={[0, -1.06, 2.7]}>
            <mesh geometry={nodes.Object_32.geometry} material={materials['Material.012']} /> {/* ??? */}
          </group>
          <group position={[0, 0, 0.8]}>
            <mesh geometry={nodes.Object_34.geometry} material={materials['Material.009']} />
          </group>
          <group position={[5.95, -0.43, -2.96]}>
            <mesh geometry={nodes.Object_36.geometry} material={materials['Material.009']} />
          </group>
          <group position={[2.74, -0.27, -3.13]}>
            <mesh geometry={nodes.Object_38.geometry} material={materials['Material.002']} />
          </group>
          <group position={[1.3, -0.37, -1.54]}>
            <mesh geometry={nodes.Object_40.geometry} material={materials['Material.005']} />
          </group>
          <group position={[5.95, -0.43, -2.96]}>
            <mesh geometry={nodes.Object_42.geometry} material={materials['Material.008']} />
            <mesh geometry={nodes.Object_43.geometry} material={materials['Material.007']} />
          </group>
          <group position={[0, -1.06, 2.7]}>
            <mesh geometry={nodes.Object_45.geometry} material={materials['Material.013']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/lego_spaceship.glb')

//  INDEX
export default function Home() {
  const [defaultBodyColor, selectBodyColor] = useState('#ffffff')
  const [defaultPosition, rotateX] = useState(1)
  const [play, stop] = useState(false)
  const [stars, noStars] = useState(true)

  return (
    <div>
      <Head>
        <title>farinisfahan</title>
        <meta name="farinisfahan" content="portfolio website" />
        <link rel="icon" href="/logo_favicon.ico" />
      </Head>

      <main>
        <div className="mx-auto my-3 flex flex-col lg:flex-row-reverse lg:justify-between items-center px-5 py-3">
          <div className="configurator border-2 w-full h-1/2 lg:h-full flex flex-col items-center rounded-sm">
            <div className="scene-container w-full h-80">
              <Canvas>
                <ambientLight />
                <directionalLight color={"#6fffff"} />
                <directionalLight color={"#9208d7"} position={[0.7,0.2,0]} />
                <Stars count={stars ? 5000 : 0} />
                <Float speed={play ? 1 : 0}>
                  <Suspense fallback={null}>
                    <LegoSpaceship
                      customColors={defaultBodyColor}
                      rotation-y={defaultPosition}
                    />
                  </Suspense>
                </Float>
              </Canvas>
            </div>

            {/* COLOR PALETTE */}
            <div className="p-3 w-full flex items-center justify-between border-t-2">
              <button className="color rounded m-1 w-9 h-9 lg:w-12 lg:h-12 bg-[#23262e] flex justify-center items-center" onClick={() => rotateX(defaultPosition + (Math.PI / 4))}>
                <MdOutlineRotateLeft size={24} />
              </button>

              <button className="color rounded m-1 w-9 h-9 lg:w-12 lg:h-12 bg-[#23262e] flex justify-center items-center" onClick={() => rotateX(defaultPosition + (-Math.PI / 4))}>
                <MdOutlineRotateRight size={24} />
              </button>

              <button className="color rounded m-1 w-9 h-9 lg:w-12 lg:h-12 bg-[#23262e] flex justify-center items-center" onClick={() => stop(!play)}>
                {play ? <MdPause size={24} /> : <MdPlayArrow size={24} />}
              </button>

              <button className="color rounded m-1 w-9 h-9 lg:w-12 lg:h-12 bg-[#23262e] flex justify-center items-center" onClick={() => noStars(!stars)}>
                {stars ? <RiEyeCloseFill size={22} /> : <RiEyeFill size={22} /> }
              </button>

              <button className="color rounded m-1 w-9 h-9 lg:w-12 lg:h-12 bg-[#646267]" onClick={() => selectBodyColor("#646267")}></button>
              <button className="color rounded m-1 w-9 h-9 lg:w-12 lg:h-12 bg-[#163249]" onClick={() => selectBodyColor("#163249")}></button>
              <button className="color rounded m-1 w-9 h-9 lg:w-12 lg:h-12 bg-[#8e0902]" onClick={() => selectBodyColor("#8e0902")}></button>
              <button className="color rounded m-1 w-9 h-9 lg:w-12 lg:h-12 bg-[#ffffff]" onClick={() => selectBodyColor("#ffffff")}></button>
            </div>
          </div>

          <div classname="border lg:w-1/2 h-full">
            <div className="mt-14 lg:mt-0 lg:pb-0 lg:pr-5"> {/**border-b border-gray-600 lg:border-0 */}
              <p className="text-lg mb-4 text-justify">I am a software developer based in Malaysia [GMT+8].</p>
              <p className="text-lg mb-4 text-justify">My main focus is on web apps with 3d product configuration features. Aside from that, I do fullstack web development.</p>
              <p className="text-lg mb-4 text-justify">I write in Javascript with Next JS for my works. For my personal projects, I prefer C++, C# or Python.</p>
              <p className="text-lg mb-4 text-justify">Started programming back in 2013 with C++ as my first language. And in 2019 I decided to return in this field, but this time into web development.</p>
            </div>
          </div>
        </div>

        {/*
        <div className="projects grid lg:grid-cols-3 w-full lg:mt-8 gap-8 px-5 mb-10">
        
          <div className="project border-2 rounded-sm p-3 flex w-full space-x-3 items-start">
            <h2 className="rounded bg-[#6fffff] text-[#0a0e17] text-center p-2 text-lg font-extrabold">01</h2>
            <div className="p-1">
              <Link href="https://github.com/farinys">
                <a target="_blank" rel="noreferrer">
                  <h2 className="uppercase font-extrabold">basic vpn <span className="inline-block"><BiLinkExternal/></span></h2>
                </a>
              </Link>
              <p>simple vpn for my personal use</p>
            </div>
          </div>

          <div className="project border-2 rounded-sm p-3 flex w-full space-x-3 items-start">
          <h2 className="rounded bg-[#6fffff] text-[#0a0e17] text-center p-2 text-lg font-extrabold">02</h2>
            <div className="p-1">
              <Link href="#">
                <a target="_blank" rel="noreferrer">
                  <h2 className="uppercase font-extrabold">photo text translator</h2>
                </a>
              </Link>
              <p>translates foreign language text from an image to english</p>
            </div>
          </div>

          <div className="project border-2 rounded-sm p-3 flex w-full space-x-3 items-start">
            <div className="rounded bg-[#6fffff] text-[#0a0e17] text-center p-2">
              <h2 className="text-lg">03</h2>
            </div>
            <div className="p-1">
              <h2 className="uppercase">soba news</h2>
              <p>collection of japanese news headlines</p>
            </div>
          </div>
        </div>
        */}
      </main>
    </div>
  )
}

//import styles from '../styles/Home.module.css'
//className={styles.container}