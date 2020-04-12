/*================Property value shorthand========*/
// function getCourse(name, price, free){
// 	return {
// 		name,
// 		price,
// 		free
// 	}
// }
// console.log(getCourse("ES6", 28, false));

/*================Method Property========*/
function getCourse(name, price, free){
	return {
		name,
		price,
		free,

		showInfo1: function(){
			console.log(`${ name + " - " + price + " - " + free}`);
		},

		showInfo2(){
			console.log(`${ name + " - " + price + " - " + free}`);
		},

		showInfo3(delimiter){            //delimiter: ky tu phan cach
			console.log(`${ name + delimiter + price + delimiter + free}`);
		}
	}
}
var myCourse = getCourse("ES6", 28, false);
myCourse.showInfo3("++++++++++++");
console.log(myCourse);

/*================Computed Property Name==========*/
let propPrefix = "support_";
let bootstrapSupport = {
	[propPrefix+ "chrome"]: true,
	[propPrefix+ "ie"]: true,
	[propPrefix+ "firefox"]: false
}
console.log(bootstrapSupport);

