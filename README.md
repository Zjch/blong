这是一个简单的react练手小demo（个人博客）

## 项目下载及运行

将项目下载在本地之后,你需要依次进行命令行操作:

### `yarn add`

因为这个项目使用的是yarn进行包管理的，当然你可以使用npm<br>
下载项目依赖

### `yarn start`

运行项目,项目运行完成之后,可打开本地 http://localhost:3000/ 或者 http://192.168.4.115:3000/ 查看

### `yarn build`

项目打包,会在项目根目录生成build的文件夹<br>

## src文件夹模块划分

根据目前的编码经验,进行了一个模块化,公共组件的抽离 =.=

### /assets

静态资源文件夹,放一些,图片之类的

### /components

公共组件文件夹,放抽离出来的一些公共组件

### /router

路由文件夹,封装的路由js文件,类似vue的路由js

### /tool

工具文件夹,放一些类似时间戳转化的js小工具

### /views

页面文件夹,项目页面<br>
可以根据项目模块在进行细化分类

## 使用了antd UI,根据antd文档配置了按需加载

## 地址栏输入http://localhost:3000/markdown,可进入基于 react 开发的 markdown 编辑器 --> for-editor

使用箭头函数,O(∩_∩)O哈哈~ <br>

### 使用react-markdown,进行解析 markdown 语法
