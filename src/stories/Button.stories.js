import React, { useState } from "react";
import ThemedButton from "../components/ThemedButton";
import { lightTheme, darkTheme } from "../themes";
import Dropdown from "../components/Dropdown";
import { options } from "../options";
import { colorMap } from "../colors";

export default {
  title: 'Button with Dropdown',
  component: ThemedButton,
};

const Template = (args) => {
  const [selectedOption, setSelectedOption] = useState('default');

  const getStyle = () => {
    switch (selectedOption) {
      case 'rounded': 
        return {
          borderRadius: '15px'
        };
      case 'shadow':
        return {
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        };
      default:
        return {};
    }
  };

  return (
    <div>
      <label>Select Color</label><br />
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
      <ThemedButton label="Click Me" theme={colorMap[selectedOption]} style={getStyle()} {...args} />
    </div>
  );
};

export const LightTheme = Template.bind({});
  
LightTheme.args = {
    label: 'Click Me - light',
    theme: lightTheme,
};

export const DarkTheme = Template.bind({});
  
DarkTheme.args = {
    label: 'Click Me - dark',
    theme: darkTheme,
};

export const Default = Template.bind({});