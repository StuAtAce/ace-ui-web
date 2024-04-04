import type { Meta, StoryObj } from '@storybook/react';
import QuantityStepper from '../components/quantity-stepper';

const quantityStepperMeta = {
  title: 'Ace-UI/Item Detail/Quantity',
  component: QuantityStepper,
  parameters: {
    layout: 'centered'
  }, 
  tags: ['autodocs'],
  argTypes: {
    style: {display: 'flex'}
  }
} satisfies Meta<typeof QuantityStepper>;

export default quantityStepperMeta;

type Story = StoryObj<typeof QuantityStepper>;

export const Stepper: Story = {
  args: {
    style: {display: 'flex'},
    stepVal: 1,
  }
}
