import React from "react";
import ThemedButton from "../components/ThemedButton";
import { lightTheme, darkTheme } from "../themes";

export default {
  title: 'Button',
  component: ThemedButton,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: [lightTheme, darkTheme],
      },
    },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => <ThemedButton {...args} />;

export const LightTheme = Template.bind({});
  
LightTheme.args = {
    label: 'Hello, click Me',
    theme: lightTheme,
    disabled: false,
};

export const DarkTheme = Template.bind({});
  
DarkTheme.args = {
    label: 'Click Me',
    theme: darkTheme,
    disabled: false,
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  label: 'Cannot Click Me',
  theme: lightTheme,
  disabled: true,
};