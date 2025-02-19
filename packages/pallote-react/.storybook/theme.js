import { create } from '@storybook/theming'

export default create({
  base: 'light',

  fontBase: '"Source Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Pallote',
  brandUrl: 'https://pallote.com',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',

  colorPrimary: '#C24889',
  colorSecondary: '#0076AC',

  appBg: '#F2F3F4',
  appContentBg: '#F2F3F4',
  appPreviewBg: '#FFFFFF',
  appBorderColor: 'rgba(0,0,0,0.1)',
  appBorderRadius: 8,

  textColor: '#000A1E',
  textInverseColor: '#FFFFFF',

  barTextColor: '#000A1E',
  barSelectedColor: '#0076AC',
  barHoverColor: '#585C6D',
  barBg: '#FFFFFF',

  inputBg: '#FFFFFF',
  inputBorder: 'rgba(0,0,0,0.1)',
  inputTextColor: '#000A1E',
  inputBorderRadius: 8,
})
