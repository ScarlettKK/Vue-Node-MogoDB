// ES6解构赋值语法
const {add, mul} = require('./a')
// 从node_modules中导入lodash库
const _ = require('lodash')

const sum = add(10, 20)
const m = mul(10, 20)

console.log(sum, m)
// run: $ node b.js 


// lodash是一个一致性、模块化、高性能的 JavaScript 实用工具库。 
// 它内部封装了诸多对字符串、数组、对象等常见数据类型的处理函数, 其中部分是目前ECMAScript尚未制订的规范，但同时被业界所认可的辅助函数。

// Lodash 通过降低 array、number、objects、string 等等的使用难度从而让 JavaScript 变得更简单。
// Lodash 的模块化方法 非常适用于：
//	遍历 array、object 和 string
//	对值进行操作和检测
//	创建符合功能的函数

// Lodash就是这样的一个工具库，方便我们在日常的开发中对数据的操作，
// 特别是数组和对象的各种读写等操作，比如去重，拷贝，合并，过滤，求交集，求和等等，提高开发效率。
const arr = _.concat([1, 2], 3)
console.log('arr', arr)