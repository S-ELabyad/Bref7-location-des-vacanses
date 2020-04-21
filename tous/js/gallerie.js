//*..........navbar..............*//

var btn_menu = document.getElementById("NJE_btn1");
var btn_close = document.getElementById("NJE_btn2");
var menu1 = document.getElementById("NJE_menu");

btn_menu.onclick = function () {
    btn_menu.style.display = "none";
    btn_close.style.display = "inline";
    menu1.style.display = "inline";
}
btn_close.onclick = function () {
    btn_menu.style.display = "inline";
    btn_close.style.display = "none";
    menu1.style.display = "none";
}
//*slide1..................*//
var slideIndex = 1;
//showSlides(slideIndex);

function plusSlides(n) {
    document.getElementById('testh').style.display = "none";
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
//*......slide2.....*//
var slideIndex1 = 1;
//showSlides1(slideIndex1);

function plusSlides1(n) {
    document.getElementById('testhh').style.display = "none";
    showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
    var dots = document.getElementsByClassName("demo1");
    var captionText = document.getElementById("caption1");
    if (n > slides.length) {
        slideIndex1 = 1
    }
    if (n < 1) {
        slideIndex1 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex1 - 1].style.display = "block";
    dots[slideIndex1 - 1].className += " active";
    captionText.innerHTML = dots[slideIndex1 - 1].alt;
}

/*............ vlidation du connexion.........*/

function connection() {
    if (validemail(0) && validpassword(0)) {
        $.post('/jsonConnection', {
            data: {
                email:document.getElementById("email1").value,
                motPass:document.getElementById("pasword1").value
            }
        }, (response) => {
            if (response !== "false") {
                // sessionStorage.setItem('email', $('#email').val());
                alert("email ou mot de passe est correct");
            } else {
                alert("email ou mot de passe est incorrect");
            }
        });
    }
}
///
///
function inscription() {
    if (validemail() && validation_nom() && validlastname() && validdate() && validpassword()) {
        console.log("slm");
        $.post('/jsonSaveClient', {
            data: {
                email: $('#email1').val(),
                Text1: $('#Text1').val(),
                Text2: $('#Text2').val(),
                ds: $('#ds').val(),
                pasword1:document.getElementById("pasword1").value,
                civil: document.getElementById('civil').options[document.getElementById('civil').selectedIndex].value
            }
        }, (response) => {
            console.log(response);
            // if (response == "true") {
            // alert("votre inscription est valide");
            // }
        });
    }
}
///
///

function reservation() {
    if (age()) {
        validation_inscription();
    }
}

function validemail() {
    var email = document.getElementById("email1");
    var valid;
    var reg = new RegExp("^[a-zA-Z0-9._-]{5,}\@[a-z]{5,7}\.[a-z]{2,3}$");
    if (!reg.test(email.value)) {
        valid = false;
        console.log("email n'est pas valide");
    } else {
        valid = true;

    }
    return valid;
}

function validdate() {
    var valid = false;
    var element = document.getElementById("ds");
    if (element.value !== "") {
        var date = new Date(element.value).getFullYear();
        var d = new Date().getFullYear();
        if ((d - date) > 21) {
            valid = true;


        } else {
            console.log("date n'est pas valide");
        }
    } else {}
    return valid;
}

function validation_nom() {
    var nom = document.getElementById("Text1");
    nom.value = nom.value.toUpperCase();
    var valid;
    var reg = /^[A-Z]{3,}$/;
    if (!reg.test(nom.value)) {
        valid = false;
        console.log('nom non valide');
    } else {
        valid = true;

    }
    return valid;
}

function validlastname() {
    var nom = document.getElementById("Text2");
    nom.value = nom.value.toUpperCase();
    var valid;
    var reg = /^[A-Z]{3,}$/;
    if (!reg.test(nom.value)) {
        valid = false;
        console.log("last name non valide");

    } else {
        valid = true;

    }
    return valid;
}

function validpassword() {
    var pass = document.getElementById("pasword1");
    var valid;
    if (pass.value.length < 8) {
        valid = false;
        console.log("mot de pass non valide");

    } else {
        valid = true;

    }
    return valid;
}

