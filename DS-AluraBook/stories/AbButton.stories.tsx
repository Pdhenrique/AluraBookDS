import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AbButton } from '../src';

export default {
  title: 'Component/AbButton',
} as ComponentMeta<typeof AbButton>;

const Template: ComponentStory<typeof AbButton> = () => <AbButton />;

export const Component = Template.bind({});
