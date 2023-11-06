import type { Meta, StoryObj } from '@storybook/react';

import { ReactPipeline } from './ReactPipeline';
import { PipelineIcon } from './icons';
import { ReactPipesIntent, ReactPipesSize } from './types';

const meta: Meta<typeof ReactPipeline> = {
    title: 'ReactPipeline',
    component: ReactPipeline,
  };

type Story = StoryObj<typeof ReactPipeline>;
  
export const Primary: Story = {
    args: {
      label: 'Pipeline',
      schema: [
        {
        icon:PipelineIcon.Icon2fa,
        intent:ReactPipesIntent.SUCCESS,
        active:false,
        retries:1,
        size:ReactPipesSize.S,
        },
        {
          intent:ReactPipesIntent.SUCCESS,
          active:false,
          size:ReactPipesSize.XS,
        },
        {
          icon:PipelineIcon.IconAward,
          intent:ReactPipesIntent.SUCCESS,
          active:false,
          retries:1,
          size:ReactPipesSize.S,
        },
        {
          intent:ReactPipesIntent.IN_PROGRESS,
          active:true,
          size:ReactPipesSize.XS,
        },
        {
          icon:PipelineIcon.IconClock,
          intent:ReactPipesIntent.IN_PROGRESS,
          active:true,
          size:ReactPipesSize.S,
        },
        {
          intent:ReactPipesIntent.NONE,
          active:false,
          size:ReactPipesSize.XS,
        },
        {
          icon:PipelineIcon.Icon3dRotate,
          intent:ReactPipesIntent.NONE,
          active:false,
          size:ReactPipesSize.S,
        },
      ]
    }
};
  
      
export default meta;