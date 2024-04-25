import React from "react";
import { PipelineIntent, PipelineSize } from "../../types";
import "./PipelinePipe.css";

export interface PipelinePipeProps {
    intent?: PipelineIntent,
    active?: boolean,
    size: PipelineSize,
    progressPercent?: number,
}

export const PipelinePipe = (props: PipelinePipeProps) => {
    return (
        <div className={"qc-pipe-wrapper" + ` ${props.size} ${props.intent} ${props.active ? "qc-state-active" : ""}`}>
            <div className={"qc-pipe-loading-wrapper"} style={{width: props.progressPercent + "%"}}>
                <div className={"qc-pipe"}/>
            </div>
        </div>
    );
  };
  
  export default PipelinePipe;