import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { PipelineIntent, PipelineSize } from "../../types";
import { PipelineIcons } from "../../icons";
import PipelineNode from "./PipelineNode";

const meta: Meta<typeof PipelineNode> = {
  title: "PipelineNode",
  component: PipelineNode,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

type Story = StoryObj<typeof PipelineNode>;

export const Primary: Story = {
  args: {
    onNodeClick: () => {
      console.log("Clicked!");
    },
    intent: PipelineIntent.IN_PROGRESS,
    active: true,
    icon: PipelineIcons.Icon2fa,
    size: PipelineSize.M,
    attempts: 2,
    percentComplete: 80,
    outerLabel: "Deploy",
  },
};

export default meta;
