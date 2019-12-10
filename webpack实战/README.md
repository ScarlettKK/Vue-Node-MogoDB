# webpack实战

## webpack出现原因

前端功能越发复杂 从单纯的界面+逻辑 发展到界面+逻辑+router+data

组件化、模块化思想的发展

单一架构 -> MVC -> MVVM

预处理语言需要编译之后才可以在浏览器中使用

这里还对不同的模块化方案进行了特别介绍, 详情见扩展知识.md “AMD、CMD、CommonJs、ES6的对比”

## webpack支持的模块化方案

AMD(RequireJS)

ES6 modules(推荐)

CommonJS(因为webpack本来就是一个基于nodejs的工具)

以及css模块化...[CSS模块化详解参考链接](https://blog.csdn.net/wulala_hei/article/details/84633258)

这里的css模块化BEM方案进行了特别介绍, 详情见扩展知识.md “BEM”

## webpack 概述

打包工具 基于nodejs

### webpack 版本更迭

v1

	编译、打包
	HMR(模块热更新)
	代码分割(模块化)
	文件处理(css、图片、文件等等)

v2

	tree shaking(打包的时候丢掉不要的代码)
	ES module(不再需要bable编译才可使用)
	动态import(与ES module的import不同,是自己写的一个函数)

v3

	scope hoisting(作用域提升,加快打包之后的性能,不再每一个函数一个单独的闭包,而是集合多个函数一个闭包)
	magic comments(配合动态import使用)

v4

	2018.2.25发布
	版本变化(插件和loder版本都有所升级)
	配置变化
		主要是增加了model配置项,用于区分开发环境和测试环境,分别有针对性的优化
		webpack.optimize.CommonsChunkPlugin被取消, 取而代之的是 config.optimization.splitChunk, 作为webpack内置的配置项去配置
		参考: https://segmentfault.com/a/1190000014247030?utm_source=tag-newest、 https://www.imooc.com/article/23555
	插件变化

## webpack 核心概念

entry

output

loaders

	模块转换器，用于把模块原内容按照需求转换成新内容
	通过使用不同的Loader，Webpack可以要把不同的文件都转成JS文件,比如CSS、ES6/7、JSX等

plugins

	扩展插件
	在 Webpack 构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情
	一个插件是含有apply方法的一个对象，通过这个方法可以参与到整个webpack打包的各个流程

***loader是用来对模块的源代码进行转换***,而插件目的在于解决 loader 无法实现的其他事
因为***plugin可以在任何阶段调用***,能够跨Loader进一步加工Loader的输出

其他名词

	chunk
		代码块，一个chunk由多个模块组合而成，用于代码的合并和分割
	bundle
		是由webpack打包出来的文件
	module
		是开发中的单个模块，一个模块对应一个文件，webpack会从配置的entry中递归开始找出所有依赖的模块

## 如何使用webpack

webpack 命令行

webpack 配置

脚手架(如各大框架的cli, 如ag-cli、vue-cli等等)

## 打包JS实战

webpack支持所有形式的模块化方案, 包括AMD、CMD、ES module, 即使这三种语法同时出现在一个文件里面也可以编译打包





