console.log("ABC");
/* ==========BLOCK SCOPE==============*/
/*Block FOR > Block IF > Block WHILE
for{
	if(){
		while(){

		}
	}
}
*/
/* ==========VAR==============*/
// var score = 100;
// if (score > 50) {
// 	var msg ="WIN";
// 	console.log(msg);
// }
// console.log(score);
// console.log(msg);

/* ==========LET: pham vi truy cap nho hon var==============*/
// let score = 100;
// if (score > 50) {
// 	let msg ="WIN";
// 	console.log(msg);
// }
// console.log(score);
// console.log(msg);


let score = 100;
let msg = "";
if (score > 50) {
	msg = "WIN";
	console.log(msg);
}
console.log(score);
console.log(msg);
