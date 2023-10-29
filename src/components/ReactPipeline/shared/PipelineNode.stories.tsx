import type { Meta, StoryObj } from '@storybook/react';

import { PipelineNode } from './PipelineNode';

const meta: Meta<typeof PipelineNode> = {
    title: 'PipelineNode',
    component: PipelineNode,
  };

type Story = StoryObj<typeof PipelineNode>;
  
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