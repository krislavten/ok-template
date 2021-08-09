const { join } = require('path');

module.exports = {
  // 应用名称
  name: 'vue-v3-demo',
  entry: 'src',
  // 预设配置名称，根据应用类型填写
  presets: ['vue'],
  alias: {
    '@': join(__dirname, 'src'),
  },
};
