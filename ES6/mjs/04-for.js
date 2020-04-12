let todoArr = [
	"Play football",
	"Coding",
	"Study TypeScript"
];
// console.log(todo);

/*==========CASE 1=============*/
// let length = todoArr.length;
// for (let i = 0; i < length ; i++) {
// 	console.log(todoArr[i]);
// }

/*==========CASE 2=============*/
// for (let index in todoArr) {
// 	console.log(index + ": " + todoArr[index]);
// }
/*==========CASE 3=============*/
// for (let todo of todoArr) {
// 	console.log(todo);
// }

/*==========CASE 4=============*/
let todoObj = {
	id: 169,
	name: "play football",
	status: false
};
for (let index in todoObj) {
	console.log(index + ": " + todoObj[index]);
}