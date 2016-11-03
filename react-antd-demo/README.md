#基于React+Webpack+ES6+antd的独立项目


----------

## 项目截图

![](https://img.alicdn.com/tps/TB10sZlNVXXXXclXpXXXXXXXXXX-1425-673.gif)


## 使用方法

开发模式，启动本地服务。修改文件，自动编译（`不会打包输出到build文件夹，知识保存在内存`），浏览器自动刷新。
```js
npm run dev
```

文件打包，在build文件夹下生成`main.css`、`vendor.js`、`main.js`
```js
npm run build
```

## 具备功能

- 开发模式监听端口8888

- 修改保存文件的同时，浏览器实时刷新。

- css文件、三方js库文件，业务js文件分别打包。

- 引入了antd，本地开发的时候按需引入。
