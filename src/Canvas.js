import { Canvas, useFrame } from "@react-three/fiber";
import {
  Center,
  useGLTF,
  Environment,
  AccumulativeShadows,
  RandomizedLight,
  Decal,
  useTexture,
} from "@react-three/drei";
import { useRef } from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { state } from "./store";

export const App = ({ position = [10, 1, -2.5], fov = 27 }) => (
  <Canvas
    shadows
    gl={{ preserveDrawingBuffer: true }}
    eventSource={document.getElementById("root")}
    eventPrefix="client"
    camera={{ position, fov }}
  >
    <ambientLight intensity={0.5} />
    <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />

    <CameraRig>
      <Center>
        <Shirt />
        <Backdrop />
      </Center>
    </CameraRig>
  </Canvas>
);

function Shirt(props) {
  const snap = useSnapshot(state);

  // Load texture
  const texture = useTexture(`/${snap.selectedDecal}.png`);

  // Load materials from shoe
  const { nodes, materials } = useGLTF("/Shoe_test.glb");

  // Define list of shoe parts to adjust when different color is selected
  const list_of_mat = [
    "Material.118",
    "Material.117",
    "Material.120",
    "Material.119",
    "Material.027",
  ];

  // Loop over list of materials/shoe parts to update with selected color
  for (let index = 0; index < list_of_mat.length; index++) {
    const i = list_of_mat[index];

    useFrame((state, delta) => {
      easing.dampC(materials[i].color, snap.selectedColor, 0.25, delta);
    });
  }

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_1.geometry}
          material={materials["Material.118"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_2.geometry}
          material={materials["Material.117"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_3.geometry}
          material={materials["Material.021"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_4.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_5.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_6.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_7.geometry}
          material={materials["Material.023"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_8.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_9.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_10.geometry}
          material={materials["Material.026"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_11.geometry}
          material={materials["Material.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_12.geometry}
          material={materials["Material.025"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_13.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_14.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_15.geometry}
          material={materials["Material.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_16.geometry}
          material={materials["Material.120"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_17.geometry}
          material={materials["Material.119"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_18.geometry}
          material={materials["Material.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_19.geometry}
          material={materials["Material.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_20.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_21.geometry}
          material={materials["Material.018"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_22.geometry}
          material={materials["Material.099"]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_33.geometry}
          material={materials["Material.106"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_34.geometry}
          material={materials["Material.104"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_35.geometry}
          material={materials["Material.105"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_36.geometry}
          material={materials["Material.103"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_37.geometry}
          material={materials["Material.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_38.geometry}
          material={materials["Material.101"]}
        >
          <Decal
            position={[0.3, -1.6, -0.47]}
            rotation={[0, 90, -90]}
            scale={0.2}
            opacity={10}
            map={texture}
            map-anisotropy={16}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_39.geometry}
          material={materials["Material.102"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_40.geometry}
          material={materials["Material.031"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_41.geometry}
          material={materials.None}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_42.geometry}
          material={materials["Material.020"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_43.geometry}
          material={materials["Material.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_44.geometry}
          material={materials["Material.098"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_45.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_46.geometry}
          material={materials["Material.034"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_47.geometry}
          material={materials["Material.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_48.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_49.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_50.geometry}
          material={materials["Material.036"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_51.geometry}
          material={materials["Material.028"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_52.geometry}
          material={materials["Material.029"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_53.geometry}
          material={materials["Material.037"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_54.geometry}
          material={materials["Material.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.slipspeed_simple_55.geometry}
          material={materials["Material.005"]}
        />
      </group>
    </group>
  );
}

function Backdrop() {
  const shadows = useRef();

  useFrame((state, delta) =>
    easing.dampC(
      shadows.current.getMesh().material.color,
      state.selectedColor,
      0.25,
      delta
    )
  );

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={80}
      alphaTest={0.65}
      scale={15}
      rotation={[2, -5, -2]}
      position={[-0.15, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={13}
        intensity={0.55}
        ambient={0.7}
        position={[5, 5, -5]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.35}
        ambient={0.55}
        position={[-5, -5, -6]}
      />
    </AccumulativeShadows>
  );
}

function CameraRig({ children }) {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [snap.intro ? state.viewport.height / 0.5 : 10, 1.5, -3],
      0.25,
      delta
    );

    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 5, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
}
useGLTF.preload("/Shoe_test.glb");
["/react.png", "/three2.png", "/pmndrs.png", "/UMD.png", "/MSU.png"].forEach(
  useTexture.preload
);
