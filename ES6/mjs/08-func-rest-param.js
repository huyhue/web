// function caculate(action, x, y, z){

// 	let result = 0;

// 	switch(action){
// 		case '+':
// 			result = x + y + z;
// 			break;
// 		case '-':
// 			result = x - y + z;
// 			break;
// 	}
// 	return result;
// }
// console.log("+", 2, 3, 4);

/*==============rest param: thuc hien cac tham so bien dong=======*/
function caculate(action, ...values){

	let result = 0;

	switch(action){
		case '+':
			for(let value of values) result += value;
			break;
		case '-':
			for(let value of values) result -= value;
			result += values[0];  //neu khong thi no hieu 0-8-3-3-1-2
			break;
	}
	return result;
}
console.log(caculate("-", 8, 3, 3, 1, 2));