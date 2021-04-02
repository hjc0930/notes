## 1.nvm下载

**nvm是node.js的版本管理工具，使用nvm安装node，可以实现node版本的快速切换**

windows电脑下载`nvm-setup.zip`的安装包即可

### 下载地址

[nvm-download](https://github.com/coreybutler/nvm-windows/releases)

[nvm-setup.zip(v1.1.7)](https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-setup.zip)

## 2.nvm常用的几个命令

| 命令                        | 说明                                                  |
| --------------------------- | ----------------------------------------------------- |
| **nvm list available**      | **显示可以安装的所有node.js的版本**                   |
| **nvm list**                | **显示所有已安装的node.js版本**                       |
| **nvm use <version>**       | **切换到指定的nodejs版本**                            |
| **nvm install <version>**   | **安装指定版本的node.js，例如：nvm install 8.12.0**   |
| **nvm uninstall <version>** | **卸载指定版本的node.js，例如：nvm uninstall 8.12.0** |
| **nvm on**                  | **启用node.js版本管理**                               |
| **nvm off**                 | **禁用node.js版本管理(不卸载任何东西)**               |

## 3.npm管理

使用 `nvm` 时，默认的 `prefix` 是当前激活的 Node.js 版本的安装路径。

带来一个问题是：切换版本之后，之前安装全局命令模块需要重新安装，非常不方便。

解决方案是配置统一的全局模块安装路径。

新建`npm_global`和`npm_cache`文件夹，分别用于npm包的全局安装路径和全局cache路径

### npm查看各种全局路径的命令

- **查看当前npm包的全局安装路径**

```shell
npm prefix -g 
```

- **查看当前npm包的全局cache路径**

```shell
npm config get cache
```

- **查看配置列表**

```shell
npm config ls
```

- **查看配置列表的全部信息**

```shell
npm config ls -l
```

**【注】每次使用nvm切换node版本，最好都查看一下npm全局配置路径是否失效**

### npm修改全局路径命令

- **修改npm的包的全局安装路径**

```shell
npm config set prefix "E:\NodeJs\npm\npm_global"
```

- **修改npm的包的全局cache位置**

```shell
npm config set cache "E:\NodeJs\npm\npm_cache"
```

### 配置环境变量

将`npm`包全局安装路径配置在环境变量中

此电脑 -> 属性 -> 高级系统设置 -> 环境变量 -> 系统变量 -> path ->编辑 - > 新增路径 -`E:\NodeJs\npm\npm_global`（路径可以根据npm prefix -g查看）

## 4.yarn管理

- **安装yarn**

```shell
npm install yarn -g
yarn -v
```

**【注】如果首次安装`yarn`后，运行`yarn -v`不能显示`yarn`的版本，可以重启一下终端再尝试**

yarn的默认缓存和存储包的路径都在C盘，所以最好在安装后也进行修改

### yarn查看各种路径命令

- **查看 yarn 全局bin位置(prefix)**

```bash
yarn global bin
```

- **查看 yarn 全局安装位置(folder)**

```shell
yarn global dir
```

- **查看 yarn 全局cache位置(cache)**

```shell
yarn cache dir
```

- **查看配置列表**

```shell
yarn config list
```

### yarn修改路径命令

- **改变 yarn 全局bin位置(prefix)**

```shell
yarn config set prefix "E:\NodeJs\npm\yarn_bin"
```

- **改变 yarn 全局安装位置(folder)**

```shell
yarn config  set global-folder "E:\NodeJs\npm\yarn_dir"
```

- **改变 yarn 全局cache位置(cache)**

```shell
yarn config set cache-folder "E:\NodeJs\npm\npm_cache"
```

### 配置环境变量

将`E:\NodeJs\npm\yarn_bin`填加到环境变量的path变量中，主要该目录下是否有自动生成的`bin`目录，若有，则添加`E:\NodeJs\npm\yarn_bin\bin`