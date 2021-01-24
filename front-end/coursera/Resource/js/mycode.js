function show(){
	var x = document.getElementById('showmore');
	if (x.innerHTML == "SHOW MORE") {
		x.innerHTML = "SHOW LESS";
		document.getElementById('team').style.display = "block";	
		document.getElementById('myform').style.display = "block";
	}else{
		x.innerHTML = "SHOW MORE";
		document.getElementById('team').style.display = "none";
		document.getElementById('myform').style.display = "none";
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

function check(){
	var e = document.getElementById('email');
	var c1 = document.getElementById('USA');
	var c2 = document.getElementById('UK');
	var cap = document.getElementsByTagName("input")[3];
	console.log(cap);
	if (e.value == "") {
		alert("Please fill your email");
	}

	if(!(c1.checked && c2.checked)){
		alert("Please check your option");
	}

	if (cap.value != "cVr12TY") {
		alert("Please check your caption");
	}
	if (!(e.value == "") && (cap.value == "cVr12TY")) {
		alert("Thank you too much");
		return false;
	}

}