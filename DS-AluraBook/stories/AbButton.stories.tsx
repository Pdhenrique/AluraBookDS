import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AbButton, abButtonProps } from '../src';

export default {
  argTypes: {
    children: {
      control: { type: 'text' },
      defaultValue: 'Button',
      name: 'children',
    },
    variant: {
      control: { type: 'select' },
      defaultValue: 'primary',
      name: 'variant',
      options: ['primary', 'secondary'],
    },
  },

  title: 'Component/AbButton',
} as ComponentMeta<typeof AbButton>;

const Template: ComponentStory<typeof AbButton> = args => (
  <AbButton {...args} />
);

export const ComponentPrimary = Template.bind({});

ComponentPrimary.args = { variant: 'primary' } as abButtonProps;

export const ComponentSecondary = Template.bind({});

ComponentSecondary.args = { variant: 'secondary' } as abButtonProps;
