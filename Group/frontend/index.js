var btn = document.querySelectorAll('.nav-pof p'),
    formm = document.querySelector('.ok');
btn[2].addEventListener('click', function () {
    formm.classList.toggle('ra');
})
var type = document.getElementsByClassName('type');
for (var i = 0; i < type.length; i++) {
    type[i].style.height = 1 / type.length * 100 + "%";
    console.log(type[i].style.height = 1 / type.length * 100 + "%");
}

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}