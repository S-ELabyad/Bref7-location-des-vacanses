  /// reservaton-validation de popup //

    function reservation()
    {
        if(age()){
            $.post('/jsonGetIdByImage', {
                image: img,
            }, (response) => {
                $.post('/jsonGetAllByEmail', {
                    email: sessionStorage.getItem("email"),
                }, (response1) => {
                    response1=JSON.parse(response1);
                    $.post('/jsonSaveReservation', {
                        data: {
                            ID_produit: Number(response),
                            ID_client: response1.id,
                            duree: prd,
                            nbrPersonnes: NBRPersonne
                        }
                    });
                }); 
        
            });
    }; 
};


// 
function age(){
    var anneeNaissance;
    var age;
    var phrase;
    var annee = new Date().getFullYear()
    var nom = document.getElementById("name").value;
    var prd=document.getElementById("PeroideL").value;
    var NBRPersonne=document.getElementById("NbrL").value;
   
    anneeNaissance = parseInt(document.getElementById("YY").value);
      age = annee-anneeNaissance;
      //condition pour l'attribution de la valeur c selon l'age de la personne
      if(age<18){
        alert("Vous êtes mineur.");
      }
    else{
        //confirm("Votre age est: "+age+" ans!"+"\n"+"Le modèle de voiture sélectionné est: "+CarSelected+"\n"+"Nom: " +nom);
        confirm("Votre Nom est: " + nom+"\n"+"Votre Age est: "+age+"\n"+"Peroide de location est: "+prd+"\n"+"Nombre de personne est: "+NBRPersonne);
    }

    
//

   
    for(j=0;j<6;j++)
    {
        btn_reserve[j].disabled=true;
    }
    document.getElementsByClassName("btn_annuler")[i].style="display: inline";
    
}
  
  function annuler(i)
  {
    var btn_reserve=document.getElementsByClassName("button type2");
    document.getElementsByClassName("btn_annuler")[i].style="display: none";
    btn_reserve[i].style="display: inline";
    for(j=0;j<6;j++)
    {
        btn_reserve[j].disabled=false;
    }
   
  }
