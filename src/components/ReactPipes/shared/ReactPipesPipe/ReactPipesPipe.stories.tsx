import type { Meta, StoryObj } from '@storybook/react';

import { ReactPipesPipe } from './ReactPipesPipe';
import { ReactPipesIntent, ReactPipesSize } from '../../types';

const meta: Meta<typeof ReactPipesPipe> = {
    title: 'Pipe',
    component: ReactPipesPipe,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs']
  };

type Story = StoryObj<typeof ReactPipesPipe>;
  
export const Primary: Story = {
    args: {
      intent: ReactPipesIntent.IN_PROGRESS,
      active: true,
      size: ReactPipesSize.M,
    }
};
  
  
export const Progress: Story = {
  args: {
    intent: ReactPipesIntent.IN_PROGRESS,
    active: true,
    size: ReactPipesSize.M,
    progressPercent: 30,
  }
};

      
export default meta;