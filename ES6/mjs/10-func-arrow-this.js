/*===========================ENROL====================*/
// let student = {
// 	name: "John",
// 	courses: ["Android","PHP","Java"],
// 	showInfo: function(){
// 		this.courses.forEach(function(course){
// 			console.log(`${this.name} study ${course}`);
// 		})
// 	}
// }
/*===========================_this====================*/
// let student = {
// 	name: "John",
// 	courses: ["Android", "PHP", "Java"],
// 	showInfo: function(){
// 		var _this = this;
// 		this.courses.forEach(function(course){
// 			console.log(`${_this.name} study ${course}`);
// 		})
// 	}
// }

/*===========================03 bind====================*/
// let student = {
// 	name: "John",
// 	courses: ["Android", "PHP", "Java"],
// 	showInfo: function(){
// 		this.courses.forEach(function(course){
// 			console.log(`${this.name} study ${course}`);
// 		}.bind(this))
// 	}
// }

/*===========================04 arrow function====================*/
let student = {
	name: "John",
	courses: ["Android", "PHP", "Java"],
	showInfo: function(){
		this.courses.forEach(course => console.log(`${this.name} study ${course}`))
	}
}

student.showInfo();