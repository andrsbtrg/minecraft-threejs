import { useFrame, useThree } from "@react-three/fiber"
import { useSphere } from "@react-three/cannon";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import { useKeyboard } from "../hooks/useKeyboard";

export const Player = () => {
    const actions = useKeyboard();
    console.log('actions', Object.entries(actions).filter(([k,v])=> v));
    const { camera } = useThree();
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [0, 1, 0]
    }))

    // velocity
    const vel = useRef([0,0,0]);
    // react hook 
    useEffect(() => {
        api.velocity.subscribe((v) => vel.current = v)
    }, [api.velocity])

    // position
    const pos = useRef([0,0,0]);
    // react hook 
    useEffect(() => {
        api.position.subscribe((p) => pos.current = p)
    }, [api.position])

    useFrame(() => {
        // console.log(pos);
        camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]));
        api.velocity.set(0, 0, 0);
    })
    return (
        <mesh ref={ref}>

        </mesh>
    )
}