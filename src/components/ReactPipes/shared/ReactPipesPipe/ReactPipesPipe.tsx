import React from "react";
import { ReactPipesIntent, ReactPipesSize } from "../../types";
import "./ReactPipesPipe.css";

export interface ReactPipesPipeProps {
    intent?: ReactPipesIntent,
    active?: boolean,
    size: ReactPipesSize,
    progressPercent?: number,
}

export const ReactPipesPipe = (props: ReactPipesPipeProps) => {
    return (
        <div className={"rp-pipe-wrapper" + ` ${props.size} ${props.intent} ${props.active ? "rp-state-active" : ""}`}>
            <div className={"rp-pipe-loading-wrapper"} style={{width: props.progressPercent + "%"}}>
                <div className={"rp-pipe"}/>
            </div>
        </div>
    );
  };
  
  export default ReactPipesPipe;