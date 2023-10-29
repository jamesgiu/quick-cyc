import React from "react";
import { ReactPipesIntent } from "../types";
import * as allIcons from "@tabler/icons-react";
import { PipelineIcon } from "../icons";


export interface NodeProps {
    intent: ReactPipesIntent,
    active: boolean,
    icon: PipelineIcon
}

export const PipelineNode = (props: NodeProps) => {
    // @ts-ignore
    const IconToBeUsed = allIcons[props.icon];

    return( 
    <span className="pipeline-node">
        <IconToBeUsed/>
    </span>);
  };
  
  export default PipelineNode;