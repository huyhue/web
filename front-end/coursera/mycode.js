function check() {
      var c1 = document.getElementById('ten');
      var c2 = document.getElementById('gmail');
      var c3 = document.getElementById('content');
      var str="Dung de trong ";
      if (c1.value == "" &&c2.value == ""&&c3.value == "") {
              alert(str+"ten"+"email"+"content");
              return false;
            }
            if ( c1.value == "") alert(str+"ten"); 
            if ( c2.value == "") alert(str+"email"); 
            if ( c3.value == "") alert(str+"content");
            
         
        
}