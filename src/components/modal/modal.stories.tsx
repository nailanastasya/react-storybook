import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Modal from './modal';
import { ModalType, ModalSize } from './modal.type';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const RoundedModal: Story = {
  args: {
    type: 'rounded',
    size: 'medium',
    children: 'This is a modal with rounded corners.',
  },
};

export const SimpleModal: Story = {
  args: {
    type: 'simple',
    size: 'medium',
    children: 'This is a modal with simple corners.',
  },
};

export const SmallModal: Story = {
  args: {
    type: 'rounded',
    size: 'small',
    children: 'This is a small modal.',
  },
};

export const LargeModal: Story = {
  args: {
    type: 'simple',
    size: 'large',
    children: 'This is a large modal.',
  },
};