class Person{
	constructor(code, name, age){  //constructor phuong thuc khoi tai
		this.code = code;
		this.name = name;
		this.age = age;
	}

	showInfo(){
		console.log(this.code + " " + this.name + " " + this.getAge());
	}

	getAge(){
		let today = new Date();
		let year = today.getFullYear(); //nam hien tai
		return year - this.age;
	}
}
class Student extends Person{
	constructor(name, code, age, score){
		super(name, code, age);
		this.score = score;
	}

	showInfo(){
		super.showInfo();
		console.log(" - "+ this.score);
	}
}

let personObj = new Person("John", "132213", 2000);
personObj.showInfo();

let studentObj = new Student("Peter", "132", 1998, 80);
studentObj.showInfo();