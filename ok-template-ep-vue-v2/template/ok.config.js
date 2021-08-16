/* eslint-disable no-undef */
/* eslint-disable quote-props */
const { join } = require('path');

module.exports = {
  entry: 'src',
  name: 'ep-vue-template',
  presets: ['vue'],
  plugins: {
    babel: {
      presets: ['@yuanfudao/babel-preset-vue'],
    },
    style: {
      loaderOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true,
        },
      },
      commonLessSourcePath: [
        join(__dirname, 'src/assets/css/common.less'),
        join(__dirname, 'src/assets/styles/lessVariable.less'),
      ],
    },
    dll: [
      {
        name: 'components',
        include: ['ant-design-vue'],
        prodCache: true,
      },
      {
        name: 'library',
        include: ['@fenbi/ep-vue-use', 'axios', '@vue/composition-api'],
        prodCache: true,
      },
    ],
    version: {
      title: 'ep-vue-template',
      template: join(__dirname, 'public/index.html'),
    },
  },
  alias: {
    '@': join(__dirname, 'src'),
  },
};
