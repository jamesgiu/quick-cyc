import React from "react";
import { ReactPipesIntent, ReactPipesSize } from "../types";
import * as allIcons from "@tabler/icons-react";
import { PipelineIcon } from "../icons";
import "./PipelineNode.css"


export interface NodeProps {
    intent: ReactPipesIntent,
    active: boolean,
    icon: PipelineIcon,
    size: ReactPipesSize,
    retries: number,
}

export const PipelineNode = (props: NodeProps) => {
    // @ts-ignore
    const IconToBeUsed = allIcons[props.icon];

    return( 
        <span className={"rp-node-wrapper" + ` ${props.size} ${props.intent} ${props.active ? "rp-state-active" : ""}`}>
            <span className={"rp-node"}>
                {
                props.retries && 
                    <span className={"rp-retries" + ` ${props.size} ${props.intent}`}>
                        {props.retries}
                    </span>
                }
                <span className={"rp-node-icon"}>
                    <IconToBeUsed/>
                </span>    
            </span>
    </span>);
  };
  
  export default PipelineNode;