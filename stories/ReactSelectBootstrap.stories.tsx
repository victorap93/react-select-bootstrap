import React from 'react';
import { Meta, Story } from '@storybook/react';

import { ReactSelectBootstrap, ReactSelectBootstrapProps } from '../src';

const meta: Meta = {
  title: 'React Select Bootstrap',
  component: ReactSelectBootstrap,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ReactSelectBootstrapProps> = args => <ReactSelectBootstrap {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  options: [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
    { value: "4", label: "Option 4" },
    { value: "5", label: "Option 5" }
  ]
};

export const Invalid = Template.bind({});

Invalid.args = {
  options: [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
    { value: "4", label: "Option 4" },
    { value: "5", label: "Option 5" }
  ],
  isInvalid: true
};