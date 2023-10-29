import React from "react";
import "./ReactPipeline.css";
import Pipe from "./shared/Pipe";
import PipelineNode from "./shared/PipelineNode";

export interface ReactPipelineProps {
  label: string;
  schema: Array<typeof PipelineNode | typeof Pipe>
}


export const ReactPipeline = (props: ReactPipelineProps) => {
  return <button>{props.label}</button>;
};

export default ReactPipeline;