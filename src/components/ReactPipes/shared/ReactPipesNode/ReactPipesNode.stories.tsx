import type { Meta, StoryObj } from '@storybook/react';

import { ReactPipesIntent, ReactPipesSize } from '../../types';
import { ReactPipesIcons } from '../../icons';
import ReactPipesNode from './ReactPipesNode';

const meta: Meta<typeof ReactPipesNode> = {
    title: 'PipelineNode',
    component: ReactPipesNode,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs']
  };

type Story = StoryObj<typeof ReactPipesNode>;
  
export const Primary: Story = {
    args: {
      onNodeClick: ()=> {console.log("Clicked!")},
      intent: ReactPipesIntent.IN_PROGRESS,
      active: true,
      icon: ReactPipesIcons.Icon2fa,
      size: ReactPipesSize.M,
      attempts: 2,
      percentComplete: 30,
    }
};


export default meta;