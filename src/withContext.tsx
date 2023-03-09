import React from "react";
import { useAnimatedScale, useDimension } from "./hooks";

const withContext = (MainFC : React.FC<any>) : React.FC<any> => {
    return (props : any) => {
        const {w, h} = useDimension()
        const {scale, start : onClick} = useAnimatedScale()
        const mainProps = {...props, w, h, onClick, scale}
        return (<MainFC {...mainProps}></MainFC>)
    }
}
export default withContext