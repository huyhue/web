document.addEventListener("DOMContentLoaded",function(){
    var nav = document.querySelector('.nav-pof');
	var statusN = "duoi100";

    var phantuload = document.querySelector('.new1-l');
	var trangthais3 = 'duoi';
    var vitris3 = phantuload.offsetTop - 300;
    
    window.addEventListener('scroll',function(){
        if(window.pageYOffset > 100){
			if(statusN == "duoi100"){
				statusN = 'tren100';
				nav.classList.add('nav-change');
			}
		}else if(window.pageYOffset < 100){
			if(statusN == "tren100"){
				statusN = 'duoi100';
				nav.classList.remove('nav-change');
			}
        } 
        
        if (window.pageYOffset > vitris3) {
            if (trangthais3 == 'duoi') {
                trangthais3 ='tren';
                phantuload.classList.add('dilen');
            }
        }
    });

    

});