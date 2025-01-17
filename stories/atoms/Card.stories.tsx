import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Heading } from '../../src';
import { Card, CardProps } from '../../src';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const WithHeading = Template.bind({});
WithHeading.args = {
  children: (
    <Heading
      variant="texturina"
      textTransform="uppercase"
      fontSize={{ base: '16px' }}
      mb={5}
      textAlign="center"
    >
      Card Title
    </Heading>
  ),
};

export const Empty = Template.bind({});
Empty.args = {};
