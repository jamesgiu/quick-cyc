import React, { CSSProperties } from "react";
import { ReactPipesIntent, ReactPipesSize } from "../../types";
import * as allIcons from "@tabler/icons-react";
import { ReactPipesIcons } from "../../icons";
import "./ReactPipesNode.css";
import "../../../index.css";


export interface ReactPipesNodeProps {
    intent: ReactPipesIntent,
    active?: boolean,
    icon: ReactPipesIcons,
    size: ReactPipesSize,
    percentComplete?: number,
    attempts?: number,
    onNodeClick?: ()=>void,
    className?: string,
}

export const ReactPipesNode = (props: ReactPipesNodeProps) => {
    // @ts-ignore
    const IconToBeUsed = allIcons[props.icon];

    return( 
        <span className={"rp-node-wrapper" + ` ${props.className} ${props.size} ${props.intent} ${props.active ? "rp-state-active" : ""} ${props.onNodeClick !== undefined ? "rp-clickable" : ""}`}>
            <span className={"rp-node" + ` ${props.percentComplete && props.percentComplete < 100 ? "rp-node-loading" : ""}`}>
                {
                props.attempts !== undefined  &&  props.intent !== ReactPipesIntent.SKIPPED &&
                    <span className={"rp-top-right-icon" + ` ${props.size} ${props.intent}`}>
                        {props.attempts}
                    </span>
                }

                {props.percentComplete &&
                <span className={"rp-node-percent-complete"} style={{backgroundSize: props.percentComplete + "%"}}/>}

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
  
  export default ReactPipesNode;