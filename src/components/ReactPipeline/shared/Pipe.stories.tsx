import type { Meta, StoryObj } from '@storybook/react';

import { Pipe } from './Pipe';

const meta: Meta<typeof Pipe> = {
    title: 'Pipe',
    component: Pipe,
  };

type Story = StoryObj<typeof Pipe>;
  
export const Primary: Story = {
    args: {
      
    }
};

// Copy the code below
export const Warning: Story = {
    args: {
      
    }
  };
  
      
export default meta;