import type { Meta, StoryObj } from '@storybook/react';

import { ReactPipes } from './ReactPipes';
import { PipelineIcon } from './icons';
import { ReactPipesIntent, ReactPipesSize } from './types';

const meta: Meta<typeof ReactPipes> = {
    title: 'Pipeline',
    component: ReactPipes,
  };

type Story = StoryObj<typeof ReactPipes>;
  
export const Primary: Story = {
    args: {
      label: 'Pipeline',
      schema: [
        {
        icon:PipelineIcon.Icon2fa,
        intent:ReactPipesIntent.SUCCESS,
        active:false,
        attempts:1,
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
          attempts:1,
          size:ReactPipesSize.S,
        },
        {
          intent:ReactPipesIntent.SUCCESS,
          active:false,
          size:ReactPipesSize.XS,
        },
        {
          icon:PipelineIcon.IconClock,
          intent:ReactPipesIntent.IN_PROGRESS,
          active:true,
          size:ReactPipesSize.S,
        },
        {
          intent:ReactPipesIntent.IN_PROGRESS,
          active:true,
          progressPercent: 30,
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

export const SkipPipeline: Story = {
  args: {
    label: 'Pipeline with skips',
    schema: [
      {
      icon:PipelineIcon.Icon2fa,
      intent:ReactPipesIntent.SUCCESS,
      active:false,
      attempts:1,
      size:ReactPipesSize.S,
      },
      {
        intent:ReactPipesIntent.SKIPPED,
        active:false,
        size:ReactPipesSize.XS,
      },
      {
        icon:PipelineIcon.IconAward,
        intent:ReactPipesIntent.SKIPPED,
        active:false,
        attempts:0,
        size:ReactPipesSize.S,
      },
      {
        intent:ReactPipesIntent.SKIPPED,
        active:false,
        size:ReactPipesSize.XS,
      },
      {
        icon:PipelineIcon.IconClock,
        intent:ReactPipesIntent.IN_PROGRESS,
        active:true,
        size:ReactPipesSize.S,
      },
      {
        intent:ReactPipesIntent.IN_PROGRESS,
        active:true,
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

export const Subpipeline: Story = {
  args: {
    label: 'Pipeline',
    schema: [
      {
      icon:PipelineIcon.Icon2fa,
      intent:ReactPipesIntent.SUCCESS,
      active:false,
      attempts:1,
      size:ReactPipesSize.M,
      },
      {
        intent:ReactPipesIntent.SUCCESS,
        active:false,
        size:ReactPipesSize.S,
      },
      {
        label: "Subpipeline",
        schema: [
          {
            icon:PipelineIcon.IconBrandAws,
            intent:ReactPipesIntent.SUCCESS,
            active:false,
            attempts:1,
            size:ReactPipesSize.S,
            },
            {
              intent:ReactPipesIntent.SUCCESS,
              active:false,
              size:ReactPipesSize.XS,
            },
            {
              icon:PipelineIcon.IconClick,
              intent:ReactPipesIntent.SUCCESS,
              active:false,
              attempts:1,
              size:ReactPipesSize.S,
            }
        ],
      },
      {
        intent:ReactPipesIntent.SUCCESS,
        active:false,
        size:ReactPipesSize.S,
      },
      {
        icon:PipelineIcon.IconAward,
        intent:ReactPipesIntent.SUCCESS,
        active:false,
        attempts:1,
        size:ReactPipesSize.M,
      },
      {
        intent:ReactPipesIntent.WARNING,
        active:true,
        size:ReactPipesSize.S,
      },
      {
        icon:PipelineIcon.IconClock,
        intent:ReactPipesIntent.WARNING,
        active:true,
        attempts:30,
        size:ReactPipesSize.M,
      },
      {
        intent:ReactPipesIntent.NONE,
        active:false,
        size:ReactPipesSize.S,
      },
      {
        icon:PipelineIcon.Icon3dRotate,
        intent:ReactPipesIntent.NONE,
        active:false,
        size:ReactPipesSize.M,
      },
    ]
  }
};
  
      
export default meta;