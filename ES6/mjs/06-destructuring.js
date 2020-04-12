/*===================CASE 1======================*/
// let arr = [133,"ES6",false];

// let id = arr[0];
// let name = arr[1];
// let free = arr[2]; //cach 1

// let[id, name, free] = arr;  //cach 2

// console.log(id + "-" + name + "-" + free);
/*===================CASE 2======================*/
let objCourse = {
	id: 456,
	name: "ES6",
	free: false,
	createdBy: "admin123"
}
let {name, id, free, createdBy = "admin"} = objCourse;
console.log(id + "-" + name + "-" + free + "-" + createdBy);
