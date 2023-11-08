import { useEffect } from "react";
import React, { useState } from "react";
import "./Demo.css";
import ReactPipes from "../ReactPipes";
import { ReactPipesIcons } from "../ReactPipes/shared/ReactPipesNode/shared/icons";
import { ReactPipesIntent, ReactPipesSize } from "../ReactPipes/types";

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
    <span className={"rp-pipeline-demo"}>
      <ReactPipes
        label= {'Pipeline'}
        schema={[
          {
          icon:ReactPipesIcons.Icon2fa,
          intent:ReactPipesIntent.SUCCESS,
          active:false,
          attempts:1,
          size:ReactPipesSize.M,
          },
          {
            intent:ReactPipesIntent.SUCCESS,
            active:false,
            size:ReactPipesSize.S,
          },
          {
            icon:ReactPipesIcons.IconAward,
            intent:ReactPipesIntent.SUCCESS,
            active:false,
            attempts:1,
            size:ReactPipesSize.M,
          },
          {
            intent:ReactPipesIntent.SUCCESS,
            active:false,
            size:ReactPipesSize.S,
          },
          {
            icon:ReactPipesIcons.IconClock,
            intent:percentComplete < 100 ? ReactPipesIntent.IN_PROGRESS : ReactPipesIntent.SUCCESS,
            active:percentComplete < 100 ? true : false,
            attempts: Math.round(percentComplete / 20),
            percentComplete: percentComplete,
            size:ReactPipesSize.M,
          },
          {
            intent:percentComplete < 100 ? ReactPipesIntent.IN_PROGRESS : ReactPipesIntent.SUCCESS,
            active:percentComplete < 100 ? true : false,
            progressPercent: percentComplete,
            size:ReactPipesSize.S,
          },
          {
            icon:ReactPipesIcons.Icon3dRotate,
            intent: percentComplete < 90 ? ReactPipesIntent.NONE : percentComplete < 100 ? ReactPipesIntent.IN_PROGRESS : ReactPipesIntent.SUCCESS,
            active:percentComplete < 90 ? true : false,
            size:ReactPipesSize.M,
            className: percentComplete > 90 && percentComplete < 100 ? "rp-wiggle" : undefined
          }
        ]}
        />
    </span>);
  }