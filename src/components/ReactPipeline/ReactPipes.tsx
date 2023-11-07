import React from "react";
import "./ReactPipeline.css";
import "../index.css";
import Pipe, { ReactPipesPipeProps } from "./shared/ReactPipesPipe";
import PipelineNode, { ReactPipesNodeProps } from "./shared/ReactPipesNode";

export interface ReactPipesProps {
  label: string;
  schema: Array<ReactPipesNodeProps | ReactPipesPipeProps | ReactPipesProps>
}

const renderPipeline = (schema: Array<ReactPipesNodeProps| ReactPipesPipeProps | ReactPipesProps>) : JSX.Element[] => {
  const elements : JSX.Element[] = [];

  schema.forEach((item) => {
    // Ensure we are dealing with a node, otherwise, it's a pipe (// FIXME bit hacky)
    if (Object.keys(item).includes("icon")) {
      const node = item as ReactPipesNodeProps;
        elements.push(
          <PipelineNode
            className={node.className}
            icon={node.icon}
            intent={node.intent}
            onNodeClick={node.onNodeClick}
            attempts={node.attempts}
            size={node.size}
            active={node.active}
          />
      );
    } else if (Object.keys(item).includes("schema")) { 
      const pipeline = item as ReactPipesProps;
        elements.push(
          <span className={"rp-subpipeline"}>
            <ReactPipes
              label="embedded"
              schema={pipeline.schema}
            />
          </span>
        )
    }
    else {
      const pipe = item as ReactPipesPipeProps; 
      elements.push(
        <Pipe
          intent={pipe.intent}
          size={pipe.size}
          active={pipe.active}
          progressPercent={pipe.progressPercent}
        />
      );
    }
  })

  return elements;
};


export const ReactPipes = (props: ReactPipesProps) => {
  return <span className={"rp-pipeline"}>
    {renderPipeline(props.schema)}
  </span>;
};

export default ReactPipes;