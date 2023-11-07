import type { Meta, StoryObj } from '@storybook/react';

import { ReactPipesIntent, ReactPipesSize } from '../types';
import { PipelineIcon } from '../icons';
import ReactPipesNode from './ReactPipesNode';

const meta: Meta<typeof ReactPipesNode> = {
    title: 'PipelineNode',
    component: ReactPipesNode,
  };

type Story = StoryObj<typeof ReactPipesNode>;
  
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