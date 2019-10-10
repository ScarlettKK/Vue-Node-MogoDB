function add(a,b){
	return a+b;
}

function mul(a,b){
	return a*b;
}

// 同时exports多个函数的语法
module.exports = {
	add,
	mul
};