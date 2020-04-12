let elm = document.getElementById("mContent3");
elm.style.color="#0174DF";

let name ="Typescript 123";
let price = 25;
elm.innerHTML = `<div>Course name: <b>${name}</b>,
				  	Price: <b style="color: red">${price} USD</b>
				</div>`

	
// let todo ={
// 	id: 169,
// 	name: "play football",
// 	status: false
// };
// elm.innerHTML =`<div id="todo-id-${todo.id}">
// 				  <i class="${todo.status == true ? "hidden" : ""} glyphicon glyphicon-ok"></i>
// 				  <span class="name">${todo.name}</span>
// 				</div>`