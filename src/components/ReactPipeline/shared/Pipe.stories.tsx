import type { Meta, StoryObj } from '@storybook/react';

import { Pipe } from './Pipe';
import { ReactPipesIntent, ReactPipesSize } from '../types';

const meta: Meta<typeof Pipe> = {
    title: 'Pipe',
    component: Pipe,
  };

type Story = StoryObj<typeof Pipe>;
  
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