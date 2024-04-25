import { useEffect } from "react";
import React, { useState } from "react";
import "./Demo.css";
import Pipeline from "../Pipeline";
import { PipelineIcons } from "../Pipeline/icons";
import { PipelineIntent, PipelineSize } from "../Pipeline/types";

export const Demo = () => {

    const [percentComplete, setPercentComplete] = useState<number>(0);

    const increasePercent = ()=> {
        setPercentComplete(percentComplete+0.5);
    }

    useEffect(()=> {
        setTimeout(increasePercent, 30);
    }, []);

    useEffect(()=> {
        if (percentComplete < 100) {
            setTimeout(increasePercent, 30);
        }
    }, [percentComplete]);

    return (
    <span className={"qc-pipeline-demo"}>
      <Pipeline
        label= {'Pipeline'}
        schema={[
          {
          icon:PipelineIcons.Icon2fa,
          intent:PipelineIntent.SUCCESS,
          active:false,
          attempts:1,
          size:PipelineSize.M,
          },
          {
            intent:PipelineIntent.SUCCESS,
            active:false,
            size:PipelineSize.S,
          },
          {
            icon:PipelineIcons.IconAward,
            intent:PipelineIntent.SUCCESS,
            active:false,
            attempts:1,
            size:PipelineSize.M,
          },
          {
            intent:PipelineIntent.SUCCESS,
            active:false,
            size:PipelineSize.S,
          },
          {
            icon:PipelineIcons.IconClock,
            intent:percentComplete < 100 ? PipelineIntent.IN_PROGRESS : PipelineIntent.SUCCESS,
            active:percentComplete < 100 ? true : false,
            attempts: Math.round(percentComplete / 20),
            percentComplete: percentComplete,
            size:PipelineSize.M,
          },
          {
            intent:percentComplete < 100 ? PipelineIntent.IN_PROGRESS : PipelineIntent.SUCCESS,
            active:percentComplete < 100 ? true : false,
            progressPercent: percentComplete,
            size:PipelineSize.S,
          },
          {
            icon:PipelineIcons.Icon3dRotate,
            intent: percentComplete < 90 ? PipelineIntent.NONE : percentComplete < 100 ? PipelineIntent.IN_PROGRESS : PipelineIntent.SUCCESS,
            active:percentComplete < 90 ? true : false,
            size:PipelineSize.M,
            className: percentComplete > 90 && percentComplete < 100 ? "qc-wiggle" : undefined
          }
        ]}
        />
    </span>);
  }