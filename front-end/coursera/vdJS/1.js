function setDate(){
  document.getElementById('date').innerHTML=Date();
}
function showProperties(element){
  document.getElementById('message').innerHTML = element.alt;
}
function message(msg)
	{
  		document.getElementById('output').innerHTML = msg + " event";
	}

function closeMe(){
      // Find the element
        x=document.getElementById("demo");
       //Option 1: Change the style attribute directly
        x.style.display="none";
  
      //Option 2: Change the class
         // x.className="closed";
    }

function openMe(){
      // Find the element
        x=document.getElementById("demo");
      //Option 1: Change the style attribute directly
         x.style.display="block";
      
      //Option 2: Change the class
         // x.className="open";
    }

    function displayDate(){
		  document.getElementById("demo1").innerHTML = Date();
	}