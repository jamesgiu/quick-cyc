import type { Meta, StoryObj } from '@storybook/react';

import { ReactPipesPipe } from './ReactPipesPipe';
import { ReactPipesIntent, ReactPipesSize } from '../types';

const meta: Meta<typeof ReactPipesPipe> = {
    title: 'Pipe',
    component: ReactPipesPipe,
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