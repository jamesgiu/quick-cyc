import type { Meta, StoryObj } from '@storybook/react';

import { Demo } from './Demo';

const meta: Meta<typeof Demo> = {
    title: 'Demo',
    component: Demo,
  };

type Story = StoryObj<typeof Demo>;
  
export const Primary: Story = {
    args: {
    }
};

      
export default meta;