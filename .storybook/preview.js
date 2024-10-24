import { themes } from '@storybook/theming';

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'Light', value: '#ffffff' },
      { name: 'Dark', value: '#000000' },
    ],
  },
  options: {
    theme: themes.light,
  },
};