//Initializing
var i = 0;
var images = []; //array
var time = 3000; // time in millie seconds

//images

images[0] = "url(https://www.motorcycle.com/blog/wp-content/uploads/2020/02/DUCATI-PANIGALE-V4_PERFORMANCE_STATIC_13-2.jpg)";
images[1] = "url(https://robbreport.com/wp-content/uploads/2020/07/ducati_panigale_v2-_2__uc173828_mid.jpg?w=1000)";
images[2] = "url(https://www.webbikeworld.com/wp-content/uploads/2020/04/2020-ducati-diavel-2160.jpg)";
//function

function changeImage() {
    var el = document.getElementById('body');
    el.style.backgroundImage = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    // setTimeout('changeImage()', time);
}

window.onload = changeImage;

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}