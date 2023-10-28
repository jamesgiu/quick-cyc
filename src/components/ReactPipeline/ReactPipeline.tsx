import React from "react";
import "./ReactPipeline.css";

export interface ReactPipelineProps {
  label: string;
}

const Button = (props: ReactPipelineProps) => {
  return <button>{props.label}</button>;
};

export default Button;