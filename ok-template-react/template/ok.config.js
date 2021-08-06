const { join } = require('path');

module.exports = {
  entry: [{
    path:  'src',
    name: 'index.tsx',
  }],
  name: 'ok-react-typescript-demo',
  presets: ['react'],
  plugins: {
    version: [
      {
        title: 'ok-react-typescript-demo',
        template: join(__dirname, 'public/index.html'),
      },
    ],
  },
};
