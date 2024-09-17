import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import { MyButton } from './Button';

export default {
  title: 'Example/Button',
  component: MyButton,
} as Meta<typeof MyButton>;

const Template: StoryFn<typeof MyButton> = (args) => <MyButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Don't click me",
  onClick: action('button-clicked'), // Используем action для отслеживания клика
};
