import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AbCard } from '../src';

export default {
  title: 'Component/AbCard',
} as ComponentMeta<typeof AbCard>;

const Template: ComponentStory<typeof AbCard> = ({ label, price, content }) => (
  <AbCard label={label} price={price} content={content} />
);

export const Component = Template.bind({});
