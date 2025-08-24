import React from "react";
import "./Pipeline.css";
import "../index.css";
import Pipe, {
  PipelinePipeProps as PipelinePipeProps,
} from "./shared/PipelinePipe/PipelinePipe";
import {
  PipelineNode,
  PipelineNodeProps,
} from "./shared/PipelineNode/PipelineNode";

export interface PipelineProps {
  label: string;
  schema: Array<PipelineNodeProps | PipelinePipeProps | PipelineProps>;
}

const renderPipeline = (
  schema: Array<PipelineNodeProps | PipelinePipeProps | PipelineProps>,
): JSX.Element[] => {
  const elements: JSX.Element[] = [];

  schema.forEach((item) => {
    // Ensure we are dealing with a node, otherwise, it's a pipe (// FIXME bit hacky)
    if (Object.keys(item).includes("icon")) {
      const node = item as PipelineNodeProps;
      elements.push(
        <PipelineNode
          className={node.className}
          icon={node.icon}
          intent={node.intent}
          onNodeClick={node.onNodeClick}
          attempts={node.attempts}
          percentComplete={node.percentComplete}
          size={node.size}
          active={node.active}
          innerLabel={node.innerLabel}
          outerLabel={node.outerLabel}
        />,
      );
    } else if (Object.keys(item).includes("schema")) {
      const pipeline = item as PipelineProps;
      elements.push(
        <span className={"qc-subpipeline"}>
          <Pipeline label="embedded" schema={pipeline.schema} />
        </span>,
      );
    } else {
      const pipe = item as PipelinePipeProps;
      elements.push(
        <Pipe
          intent={pipe.intent}
          size={pipe.size}
          active={pipe.active}
          progressPercent={pipe.progressPercent}
        />,
      );
    }
  });

  return elements;
};

export const Pipeline = (props: PipelineProps) => {
  return <span className={"qc-pipeline"}>{renderPipeline(props.schema)}</span>;
};

export default Pipeline;
