import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Toast, { ToastProps } from './toast';

export default {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'danger', 'warning'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: 'radio',
      options: ['notification', 'information'],
    },
    message: {
      control: 'text',
      defaultValue: 'Success Message',
    },
    description: {
      control: 'text',
      defaultValue: 'Give short additional message here. Maximum 2 line.',
    },
    time: {
      control: 'text',
      defaultValue: '11 mins ago',
    },
    onClose: {
      action: 'clicked',
    },
  },
} as Meta<typeof Toast>;

const Template: StoryFn<typeof Toast> = (args: ToastProps) => <Toast {...args} />;

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  size: 'small',
  type: 'information',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  size: 'medium',
  type: 'notification',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  size: 'large',
  type: 'information',
};
