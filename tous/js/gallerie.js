//*..........navbar..............*//

var btn_menu=document.getElementById("NJE_btn1");
var btn_close=document.getElementById("NJE_btn2");
var menu1=document.getElementById("NJE_menu");

btn_menu.onclick=function()
{
    btn_menu.style.display="none";
    btn_close.style.display="inline";
    menu1.style.display="inline";
}
btn_close.onclick=function()
{
    btn_menu.style.display="inline";
    btn_close.style.display="none";
    menu1.style.display="none";
}
//*slide1..................*//
var slideIndex = 1;
//showSlides(slideIndex);

function plusSlides(n) {
  document.getElementById('testh').style.display="none";
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}
//*......slide2.....*//
var slideIndex1 = 1;
//showSlides1(slideIndex1);

function plusSlides1(n) {
  document.getElementById('testhh').style.display="none";
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
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
  captionText.innerHTML = dots[slideIndex1-1].alt;
}

/*............ vlidation du connexion.........*/

// function connection()
// {
//     if(validemail(0) && validpassword1(0))
//     {
//         $.post('/jsonConnection', {
//             data: {
//                 name: $('#email').val(),
//                 password: $('#password').val()
//             }
//         }, (response) => {
//                 if(response!=="false")
//                 {
//                     f_session(0);
//                     window.location.href = '/connexion';
//                 } 
//                 else
//                 {
//                     alert("Email ou password est incorrect");
//                 }
//         });
//     }
// }
// function validemail()
// {
//     var email=document.getElementsByClassName("email")[i];
//     var valid;
//     var reg=new RegExp("^[a-zA-Z0-9._-]{5,}\@[a-z]{5,7}\.[a-z]{2,3}$");
//     if(!reg.test(email.value))
//     {
//         valid=false;
       
//     }
//     else
//     {
//         valid=true;
       
//     }
//     return valid;
// }


// // function validname(){
// //   var Letters =/^[A-Za-z]+$/;
// //   var nom =document.getElementById("name").value;
  
// //     if(Letters.test(nom)==true){
     
// //     }



// // function validpassword1(){
// //   var pas =/^[A-Za-z0-9_]+$/;
// //   var password =document.getElementById("password").value;
  
// //     if(pas.test(password)==true){
      
// //     }
    
  

// // }
// function validpassword1()
// {
//     var pass=document.getElementsByClassName("password")[i];
//     var valid;
//     if(pass.value.length<8)
//     {
//         valid=false;
     
//     }
//     else
//     {
//         valid=true;
      
//     }
//     return valid;
// }
// // function confirmation_password()
// // {
// //   var password =document.getElementById("password").value;
// //   var conf_password =document.getElementById("confirmation").value;
// //   if(password === conf_password)
// //   {
// //     alert("confirmation est correcte");
// //   }
// //   else
// //   {
// //     alert("confirmation pas correcte");
// //   }
// // }


// /*.....validation inscription......*/

// function inscription()
// {
//     if(validfirstname(0) && validlastname(0) && validdate(0) && validemail(1) && validpassword(0))
//     {
//         $.post('/jsonSaveClient', {
//             data: {
//                 email: $('#email1').val(),
//                 Text1: $('#Text1').val(),
//                 Text2: $('#Text2').val(),
//                 ds: $('#ds').val(),
//                 pasword1: $('#pasword1').val()
//             }
//         }, (response) => {
//             if (response == "true") {
//                 f_session(1);
//                 Hidden_inscription();
              
//             }
//         });
//     }
// }

// // function validfirstname(){
// //   var Letters =RegExp(/^[A-Za-z]+$/);
// //   var nom =document.getElementById("Text1");
  
// //     if(Letters.test(nom.value)==true){
// //         alert('Le nom est valide');
// //     }
// //     else {
// //         alert('Le nom pas valide');
// //     }

// // }
// function validfirstname()
// {
//     var nom=document.getElementsByClassName("Text1")[0];
//     nom.value= nom.value.toUpperCase();
//     var valid;
//     var reg=/^[A-Z]{3,}$/;
//     if(!reg.test(nom.value))
//     {
//         valid=false;
//         nom.style.borderBottomColor="red";
//     }
//     else
//     {
//         valid=true;
//         nom.style.borderBottomColor="black";
//     }
//     return valid;
// }
// //  function validlastname(){
// //   var Letters =RegExp(/^[A-Za-z]+$/);
// //    var nom =document.getElementById("Text2");
  
// //      if(Letters.test(nom.value)==true){
// //          alert('Le prénom est valide');
// //      }
// //      else {
// //          alert('Le prénom pas valide');
// //     }
// //   }

//   function validlastname()
// {
//     var nom=document.getElementsByClassName("Text2")[0];
//     nom.value= nom.value.toUpperCase();
//     var valid;
//     var reg=/^[A-Z]{3,}$/;
//     if(!reg.test(nom.value))
//     {
//         valid=false;
//         nom.style.borderBottomColor="red";
//     }
//     else
//     {
//         valid=true;
//         nom.style.borderBottomColor="black";
//     }
//     return valid;
// }

//   function validdate()
// {
//     var valid=false;
//     var element = document.getElementById("ds");
//     if(element.value !== "")
//     {
//         var date=new Date(element.value).getFullYear();
//         var d = new Date().getFullYear();
//         if((d-date)>18)
//         {
//             valid=true;
//             element.style.borderColor="black";
//         }
//         else
//          {
//             element.style.borderColor="red";
//             alert("l'age doit etre supérieur 18ans");
//          }
//     }
//     else
//     {
//         element.style.borderColor="red";
//     }
//     return valid;
// }
// // function validdate(){
// //   var nom =(new Date().getFullYear())-(new Date(document.getElementById("ds").value).getFullYear());
  
// //     if(nom>=18){
// //         alert('la date est valide');
// //     }
// //     else {
// //         alert('Vous êtes mineur.');
// //     }

// // }

// function validemail(i)
// {
//     var email=document.getElementsByClassName("email")[i];
//     var valid;
//     var reg=new RegExp("^[a-zA-Z0-9._-]{5,}\@[a-z]{5,7}\.[a-z]{2,3}$");
//     if(!reg.test(email.value))
//     {
//         valid=false;
//         email.style.borderBottomColor="red";
//     }
//     else
//     {
//         valid=true;
//         email.style.borderBottomColor="black";
//     }
//     return valid;
// }
// //  function validemail(){
// //    var Letters =RegExp(/^([A-Za-z]{3,10})+\@([A-Za-z])+\.)+\([a-zA-Z0-9]{2}$/);
// //    var nom =document.getElementById("email1").value;
  
// //     if(Letters.test(nom)===true){
// //          alert('email est valide');
// //     }
// //      else {
// //          alert('email pas valide');
// //      }

// //  }
 
// // function validpassword(){
// //   var pas =RegExp(/^[A-Za-z0-9_]+$/);
// //   var password =document.getElementById("pasword1");
// //   var conf_password =document.getElementById("pasword2");
// //     if(pas.test(password.value)){
// //       if(password.value==conf_password.value)
// //       {
// //         alert('confirmation est valide');
// //       }
// //       else {
// //         alert('confirmation pas valide');
// //       }
// //     }
// //     else {
// //         alert('Mot de passe pas valide');
// //     }

// // }
// function validpassword(i)
// {
//     var pass=document.getElementsByClassName("pasword2")[i];
//     var valid;
//     if(pass.value.length<8)
//     {
//         valid=false;
//         pass.style.borderBottomColor="red";
//     }
//     else
//     {
//         valid=true;
//         pass.style.borderBottomColor="black";
//     }
//     return valid;
// }
// ////
// function f_session(i)
// {
//     sessionStorage.setItem("email", document.getElementsByClassName("email")[i].value);
// }
// ////
// function deconnection()
// {
//     if (confirm('Voulez-vous vraiment quitter cette page?')) {
//         sessionStorage.removeItem("email");
//         window.location.href= '/';
//     }
// }

// /*reservation*/




// /*....validation de popup..*/

// function age(){
//     var anneeNaissance;
//     var age;
//     var phrase;
//     var annee = new Date().getFullYear()
//     var nom = document.getElementById("name").value;
//     var prd=document.getElementById("PeroideL").value;
//     var NBRPersonne=document.getElementById("NbrL").value;
   
//     anneeNaissance = parseInt(document.getElementById("YY").value);
//       age = annee-anneeNaissance;
//       //condition pour l'attribution de la valeur c selon l'age de la personne
//       if(age<18){
//         alert("Vous êtes mineur.");
//       }
//     else{
//         //confirm("Votre age est: "+age+" ans!"+"\n"+"Le modèle de voiture sélectionné est: "+CarSelected+"\n"+"Nom: " +nom);
//         confirm("Votre Nom est: " + nom+"\n"+"Votre Age est: "+age+"\n"+"Peroide de location est: "+prd+"\n"+"Nombre de personne est: "+NBRPersonne);
//     }

//     }
//   /// reservaton-validation de popup //
//     function reservation()
//     {
//         if(age()){
//             $.post('/jsonGetIdByImage', {
//                 image: img,
//             }, (response) => {
//                 $.post('/jsonGetAllByemail', {
//                     email: sessionStorage.getItem("email"),
//                 }, (response1) => {
//                     response1=JSON.parse(response1);
//                     $.post('/jsonSaveReservation', {
//                         data: {
//                             ID_produit: Number(response),
//                             ID_client: response1.id,
//                             duree: prd,
//                             nbrPersonnes: NBRPersonne
//                         }
//                     });
//                 }); 
        
//             });
//     }; 
// };
        


//     ///




// ////
//     ///afichage de reservation//
//     function afficherAllReservation()
// {
//     $.post('/jsonGetAllByemail', {
//         email: sessionStorage.getItem("email"),
//     }, (response) => {
//         response=JSON.parse(response);
//         $.post("/jsonGetReservationAllById", {
//             id:response.id
//         }, (response1) => {
//             const reservation = JSON.parse(response1);
//             reservation.forEach(element => {
//                 $.post('/jsonGetImageById', {
//                     id: Number(element.ID_produit),
//                 }, (response2) => {
//                     createCard(element, response2);
//                 });
//             });
//         });
//     });
    
// }

// /////
// /////
// function createCard(carnet,image)
// {
//     let cont = makeEelement('div', 'b-card');
//     cont.id = `cardBox-${carnet.index}`;
//     let img = makeEelement('img', 'b-card-img');
//     img.src=image;
//     let txt_id=makeEelement('p', 'b-card-txt');
//     txt_id.innerText = resrvation.id;
//     let select=makeEelement('select', 'b-card-select');

//     var z = document.createElement("option");
//     z.setAttribute("value", "1");
//     var t = document.createTextNode("1");
//     z.appendChild(t);
//     select.appendChild(z);

//     var z2 = document.createElement("option");
//     z2.setAttribute("value", "2");
//     var t = document.createTextNode("2");
//     z2.appendChild(t);
//     select.appendChild(z2);

//     var z3 = document.createElement("option");
//     z3.setAttribute("value", "3");
//     var t = document.createTextNode("3");
//     z3.appendChild(t);
//     select.appendChild(z3);

//     var z4 = document.createElement("option");
//     z4.setAttribute("value", "4");
//     var t = document.createTextNode("4");
//     z4.appendChild(t);
//     select.appendChild(z4);

//     var z5 = document.createElement("option");
//     z5.setAttribute("value", "5");
//     var t = document.createTextNode("5");
//     z5.appendChild(t);
//     select.appendChild(z5);

//     var z6 = document.createElement("option");
//     z6.setAttribute("value", "6");
//     var t = document.createTextNode("6");
//     z6.appendChild(t);
//     select.appendChild(z6);

//     var z7 = document.createElement("option");
//     z7.setAttribute("value", "7");
//     var t = document.createTextNode("7");
//     z7.appendChild(t);
//     select.appendChild(z7);

//     var z8 = document.createElement("option");
//     z8.setAttribute("value", "8");
//     var t = document.createTextNode("8");
//     z8.appendChild(t);
//     select.appendChild(z8);

//     var z9 = document.createElement("option");
//     z9.setAttribute("value", "9");
//     var t = document.createTextNode("9");
//     z9.appendChild(t);
//     select.appendChild(z9);

//     var z10 = document.createElement("option");
//     z10.setAttribute("value", "10");
//     var t = document.createTextNode("10");
//     z10.appendChild(t);
//     select.appendChild(z10);

//     let button_modifier = makeEelement('button', 'b-card-button_modifier');
//     button_modifier.innerHTML = "Modifier";
//     button_modifier.addEventListener('click', () => {
//         modifierDuree(resrvation.id,select.value);
//     });

//     let button_supprimer = makeEelement('button', 'b-card-button_supprimer');
//     button_supprimer.innerHTML = "Supprimer";
//     button_supprimer.addEventListener('click', () => {
//         supprimerDuree(resrvation.id);
//     });
//     select.value=resrvation.duree;
//     cont.appendChild(img);
//     cont.appendChild(txt_id);
//     cont.appendChild(select);
//     cont.appendChild(button_modifier);
//     cont.appendChild(button_supprimer);
//     document.getElementById('b-content').appendChild(cont);
// }
// function makeEelement(elem, elemClass) {
//     let item = document.createElement(elem);
//     item.setAttribute('class', elemClass);
//     return item;
// }
// ///les modification//

// function modifierDuree(id,duree)
// {
//     $.post('/jsonUpdateDuree', {
//         data:{
//             id:id,
//             duree:duree
//         }
//     }, (response) => {
//         if(response=="true")
//         {
//             alert("Votre modification et bien exécuter");
//         }
//         else{
//             alert("Erreur sur la modification");
//         }
//     });

// }
// ///supression des données//
//     function supprimerDuree(id)
// {
//     if (confirm('Voulez-vous vraiment supprimer cette réservation?')) {
//         $.post('/jsonDeleteReservation', {
//             id:id,
//         }, (response) => {
//             if(response=="true")
//             {
//                 alert("Votre suppression et bien exécuter");
//             }
//             else{
//                 alert("Erreur sur la suppression");
//             }
//         });
//         var list = document.getElementById("b-content");
//         while (list.hasChildNodes()) {  
//             list.removeChild(list.firstChild);
//         } 
//         afficherAllReservation();
//     }
// }

// ////btn reserver//
// function annuler(i)
//   {
//     var btn_reserve=document.getElementsByClassName("button type2");
//     document.getElementsByClassName("btn_annuler")[i].style="display: none";
//     btn_reserve[i].style="display: inline";
//     for(j=0;j<6;j++)
//     {
//         btn_reserve[j].disabled=false;
//     }
  
//   }


 
function connection()
{
    if(validemail(0) && validpassword(0))
    {
        $.post('/jsonConnection', {
            data: {
                email: $('#email').val(),
                motPass: $('#password').val()
            }
        }, (response) => {
                if(response!=="false")
                {
                  
                    alert("email ou mot de passe est correct");
                }
                else
                {
                    alert("email ou mot de passe est incorrect");
                }
        });
    }
}
///
///
function inscription()
{
    if(validemail(1) && validfirstname(0) && validfirstname(0) && validdate(0) && validpassword(1))
    {
        $.post('/jsonSaveClient', {
            data: {
                email: $('#email1').val(),
                Text1: $('#Text1').val(),
                Text2: $('#Text2').val(),
                ds: $('#ds').val(),
                pasword1: $('#pasword1').val()
            }
        }, (response) => {
            if (response == "true") {
                alert("votre inscription est valide");
            }
        });
    }
}
///
///

function reservation()
{
    if(age()){
        validation_inscription();
    }
}
function validemail(i)
{
    var email=document.getElementsByClassName("email")[i];
    var valid;
    var reg=new RegExp("^[a-zA-Z0-9._-]{5,}\@[a-z]{5,7}\.[a-z]{2,3}$");
    if(!reg.test(email.value))
    {
        valid=false;
        alert("email est valid");  
    }
    else
    {
        valid=true;
       
    }
    return valid;
}
function validdate()
{
    var valid=false;
    var element = document.getElementById("ds");
    if(element.value !== "")
    {
        var date=new Date(element.value).getFullYear();
        var d = new Date().getFullYear();
        if((d-date)>21)
        {
            valid=true;
           
          
        }
        else
         {
            element.style.borderColor="red";

         }
    }
    else
    {
        element.style.borderColor="red";
    }
    return valid;
}
function validation_nom()
{
    var nom=document.getElementsByClassName("Text1")[0];
    nom.value= nom.value.toUpperCase();
    var valid;
    var reg=/^[A-Z]{3,}$/;
    if(!reg.test(nom.value))
    {
        valid=false;
     
    }
    else
    {
        valid=true;
        
    }
    return valid;
}
function validlastname()
{
    var nom=document.getElementsByClassName("Text2")[0];
    nom.value= nom.value.toUpperCase();
    var valid;
    var reg=/^[A-Z]{3,}$/;
    if(!reg.test(nom.value))
    {
        valid=false;
     
    }
    else
    {
        valid=true;
        
    }
    return valid;
}
function validpassword(i)
{
    var pass=document.getElementsByClassName("password")[i];
    var valid;
    if(pass.value.length<8)
    {
        valid=false;
    
    }
    else
    {
        valid=true;
       
    }
    return valid;
}







function deconnection()
{
    if (confirm('Voulez-vous vraiment quitter cette page?')) {
        sessionStorage.removeItem("email");
        window.location.href= '/';
    }
}
