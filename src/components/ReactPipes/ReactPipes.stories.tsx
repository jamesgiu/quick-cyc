import type { Meta, StoryObj } from '@storybook/react';

import { ReactPipes } from './ReactPipes';
import { ReactPipesIcons } from './icons';
import { ReactPipesIntent, ReactPipesSize } from './types';

const meta: Meta<typeof ReactPipes> = {
    title: 'Pipeline',
    component: ReactPipes,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs']
  };

type Story = StoryObj<typeof ReactPipes>;
  
export const Primary: Story = {
    args: {
      label: 'Pipeline',
      schema: [
        {
        icon:ReactPipesIcons.Icon2fa,
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
          icon:ReactPipesIcons.IconAward,
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
          icon:ReactPipesIcons.IconClock,
          intent:ReactPipesIntent.IN_PROGRESS,
          active:true,
          size:ReactPipesSize.M,
        },
        {
          intent:ReactPipesIntent.IN_PROGRESS,
          active:true,
          progressPercent: 30,
          size:ReactPipesSize.S,
        },
        {
          icon:ReactPipesIcons.Icon3dRotate,
          intent:ReactPipesIntent.NONE,
          active:false,
          size:ReactPipesSize.M,
        },
      ]
    }
};

export const SkipPipeline: Story = {
  args: {
    label: 'Pipeline with skips',
    schema: [
      {
      icon:ReactPipesIcons.Icon2fa,
      intent:ReactPipesIntent.SUCCESS,
      active:false,
      attempts:1,
      size:ReactPipesSize.M,
      },
      {
        intent:ReactPipesIntent.SKIPPED,
        active:false,
        size:ReactPipesSize.S,
      },
      {
        icon:ReactPipesIcons.IconAward,
        intent:ReactPipesIntent.SKIPPED,
        active:false,
        attempts:0,
        size:ReactPipesSize.M,
      },
      {
        intent:ReactPipesIntent.SKIPPED,
        active:false,
        size:ReactPipesSize.S,
      },
      {
        icon:ReactPipesIcons.IconClock,
        intent:ReactPipesIntent.IN_PROGRESS,
        active:true,
        size:ReactPipesSize.M,
      },
      {
        intent:ReactPipesIntent.IN_PROGRESS,
        active:true,
        size:ReactPipesSize.S,
      },
      {
        icon:ReactPipesIcons.Icon3dRotate,
        intent:ReactPipesIntent.NONE,
        active:false,
        size:ReactPipesSize.M,
      },
    ]
  }
};

export const Subpipeline: Story = {
  args: {
    label: 'Pipeline',
    schema: [
      {
      icon:ReactPipesIcons.Icon2fa,
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
            icon:ReactPipesIcons.IconBrandAws,
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
              icon:ReactPipesIcons.IconClick,
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
        icon:ReactPipesIcons.IconAward,
        intent:ReactPipesIntent.WARNING,
        active:true,
        attempts:1,
        size:ReactPipesSize.M,
      },
      {
        intent:ReactPipesIntent.WARNING,
        active:true,
        size:ReactPipesSize.S,
      },
      {
        icon:ReactPipesIcons.IconClock,
        intent:ReactPipesIntent.NONE,
        active:false,
        attempts:30,
        size:ReactPipesSize.M,
      },
      {
        intent:ReactPipesIntent.NONE,
        active:false,
        size:ReactPipesSize.S,
      },
      {
        icon:ReactPipesIcons.Icon3dRotate,
        intent:ReactPipesIntent.NONE,
        active:false,
        size:ReactPipesSize.M,
      },
    ]
  }
};
  
      
export default meta;