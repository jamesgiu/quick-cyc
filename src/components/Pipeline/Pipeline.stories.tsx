import type { Meta, StoryObj } from '@storybook/react';

import { Pipeline } from './Pipeline';
import { PipelineIcons } from './icons';
import { PipelineIntent, PipelineSize } from './types';

const meta: Meta<typeof Pipeline> = {
    title: 'Pipeline',
    component: Pipeline,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs']
  };

type Story = StoryObj<typeof Pipeline>;
  
export const Primary: Story = {
    args: {
      label: 'Pipeline',
      schema: [
        {
        icon:PipelineIcons.Icon2fa,
        intent:PipelineIntent.SUCCESS,
        active:false,
        attempts:1,
        size:PipelineSize.M,
        },
        {
          intent:PipelineIntent.SUCCESS,
          active:false,
          size:PipelineSize.S,
        },
        {
          icon:PipelineIcons.IconAward,
          intent:PipelineIntent.SUCCESS,
          active:false,
          attempts:1,
          size:PipelineSize.M,
        },
        {
          intent:PipelineIntent.SUCCESS,
          active:false,
          size:PipelineSize.S,
        },
        {
          icon:PipelineIcons.IconClock,
          intent:PipelineIntent.IN_PROGRESS,
          active:true,
          size:PipelineSize.M,
        },
        {
          intent:PipelineIntent.IN_PROGRESS,
          active:true,
          progressPercent: 30,
          size:PipelineSize.S,
        },
        {
          icon:PipelineIcons.Icon3dRotate,
          intent:PipelineIntent.NONE,
          active:false,
          size:PipelineSize.M,
        },
      ]
    }
};

export const SkipPipeline: Story = {
  args: {
    label: 'Pipeline with skips',
    schema: [
      {
      icon:PipelineIcons.Icon2fa,
      intent:PipelineIntent.SUCCESS,
      active:false,
      attempts:1,
      size:PipelineSize.M,
      },
      {
        intent:PipelineIntent.SKIPPED,
        active:false,
        size:PipelineSize.S,
      },
      {
        icon:PipelineIcons.IconAward,
        intent:PipelineIntent.SKIPPED,
        active:false,
        attempts:0,
        size:PipelineSize.M,
      },
      {
        intent:PipelineIntent.SKIPPED,
        active:false,
        size:PipelineSize.S,
      },
      {
        icon:PipelineIcons.IconClock,
        intent:PipelineIntent.IN_PROGRESS,
        active:true,
        size:PipelineSize.M,
      },
      {
        intent:PipelineIntent.IN_PROGRESS,
        active:true,
        size:PipelineSize.S,
      },
      {
        icon:PipelineIcons.Icon3dRotate,
        intent:PipelineIntent.NONE,
        active:false,
        size:PipelineSize.M,
      },
    ]
  }
};

export const Subpipeline: Story = {
  args: {
    label: 'Pipeline',
    schema: [
      {
      icon:PipelineIcons.Icon2fa,
      intent:PipelineIntent.SUCCESS,
      active:false,
      attempts:1,
      size:PipelineSize.M,
      },
      {
        intent:PipelineIntent.SUCCESS,
        active:false,
        size:PipelineSize.S,
      },
      {
        label: "Subpipeline",
        schema: [
          {
            icon:PipelineIcons.IconBrandAws,
            intent:PipelineIntent.SUCCESS,
            active:false,
            attempts:1,
            size:PipelineSize.S,
            },
            {
              intent:PipelineIntent.SUCCESS,
              active:false,
              size:PipelineSize.XS,
            },
            {
              icon:PipelineIcons.IconClick,
              intent:PipelineIntent.SUCCESS,
              active:false,
              attempts:1,
              size:PipelineSize.S,
            }
        ],
      },
      {
        intent:PipelineIntent.SUCCESS,
        active:false,
        size:PipelineSize.S,
      },
      {
        icon:PipelineIcons.IconAward,
        intent:PipelineIntent.WARNING,
        active:true,
        attempts:1,
        size:PipelineSize.M,
      },
      {
        intent:PipelineIntent.WARNING,
        active:true,
        size:PipelineSize.S,
      },
      {
        icon:PipelineIcons.IconClock,
        intent:PipelineIntent.NONE,
        active:false,
        attempts:30,
        size:PipelineSize.M,
      },
      {
        intent:PipelineIntent.NONE,
        active:false,
        size:PipelineSize.S,
      },
      {
        icon:PipelineIcons.Icon3dRotate,
        intent:PipelineIntent.NONE,
        active:false,
        size:PipelineSize.M,
      },
    ]
  }
};

export const Annotated: Story = {
  args: {
    label: 'Annotated pipeline',
    schema: [
      {
      icon:PipelineIcons.Icon2fa,
      intent:PipelineIntent.SUCCESS,
      active:false,
      attempts:1,
      size:PipelineSize.M,
      outerLabel: "Auth",
      },
      {
        intent:PipelineIntent.SUCCESS,
        active:false,
        size:PipelineSize.S,
      },
      {
        icon:PipelineIcons.IconAward,
        intent:PipelineIntent.SUCCESS,
        active:false,
        attempts:1,
        size:PipelineSize.M,
        outerLabel: "Verify",
      },
      {
        intent:PipelineIntent.SUCCESS,
        active:false,
        size:PipelineSize.S,
      },
      {
        icon:PipelineIcons.IconClock,
        intent:PipelineIntent.IN_PROGRESS,
        active:true,
        size:PipelineSize.M,
        outerLabel: "Sleep",
      },
      {
        intent:PipelineIntent.IN_PROGRESS,
        active:true,
        progressPercent: 30,
        size:PipelineSize.S,
      },
      {
        icon:PipelineIcons.Icon3dRotate,
        intent:PipelineIntent.NONE,
        active:false,
        size:PipelineSize.M,
        outerLabel: "Restore",
      },
    ]
  }
};

  
      
export default meta;