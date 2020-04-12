class Student{
	constructor(code, name, age){  //constructor phuong thuc khoi tai
		this.code = code;
		this.name = name;
		this.age = age;
	}

	showInfo(){
		return this.code + " " + this.name + " " + this.getAge();
	}

	getAge(){
		let today = new Date();
		let year = today.getFullYear(); //nam hien tai
		return year - this.age;
	}
}

let studentObj = new Student("SV001", "John", 1992);

console.log(studentObj);
console.log(studentObj.showInfo());
