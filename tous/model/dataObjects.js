//
class Client {
    constructor(id, email, nom, dateNaissance, motDePass) {
        this.id = id;
        this.email=email;
        this.Text1 = Text1;
        this.Text2 = Text2;
        this.civil = civil;
        this.ds = ds;
        this.pasword1 = pasword1;
    }
    // 
    // RETURN ATTRIBUTES DATA AS AN ARRAY
    getAll(type = 'object') {
        let returnData = {
            id: this.id,
            email:this.email,
            Text1: this.Text1,
            Text2:this.Text2,
            civil:this.civil,
            ds: this.ds,
            pasword1: this.pasword1
        }
        if (type != 'object')
            returnData = [this.id, this.email, this.Text1, this.Text2, this.civil, this.ds, this.pasword1];
        // 
        return returnData;
    }
    //RETUEN CREDENTIELS DATA
    getCred(type = 'object') {
        let returnData = {
            email: this.email,
            pasword1: this.pasword1
        }
        // 
        if (type != 'object')
            returnData = [this.email, this.pasword1];
        // 
        return returnData;
    }
    // RETURN THE CLASSES UNIQUE IDENTIFIER
    getId() {
        return this.id;
    }
    getemail(){
        return this.email;
    }
    setId(id) {
        this.id = id;
    }
}
//
class Produit {
    constructor( id,nomProduit , prixProduit, imageProduit) {
        this.id = id;
        this.nom = nomProduit;
        this.prix = prixProduit;
        this.image = imageProduit;
    }
    // GET ALL DATA
    getAll(type = 'object') {
        let returnData = {
            id: this.id,
            nom: this.nom,
            prix: this.prix,
            image: this.image
        }
        if (type != 'object')
            returnData = [this.id, this.nom, this.prix, this.image];
        // 
        return returnData;
    }
    // RETURN THE CLASSES UNIQUE IDENTIFIER
    getId() {
        return this.id;
    }
    getImage() {
        return this.image;
    }
}
//mazal makalmtu?
class Reservation {
    constructor(id, ID_produit , ID_client, duree, nbrPersonnes) {
        this.id = id;
        this.ID_produit = ID_produit;
        this.ID_client = ID_client;
        this.duree = duree;
        this.nbrPersonnes = nbrPersonnes;
    }
    // 
    setDateQuestion(date) {
        this.dateQuestion = date;
    }
    // 
    getAll(type = 'object') {
        let returnData = {
            id: this.id,
            ID_produit: this.ID_produit,
            ID_client: this.ID_client,
            duree: this.duree,
            nbrPersonnes: this.nbrPersonnes
        }
        if (type != 'object')
            returnData = [this.id, this.ID_produit, this.ID_client, this.duree, this.nbrPersonnes];
        // 
        return returnData;
    }
    getId() {
        return [this.id, this.id];
    }
    setId(id) {
        this.id = id;
    }
}
// EXPORT CLASSES FOR LATER USE
module.exports = {
    Client,
    Produit,
    Reservation
}