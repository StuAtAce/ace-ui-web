import type { Meta, StoryObj } from '@storybook/react';
// import { within, userEvent, expect } from '@storybook/test';
import ColorPage from '../screens/color-page/ColorPage';

const meta = {
  title: 'Ace-UI/Colors',
  component: ColorPage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ColorPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Colors: Story = {};