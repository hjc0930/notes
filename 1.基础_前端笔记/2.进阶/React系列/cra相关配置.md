## 1.初始化

```bash
create-react-app my-app --template typescript
```

```bash
npm run eject
```

## 2.路由

```bash
npm i react-router-dom --save
```

- 配置

```tsx
// /src/routes/index.ts

import FirstTitle from "../components/FirstTitle";
import LastTitle from "../components/LastTitle";
import Home from "../pages/Home";
import List from "../pages/List";
import NotFount from "../pages/NotFount";

export interface IRoute {
  path: string;
  component: React.FC<any>;
  exact?: boolean;
}

export const mainRoutes: IRoute[] = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/list/:id',
    component: List,
    exact: true
  },
  {
    path: '/404',
    component: NotFount,
    exact: true
  }
];

export const bgRoutes = [
  {
    path: '/bg/first',
    component: FirstTitle,
    exact: true
  },
  {
    path: '/bg/last',
    component: LastTitle,
    exact: true
  }
]
```

- 使用

```tsx
// /src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import BgPage from './pages/BgPage';
import { IRoute, mainRoutes } from './routes/index';

const App: React.FC =() => {
  return (
    <Router>
      <Switch>
        {/* 循环渲染路由 */}
        {
          mainRoutes.map((route:IRoute) => {
            return <Route key={route.path} {...route} />
          })
        }
        {/* 嵌套路由写法.第一步 */}
        <Route path="/bg" render={(routeProps: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => <BgPage {...routeProps}/>} />

        {/* 404路由重定向 */}
        <Redirect to="/404"/>
      </Switch>
    </Router>
  );
}

export default App;
```

```tsx
// /src/pages/BgPage.tsx

import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import { bgRoutes, IRoute } from '../routes/index';

const BgPage: React.FC = ({children}) => {
  return(
    <div>
      <h1>这是后台</h1>
      <Switch>
        {/* 嵌套路由写法第二步 */}
        {
          bgRoutes.map((route: IRoute) => {
            return (
              <Route 
                key={route.path} 
                path={route.path} 
                exact={route.exact} 
                render={(routeProps: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) =>{
                  return <route.component {...routeProps}/>
                }}
               />
            )
          })
        }
        {/* 路由重定向 */}
        <Redirect to="/404"/>
      </Switch>
    </div>
  )
}

export default BgPage;
```

## 3.scss

```bash
npm i node-sass@4.41.1 sass-loader --save
```

- 使用
  - 所有`scss`文件均已`.module.scss`结尾

## 4.axios和代理

- proxy

```js
// /config/webpackDevServer.config.js
// `proxy` is run between `before` and `after` `webpack-dev-server` hooks
proxy: {
    '/api': {
      target: 'http://127.0.0.1:8080', // 后台服务地址以及端口号
      ws: true,
      changeOrigin: true, //是否跨域
      pathRewrite: { '^/api': '/' }
    }
},
```

- axiosConfig

```typescript
// /utils/axiosConfig.ts
import axios from 'axios'
 
axios.defaults.baseURL = "/api" // 跨域代理的符号，详细配置在config/webpackDevServer.config.js中的104~111行
const instance = axios.create({
  xsrfCookieName: 'xsrf-token'
});

instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error);
});
export default instance;
```

## 5.使用@符号代表src目录

- 参考掘金https://juejin.cn/post/6892636779850137608

```js
// config/webpack.config.js
// ...
// 使用的 3.4.3 版本的 react-scripts 生成的代码，这一部分配置大约在 280 行左右
resolve {
    // 在 alias 下进行配置 more configuration
    alias: {
        // ...
        // 添加一行配置
        // paths.appSrc 就是 src 目录的路径
        '@': paths.appSrc
    }
}
// ...
```

```json
// tsconfig.json
{
  "compilerOptions": {
     // 在 compilerOptions 内添加如下配置
     "baseUrl": ".",
     "paths": {
       // 注意哦，是 "@/*" 后面的 "/*" 不能少
       "@/*": [
          "src/*"
        ]
     }
   }
}
```

## 6.mobx

### 1.安装依赖

- mobx安装

```bash
npm i mobx mobx-react --save
```

- 装饰器配置

```bash
cnpm install  babel-plugin-transform-decorators-legacy   -D

# 装饰器的检测
cnpm i @babel/plugin-proposal-decorators -D

# es6,es7语法检测
cnpm i @babel/preset-env -D

cnpm i babel-plugin-transform-class-properties -D
```

- package.json

```json
# 配置 babel
"babel": {
    "plugins": [
        [
            "@babel/plugin-proposal-decorators",
            {
                "legacy": true
            }
        ],
        "transform-class-properties"
    ],
    "presets": [
        "react-app",
        "@babel/preset-env"
    ]
},
```

### 2.使用

- stores目录下

```ts
// /stores/main.ts
import { observable, action, makeObservable } from 'mobx';

export interface IMainStore {
  count: number;
  getCount: () => void;
}

class mainStore implements IMainStore {
  constructor() {
    makeObservable(this);
  }

  @observable count: number = 0;

  @action getCount = (): void => {
    this.count = this.count + 1;
  }
}

export default new mainStore();
```

```ts
// stores/index.ts
import { createContext, useContext } from 'react';
import mainStore from './main';

// 实例化main
export const mainStoreContext = createContext(mainStore);
export const useMainStore = () => useContext(mainStoreContext);

```

- pages目录下

```tsx
// pages/Background.tsx

import React from 'react';
import mainStore from '@/stores/main';
import { mainStoreContext } from '@/stores/index';
import BgMian from '@/components/BgMian';

const Background: React.FC = () => {
  return(
    <mainStoreContext.Provider value={mainStore}>
      <BgMian />
    </mainStoreContext.Provider>
  )
}

export default Background;

```

- components目录下

```tsx
import React from 'react';
import { observer } from 'mobx-react';
import { useMainStore } from '@/stores/index';

const BgMain: React.FC = () => {
  const { count, getCount } = useMainStore();
  return(
    <div className="bgMain">
      <p>{count}</p>
      <button onClick={() => {getCount()}}>+1</button>
    </div>
  )
}

export default observer(BgMain);
```

## 7.antd

- 安装

```bash
npm i antd --save
npm i @ant-design/icons --save
```

- 按需加载

```bash
npm i babel-plugin-import --save-dev
```

```json
// package.json
"babel": {
    "plugins": [
        [
            "import",
            {
                "libraryName": "antd",
                "libraryDirectory": "es",
                "style": "css"
            }
        ]
    ]
}
```