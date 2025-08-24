import React from "react";
import { PipelineIntent, PipelineSize } from "../../types";
// @ts-ignore
import * as allIcons from "@tabler/icons-react";
import { PipelineIcons } from "../../icons";
import "./PipelineNode.css";
import "../../../index.css";

export interface PipelineNodeProps {
  intent: PipelineIntent;
  active?: boolean;
  icon: PipelineIcons;
  size: PipelineSize;
  percentComplete?: number;
  attempts?: number;
  onNodeClick?: () => void;
  innerLabel?: string;
  outerLabel?: string;
  className?: string;
}

export const PipelineNode = (props: PipelineNodeProps) => {
  const IconToBeUsed = allIcons[props.icon];

  return (
    <span
      className={
        "qc-node-wrapper" +
        ` ${props.className} ${props.size} ${props.intent} ${props.active ? "qc-state-active" : ""} ${props.onNodeClick !== undefined ? "qc-clickable" : ""}`
      }
    >
      <span
        className={
          "qc-node" +
          ` ${props.percentComplete && props.percentComplete < 100 ? "qc-node-loading" : ""}`
        }
      >
        {props.attempts !== undefined &&
          props.intent !== PipelineIntent.SKIPPED && (
            <span
              className={"qc-top-right-icon" + ` ${props.size} ${props.intent}`}
            >
              {props.attempts}
            </span>
          )}

        {props.percentComplete && (
          <span
            className={"qc-node-percent-complete"}
            style={{ backgroundSize: props.percentComplete + "%" }}
          />
        )}

        {props.intent === PipelineIntent.SKIPPED && (
          <span
            className={"qc-top-right-icon" + ` ${props.size} ${props.intent}`}
          >
            <allIcons.IconPlayerSkipForwardFilled size={18} />
          </span>
        )}
        <span className={"qc-node-icon"} onClick={props.onNodeClick}>
          <IconToBeUsed />
          {props.innerLabel && (
            <span className={"qc-node-label"}>{props.innerLabel}</span>
          )}
        </span>

        {props.outerLabel && (
          <div className={"qc-node-outer-label" + ` ${props.intent}`}>
            <span className="qc-node-outer-label-inner">
              {props.outerLabel}
            </span>
          </div>
        )}
      </span>
    </span>
  );
};

export default PipelineNode;
