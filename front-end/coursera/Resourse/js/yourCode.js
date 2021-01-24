// -	You are required to complete the method “Show()”. In this method you have to do:
//  When the user clicks on the text  “Show Register Form” (in the tag h2)  then the form will be displayed and the inner html of tag h2 is changed to “Hide Register Form” [2 marks]
// When the user clicks on the text  “Hide Register Form” (in the tag h2)  then the form will be hidden and the inner html of tag h2 is changed to “Show Register Form” [1. 5 marks]
// -	You are required to complete the method “checkForm()”. In this method you have to do:
// two text fields are not empty  [1.5 marks]

function Show() {
	var x = document.getElementById('mytext');
	if (x.innerHTML == "HIDE REGISTER FORM") {
		x.innerHTML = "SHOW REGISTER FORM";
		document.getElementById('myform').style.display = "none";	
	}else{
		x.innerHTML = "HIDE REGISTER FORM";
		document.getElementById('myform').style.display = "block";
	}
}
function checkForm(){
	var v1 = document.getElementById('t1').innerHTML;
	var v2 = document.getElementById('t2').innerHTML;
	if ((v1.length ==0) && (v2.length ==0)){
	 	alert("Don't allowed empty");
	 }else{
	 	alert("OK");
	 }
}