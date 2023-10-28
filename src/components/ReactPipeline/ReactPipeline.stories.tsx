import type { Meta, StoryObj } from '@storybook/react';

import { ReactPipeline } from './ReactPipeline';

const meta: Meta<typeof ReactPipeline> = {
    title: 'ReactPipeline',
    component: ReactPipeline,
  };

type Story = StoryObj<typeof ReactPipeline>;
  
export const Primary: Story = {
    args: {
      label: 'Click',
    }
};

// Copy the code below
export const Warning: Story = {
    args: {
      label: 'Delete now',
    }
  };
  
      
export default meta;