import { useEffect } from "react";
import React, { useState } from "react";
import ReactPipeline from "./ReactPipeline";
import { PipelineIcon } from "./ReactPipeline/icons";
import { ReactPipesIntent, ReactPipesSize } from "./ReactPipeline/types";

export const Demo = () => {

    const [percentComplete, setPercentComplete] = useState<number>(0);

    const increasePercent = ()=> {
        setPercentComplete(percentComplete+0.5);
    }

    useEffect(()=> {
        setTimeout(increasePercent, 60);
    }, []);

    useEffect(()=> {
        if (percentComplete < 100) {
            setTimeout(increasePercent, 60);
        }
    }, [percentComplete]);

    return (
    <span className={"rp-pipeline-demo"}>
      <ReactPipeline
        label= {'Pipeline'}
        schema={[
          {
          icon:PipelineIcon.Icon2fa,
          intent:ReactPipesIntent.SUCCESS,
          active:false,
          attempts:1,
          size:ReactPipesSize.S,
          },
          {
            intent:ReactPipesIntent.SUCCESS,
            active:false,
            size:ReactPipesSize.XS,
          },
          {
            icon:PipelineIcon.IconAward,
            intent:ReactPipesIntent.SUCCESS,
            active:false,
            attempts:1,
            size:ReactPipesSize.S,
          },
          {
            intent:ReactPipesIntent.SUCCESS,
            active:false,
            size:ReactPipesSize.XS,
          },
          {
            icon:PipelineIcon.IconClock,
            intent:percentComplete < 100 ? ReactPipesIntent.IN_PROGRESS : ReactPipesIntent.SUCCESS,
            active:percentComplete < 100 ? true : false,
            attempts: Math.round(percentComplete / 20),
            size:ReactPipesSize.S,
          },
          {
            intent:percentComplete < 100 ? ReactPipesIntent.IN_PROGRESS : ReactPipesIntent.SUCCESS,
            active:percentComplete < 100 ? true : false,
            progressPercent: percentComplete,
            size:ReactPipesSize.XS,
          },
          {
            icon:PipelineIcon.Icon3dRotate,
            intent: percentComplete < 90 ? ReactPipesIntent.NONE : percentComplete < 100 ? ReactPipesIntent.IN_PROGRESS : ReactPipesIntent.SUCCESS,
            active:percentComplete < 90 ? true : false,
            size:ReactPipesSize.S,
          }
        ]}
        />
    </span>);
  }