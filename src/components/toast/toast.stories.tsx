import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Toast from './toast';
import { ToastType, ToastSize } from './toast.type';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const SuccessToast: Story = {
  args: {
    type: 'success',
    size: 'medium',
    message: 'Give short additional message here.',
  },
};

export const ErrorToast: Story = {
  args: {
    type: 'error',
    size: 'medium',
    message: 'Give short additional message here.',
  },
};

export const WarningToast: Story = {
  args: {
    type: 'warning',
    size: 'medium',
    message: 'Give short additional message here.',
  },
};

export const NotificationToast: Story = {
  args: {
    type: 'notification',
    size: 'medium',
    message: 'Hello, world! This is a toast message.',
  },
};