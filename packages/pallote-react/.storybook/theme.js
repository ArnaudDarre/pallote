import { create } from '@storybook/theming'

export default create({
  base: 'light',

  fontBase: '"Source Sans 3", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Pallote',
  brandUrl: 'https://react.pallote.com',
  brandImage: 'https://pallote.com/logos/pallote-logo.svg',
  brandTarget: '_self',

  colorPrimary: '#9E6D04',
  colorSecondary: '#3C6BF4',

  appBg: '#F2F3F4',
  appContentBg: '#F2F3F4',
  appPreviewBg: '#FFFFFF',
  appBorderColor: 'rgba(0,0,0,0.1)',
  appBorderRadius: 8,

  textColor: '#000A1E',
  textInverseColor: '#FFFFFF',

  barTextColor: '#000A1E',
  barSelectedColor: '#3C6BF4',
  barHoverColor: '#585C6D',
  barBg: '#FFFFFF',

  inputBg: '#FFFFFF',
  inputBorder: 'rgba(0,0,0,0.1)',
  inputTextColor: '#000A1E',
  inputBorderRadius: 8,
})
