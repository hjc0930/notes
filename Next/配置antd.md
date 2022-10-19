# Next配置antd按需加载

## 需要的依赖

```json
"antd": "^4.21.0",
"next": "^12.1.0",

"less": "^4.1.2",
"less-loader": "^10.2.0",

//让 Next.js 支持 less
// (官方只支持 sass, 而且官方以后也不会添加 less 的支持)
"next-with-less": "^2.0.5",

// 处理一下 node_modules 中的 antd ,让 Next.js 可以引入 antd 的 css 文件
"next-transpile-modules": "^9.0.0",

// 配置 antd 按需导入  ( 上面的插件都是前置条件, 要不然就报错)
// 虽然 Next.js v12.1 加入了swc,
// 但 swc 暂时还没有提供 `babel-plugin-import` 类似的功能,
// 以后有了就不需要本文的方法了, )
"babel-plugin-import": "^1.13.5",
```

## next.config.js

```js
let plugins = require("next-compose-plugins");
let withLess = require("next-with-less");

const withTM = require("next-transpile-modules")(["antd", "@ant-design/icons"]);

let { resolve } = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 这里都是默认的配置, 与本文无关
};

let config = [
  [
    withLess,
    {
      lessLoaderOptions: {
        lessOptions: {
          modifyVars: {
            hack: `true;@import (reference) "${resolve(__dirname, './styles/variables.less')}";`,
          },
        },
      },
      javascriptEnabled: true,
    }
  ],
  [withTM]
];

module.exports = plugins(config, nextConfig);
```

创建`styles/variables.less`

```less
@primary-color: rgb(0, 0, 0); // 黑色
@menu-dark-item-active-bg : rgb(192, 3, 255); // 紫色
```

`.babelrc`

```json
{
    //Next.js的总配置文件，相当于继承了它本身的所有配置
    "presets": [
        "next/babel"
    ],
    "plugins": [
        [
            //增加新的插件，antd 按需引入
            "import",
            {
                "libraryName": "antd",
                "libraryDirectory": "es",
                "style": true
                // true 是加载 LESS 相关的 "es/style/index.js"
                // 如果改为 "css", 则是 CSS 相关的 "es/style/css.js"
            }
        ]
    ]
}
```