import type { Meta, StoryObj } from "@storybook/react-vite";

import { Demo } from "./Demo";

const meta: Meta<typeof Demo> = {
  title: "Demo",
  component: Demo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
};

type Story = StoryObj<typeof Demo>;

export const Primary: Story = {
  args: {},
};

export default meta;
