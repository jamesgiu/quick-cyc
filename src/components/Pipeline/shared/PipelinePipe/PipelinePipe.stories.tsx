import type { Meta, StoryObj } from '@storybook/react';

import { PipelinePipe } from './PipelinePipe';
import { PipelineIntent, PipelineSize } from '../../types';

const meta: Meta<typeof PipelinePipe> = {
    title: 'Pipe',
    component: PipelinePipe,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs']
  };

type Story = StoryObj<typeof PipelinePipe>;
  
export const Primary: Story = {
    args: {
      intent: PipelineIntent.IN_PROGRESS,
      active: true,
      size: PipelineSize.M,
    }
};
  
  
export const Progress: Story = {
  args: {
    intent: PipelineIntent.IN_PROGRESS,
    active: true,
    size: PipelineSize.M,
    progressPercent: 30,
  }
};

      
export default meta;