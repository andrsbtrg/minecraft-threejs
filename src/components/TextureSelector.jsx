import { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";
import { useKeyboard } from "../hooks/useKeyboard";
import { dirtImg, grassImg, glassImg, logImg, woodImg  } from "../images/images";

const images = {
    dirt: dirtImg,
    grass: grassImg,
    glass: glassImg,
    log: logImg,
    wood: woodImg,
}

export const TextureSelector = () => {
    const [visible, setVisible] = useState(false);
    const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture]);
    const { dirt, grass, glass, log, wood } = useKeyboard();

    
    // Choose texture
    useEffect(() => {
        const textures = {
            dirt, grass, glass, log, wood
        }
        const pressedTexture = Object.entries(textures).find(([k,v]) => v);
        if (pressedTexture) {
            setTexture(pressedTexture[0]);
            console.log(pressedTexture);
        }
    }, [setTexture, dirt, grass, glass, log, wood])

    // Set visibility
    useEffect(() => {
        const visibilityTimeout = setTimeout(() => {
            setVisible(false);
        }, 200)
        setVisible(true);
        return () => {
            clearTimeout(visibilityTimeout);
        }

    }, [activeTexture])

    return visible && (
        <div className="absolute centered texture-selector">{Object.entries(images).map(([k,src]) => {
            return <img src = {src} key = {k} 
            alt = {k} className={`${k === activeTexture ? "active" :"" }`}/>
        })}</div>
    )
}