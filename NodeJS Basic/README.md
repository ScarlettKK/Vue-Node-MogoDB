# NodeJS 基础

看了一眼要整一个微信公众号后台管理系统,需要提前有 nodejs + 线上部署服务器的基础

那么我们就先从nodejs基础开始

参考课程: [慕课网]前端晋升全栈工程师必备课程 Node.js 从零开发web server博客项目

## NodeJs 介绍

### 下载&安装

普通方式(见百度各大安装教程以及官网,这里不作赘述)

使用NVM

	NVM是一种nodejs版本管理工具,可以自由切换多个nodejs版本, 当同时开发多个不同node版本的项目的时候(也就是需要同时使用多个node版本), 比较有帮助
	mac系统建议使用brew install安装(安装 以及 使用教程 见百度各大安装教程以及官网,这里不作赘述)

### nodejs 和 前端js 的区别

ECMAScript

语法规范

	定义了语法, 无论是前端的js还是nodejs都必须遵守
	语法包括变量定义、循环、判断、函数
	作用域作用域链、原型原型链、异步

	不能操作DOM、不能监听click事件、不能发送AJAX请求
	不能处理HTTP请求,不能操作文件

	即,只有ECMAScript,几乎做不了任何实际的项目,只能写一些理论性的算法

前端js

前端js = ECMAScript + webAPI

	使用ECMAScript语法规范,外加webAPI,缺一不可
	DOM操作、BOM操作、事件绑定、AJAX请求等等
	两者结合,即可完成浏览器端的任何操作

nodejs

nodejs = ECMAScript + nodejs API

	使用ECMAScript语法规范,外加nodejs API,缺一不可
	处理http、处理文件等
	两者结合,即可完成server端的任何操作

补充

	commonjs 模块化
	nodejs debugger

### server开发 和 前端开发 的区别
