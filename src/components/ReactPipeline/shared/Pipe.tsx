import React from "react";
import { ReactPipesIntent } from "../types";

export interface PipeProps {
    intent: ReactPipesIntent
}

export const Pipe = (props: PipeProps) => {
    return "yo";
  };
  
  export default Pipe;