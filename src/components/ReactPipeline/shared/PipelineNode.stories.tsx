import type { Meta, StoryObj } from '@storybook/react';

import { PipelineNode } from './PipelineNode';
import { ReactPipesIntent, ReactPipesSize } from '../types';
import { PipelineIcon } from '../icons';

const meta: Meta<typeof PipelineNode> = {
    title: 'PipelineNode',
    component: PipelineNode,
  };

type Story = StoryObj<typeof PipelineNode>;
  
export const Primary: Story = {
    args: {
      onNodeClick: ()=> {console.log("Clicked!")},
      intent: ReactPipesIntent.IN_PROGRESS,
      active: true,
      icon: PipelineIcon.Icon2fa,
      size: ReactPipesSize.M,
      attempts: 2,
    }
};


export default meta;