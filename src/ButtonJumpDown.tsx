import React from "react";
import { useStyle } from "./hooks";
import withContext from "./withContext";

interface BJDProps {
    scale : number, 
    w : number, 
    h : number, 
    onClick : () => void 
}
const ButtonJumpDown = (props : BJDProps) => {
    const { buttonStyle } = useStyle(props.w, props.h, props.scale)
    return (<button style = {buttonStyle()}>Jump</button>)
}

export default withContext(ButtonJumpDown)