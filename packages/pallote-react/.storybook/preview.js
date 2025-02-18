/** @type { import('@storybook/react').Preview } */
import '../src/index.scss'

const preview = {
  parameters: {
    actions: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
