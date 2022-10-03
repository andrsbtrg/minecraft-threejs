import { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";
import { useKeyboard } from "../hooks/useKeyboard";

export const TextureSelector = () => {
    const [visible, setVisible] = useState(false);
    const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture]);
    const { grass, glass, dirt, wood, log } = useKeyboard();

    
    // Choose texture
    useEffect(() => {
        const textures = {
            grass, glass, dirt, wood, log
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
        <div className="absolute centered">TextureSelector</div>
    )
}