  /// reservaton-validation de popup //

  function reservation() {
      if (age()) {
          //   $.post('/jsonGetIdByImage', {
          //       image: img,
          //   }, (response) => {
          $.post('/jsonGetAllByEmail', {
              email: sessionStorage.getItem("email"),
          }, (response1) => {
              response1 = JSON.parse(response1);
              $.post('/jsonSaveReservation', {
                  data: {
                      ID_produit:99,
                      ID_client: response1.id,
                      duree: document.getElementById('PeroideL').value,
                      nbrPersonnes: document.getElementById('NbrL').value
                  }
              }, (res) => {
                  console.log(res);
              });
          });

          //   });
      };
  };


  // 
  function age() {
      var anneeNaissance;
      var age;
      var phrase;
      var annee = new Date().getFullYear()
      var nom = document.getElementById("name").value;
      var prd = document.getElementById("PeroideL").value;
      var NBRPersonne = document.getElementById("NbrL").value;
      let result = false;

      anneeNaissance = parseInt(document.getElementById("YY").value);
      age = annee - anneeNaissance;
      //condition pour l'attribution de la valeur c selon l'age de la personne
      if (age < 18) {
          alert("Vous êtes mineur.");
      } else {
          result = true;
          //confirm("Votre age est: "+age+" ans!"+"\n"+"Le modèle de voiture sélectionné est: "+CarSelected+"\n"+"Nom: " +nom);
          confirm("Votre Nom est: " + nom + "\n" + "Votre Age est: " + age + "\n" + "Peroide de location est: " + prd + "\n" + "Nombre de personne est: " + NBRPersonne);
      }


      //
      return result;

  }