import React from "react";
import { ReactPipesIntent, ReactPipesSize } from "../types";
import "./Pipe.css";

export interface PipeProps {
    intent?: ReactPipesIntent,
    active?: boolean,
    size: ReactPipesSize,
    progressPercent?: number,
}

export const Pipe = (props: PipeProps) => {
    return (
        <div className={"rp-pipe-wrapper" + ` ${props.size} ${props.intent} ${props.active ? "rp-state-active" : ""}`}>
            <div className={"rp-pipe"} style={{width: props.progressPercent + "%"}}/>
        </div>
    );
  };
  
  export default Pipe;