import { useCallback, useEffect, useState } from "react"


function actionByKey(key) {
    const keyActionMap = {
        KeyW: 'moveForward',
        KeyS: 'moveBackward',
        KeyA: 'moveLeft',
        KeyD: 'moveRight',
        Space: 'jump',
        Digit1: 'grass',
        Digit2: 'glass',
        Digit3: 'dirt',
        Digit4: 'wood',
        Digit5: 'log',
    }
    return keyActionMap[key];
}

export const useKeyboard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        grass: false,
        glass: false,
        dirt: false,
        wood: false,
        log: false,

    })

    const handleKeyDown = useCallback((e) => {
            const action = actionByKey(e.code);
            if(action){
                setActions((prev) => {
                    return ({
                        ...prev,
                        [action]: true

                    })
                })
            }
    }, [])

    const handleKeyUp = useCallback((e) => {
        const action = actionByKey(e.code);
        if(action){
            setActions((prev) => {
                return ({
                    ...prev,
                    [action]: false

                })
            })
        }
}, [])
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return () => { 
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    })

    return actions;
}