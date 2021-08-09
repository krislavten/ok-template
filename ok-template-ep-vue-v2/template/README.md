# 项目名

项目简要描述

## 安装 yarn

npm 在依赖安装速度上有劣势，建议使用 yarn 管理依赖

```
npm install yarn -g
```

## 安装依赖

```
npm install @yuanfudao/ok-cli -g --registry=http://npm.zhenguanyu.com
yarn install
```

## 本地开发

```
yarn dev
```

## 构建

```
yarn build
```

## 相关日期

- 开始时间：
- 上线时间：

## 相关人员

- 产品经理：
- 交互/视觉设计：
- 前端开发：
- 后端开发：

## 开发环境

- nodejs 12 及以上，建议使用 NVM 管理本地 node 版本

## 部署地址

代码里约定，`process.env.NODE_ENV === 'production'` 会认为是正式服，`process.env.NODE_ENV === 'development'` 会认为是测试服。

- 测试服：
- 正式服：

## 文档地址

### 需求文档

-

### 交互设计文档 / 视觉设计文档

-

### api 接口地址

-

api 生成： 请在 ytt.config.js 文件中填写 token 字段。然后执行 `npx ytt` , 即可根据 yapi 文档网站上的数据生成 api 接口定义。

### 项目排期

-

### 测试用例

-

### 目录结构说明

. ├── babel.config.js # babel 的配置文件 ├── initGit.sh # clone 下来的项目需要运行下 sh initGit.sh yourLdap 用来生成 commit 的 changeID ├── jest.config.js # 单元测试--目前用不到 ├── jsconfig.json # 自动提示路径 ├── public │   ├── index.html # 页面根 html ├── saber.yml # 测试/上线部署文件 ├── src │   ├── api # 接口相关 │   │   ├── axios.js # 接口配置 │   │   └── index.js # API 接口目录 │   ├── assets # 放置静态资源 │   │   ├── img # 放置所有图片 │   │   └── styles # 放置所有公共样式文件 │   │   ├── common.less # 页面公用样式设置 │   │   └── lessVariable.less# 公用 less 变量/函数。。 │   ├── components # 业务组件 │   ├── constants # 常量，用来放置可以从业务中抽离出来的常量或配置项 │   ├── main.js # 入口文件 │   ├── router │   │   └── index.js # 路由配置文件 │   ├── store │   │   └── index.js # Vuex 状态管理文件 │   ├── utils # 放置不依赖第三方库的脚本文件，比如公共函数 │   │   ├── number.js # 处理数字的公共函数 │   │   └── time.js # 处理时间的公共函数 │   └── views # 放置页面 └── ok.config.js # ok 全局配置文件
