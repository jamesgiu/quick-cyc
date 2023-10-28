import React from "react";
import "./ReactPipeline.css";

export interface ReactPipelineProps {
  label: string;
}

export const ReactPipeline = (props: ReactPipelineProps) => {
  return <button>{props.label}</button>;
};

export default ReactPipeline;