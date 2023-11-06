import React from "react";
import { ReactPipesIntent, ReactPipesSize } from "../types";
import * as allIcons from "@tabler/icons-react";
import { PipelineIcon } from "../icons";
import "./PipelineNode.css";
import "../../index.css";


export interface NodeProps {
    intent?: ReactPipesIntent,
    active?: boolean,
    icon: PipelineIcon,
    size: ReactPipesSize,
    attempts?: number,
    onNodeClick?: ()=>void,
}

export const PipelineNode = (props: NodeProps) => {
    // @ts-ignore
    const IconToBeUsed = allIcons[props.icon];

    return( 
        <span className={"rp-node-wrapper" + ` ${props.size} ${props.intent} ${props.active ? "rp-state-active" : ""} ${props.onNodeClick !== undefined ? "rp-clickable" : ""}`}>
            <span className={"rp-node"}>
                {
                props.attempts !== undefined  &&  props.intent !== ReactPipesIntent.SKIPPED &&
                    <span className={"rp-top-right-icon" + ` ${props.size} ${props.intent}`}>
                        {props.attempts}
                    </span>
                }

                {props.intent === ReactPipesIntent.SKIPPED &&
                  <span className={"rp-top-right-icon" + ` ${props.size} ${props.intent}`}>
                      <allIcons.IconPlayerSkipForwardFilled size={18}/>
                    </span>
                }
                <span className={"rp-node-icon"} onClick={props.onNodeClick}>
                    <IconToBeUsed/>
                </span>    
            </span>
    </span>);
  };
  
  export default PipelineNode;