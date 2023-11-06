import React from "react";
import "./ReactPipeline.css";
import Pipe, { PipeProps } from "./shared/Pipe";
import PipelineNode, { NodeProps } from "./shared/PipelineNode";

export interface ReactPipelineProps {
  label: string;
  schema: Array<NodeProps | PipeProps>
}

const renderPipeline = (schema: Array<NodeProps| PipeProps>) : JSX.Element[] => {
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
            retries={node.retries}
            size={node.size}
            active={node.active}
          />
      );
    } else {
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