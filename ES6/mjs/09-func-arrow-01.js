function func01(name, age){
	return `func01 My name is ${name}, ${age} years old`;
}
console.log(func01("John", 69));


var func02 = function(name, age){
	return `func02 My name is ${name}, ${age} years old`;
}
console.log(func02("John", 69));


var func03 = (name, age) =>{
	return `func03 My name is ${name}, ${age} years old`;
}
console.log(func03("John", 69));


var func04 = (name, age) => `func04 My name is ${name}, ${age} years old`;
console.log(func04("John", 69));


var func05 = name =>{
	return `func05 My name is ${name}`;
}
console.log(func05("John"));


var func06 = () =>{
	return `func06 My name is `;
}
console.log(func06());