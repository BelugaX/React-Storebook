import React from "react";
import ThemedButton from "../components/ThemedButton";
import { lightTheme, darkTheme } from "../themes";

export default {
  title: 'Button',
  component: ThemedButton,
};

const Template = (args) => <ThemedButton {...args} />;

export const LightTheme = Template.bind({});
  
LightTheme.args = {
    label: 'Hello, click Me',
    theme: lightTheme,
};

export const DarkTheme = Template.bind({});
  
DarkTheme.args = {
    label: 'Click Me',
    theme: darkTheme,
};