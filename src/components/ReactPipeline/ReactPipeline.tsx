import React from "react";
import "./ReactPipeline.css";
import "../index.css";
import Pipe, { PipeProps } from "./shared/Pipe";
import PipelineNode, { NodeProps } from "./shared/PipelineNode";

export interface ReactPipelineProps {
  label: string;
  schema: Array<NodeProps | PipeProps | ReactPipelineProps>
}

const renderPipeline = (schema: Array<NodeProps| PipeProps | ReactPipelineProps>) : JSX.Element[] => {
  const elements : JSX.Element[] = [];

  schema.forEach((item) => {
    // Ensure we are dealing with a node, otherwise, it's a pipe (// FIXME bit hacky)
    if (Object.keys(item).includes("icon")) {
      const node = item as NodeProps;
        elements.push(
          <PipelineNode
            icon={node.icon}
            intent={node.intent}
            onNodeClick={node.onNodeClick}
            attempts={node.attempts}
            size={node.size}
            active={node.active}
          />
      );
    } else if (Object.keys(item).includes("schema")) { 
      const pipeline = item as ReactPipelineProps;
        elements.push(
          <span className={"rp-subpipeline"}>
            <ReactPipeline
              label="embedded"
              schema={pipeline.schema}
            />
          </span>
        )
    }
    else {
      const pipe = item as PipeProps; 
      elements.push(
        <Pipe
          intent={pipe.intent}
          size={pipe.size}
          active={pipe.active}
        />
      );
    }
  })

  return elements;
};


export const ReactPipeline = (props: ReactPipelineProps) => {
  return <span className={"rp-pipeline"}>
    {renderPipeline(props.schema)}
  </span>;
};

export default ReactPipeline;