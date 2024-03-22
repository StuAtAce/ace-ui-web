import type { Meta, StoryObj } from '@storybook/react';
import ImageSlider from '../components/item-detail/ImageSlider';

const imageSliderMeta = {
  title: 'Example/Item Details/Image Slider',
  component: ImageSlider,
  parameters: {
    layout: 'centered'
  }, 
  tags: ['autodocs'],
  argTypes: {
    images: ['https://cdn-tp3.mozu.com/24645-m1/cms/files/060123-c-roundup.png']
  }
} satisfies Meta<typeof ImageSlider>;

export default imageSliderMeta;

type Story = StoryObj<typeof imageSliderMeta>;

export const Mobile: Story = {
  args: {
    images: ['https://cdn-tp3.mozu.com/24645-m1/cms/files/020123-c-weber-grill.png', 'https://cdn-tp3.mozu.com/24645-m1/cms/files/020123-c-lawn-mower.png', 'https://cdn-tp3.mozu.com/24645-m1/cms/files/060123-c-roundup.png']
  }
}
export const Web: Story = {
  args: {
    platform: 'web',
    images: ['https://cdn-tp3.mozu.com/24645-m1/cms/files/020123-c-weber-grill.png', 'https://cdn-tp3.mozu.com/24645-m1/cms/files/020123-c-lawn-mower.png', 'https://cdn-tp3.mozu.com/24645-m1/cms/files/060123-c-roundup.png']
  }
}