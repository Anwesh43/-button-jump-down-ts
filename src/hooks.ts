import { CSSProperties, useEffect, useState } from "react";

export const useAnimatedScale = (scGap : number = 0.01, delay : number = 20) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        animated, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (scale > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0 
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
            return () => {
                window.onresize = () => {

                }
            }
        }
    })
    return {
        w, 
        h
    }
}

const sinify = (scale : number) : number => Math.sin(scale * Math.PI)

export const useStyle = (w : number, h : number, scale : number) => {
    const position = 'absolute'
    const size = Math.min(w, h) / 12
    return {
        buttonStyle() : CSSProperties {
            return {
                position,
                left: `${w / 2 - size / 2}px`,
                top: `${(h / 2 - size / 6) * (1 + sinify(scale))}px`,
                width: `${size}px`,
                height: `${size / 3}px`
            }
        }
    }
}