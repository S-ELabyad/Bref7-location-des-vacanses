// TO-DO : ADD A FUNCTION THAT RETURNS ALL QUESTION IN DATE INTERVAL
//          ADD METHODES TO INCREMENT ID & DATE & Others ...
//          ADD A LOGING FUNCTION TO KEEP TRACK OF CHANGES
const _FS = require('fs-extra');
const _PATH = require('path');
const dataObjects = require('./dataObjects');
// // A TABLE THAT CONTAINES THE CLASS NAMES ✨
// const _REFERENCES = [{
//     class: "Client"
// }, {
//     class: "Service"
// }, {
//     class: "Other"
// }];
// RETURN AN ARRAY OF CLASSES OF THE JSON DATA FILE
async function jsonGetAll(className) {
    const FILE_PATH = _PATH.join(__dirname, '..', 'data', `${className}.json`);
    if (await pathExists(FILE_PATH)) {
        let jsonDataObject = JSON.parse(await _FS.readFile(FILE_PATH));
        // ARRAY THAT WILL STORE THE CLASSES
        let classArray = [];
        // 
        // console.log(jsonDataObject);
        jsonDataObject.forEach(element => {
            classArray.push(jsonToClass(element, className));
        });
        // 
        return classArray;
    } else
        return null;
}
//RETURN A CLASS OF THE SERCHED FOR VALUE👀
async function searchByEmail(email) {
    const _DATA = await jsonGetAll("Client");
    let retValue = null;
    _DATA.forEach(data => {
        if (data.getemail() == email)
        {
            retValue = data.getAll();
        } 
    });
    return retValue;
}



// SAVE DATA INTO A JSON FILE
async function addToClient(data) {
    const FILE_PATH = _PATH.join(__dirname, '..', 'data', `Client.json`);

    // SEE IF THE FILE EXISTS, IF NOT MAKE IT
    if (!await _FS.pathExists(FILE_PATH))
        await _FS.createFile(FILE_PATH);
    // FILL THE JSON WITH "[]" IF EMPTY
    let fileContent = await _FS.readFile(FILE_PATH, 'utf8');
    if (fileContent.length == 0)
        await _FS.writeFile(FILE_PATH, '[]');

    // RETURN VALUE
    let succes = true;
    try {
        let jsonDataObject = await _FS.readJSON(FILE_PATH);
        // 
        data.id = `cli-${jsonDataObject.length + 1}`;
        // 
        data = jsonToClass(data, "Client");
        //     
        //THE ADD THE WENTED DATA TO IT
        jsonDataObject.push(data.getAll());
        //AFTER THAT I RESAVE THE JSON FILE
        await _FS.writeJSON(FILE_PATH, jsonDataObject);
    } catch (err) {
        succes = false;
    }
    // 
    // console.log(succes);
    return succes;
}
async function addToReservation(data) {
    const FILE_PATH = _PATH.join(__dirname, '..', 'data', `Reservation.json`);

    // SEE IF THE FILE EXISTS, IF NOT MAKE IT
    if (!await _FS.pathExists(FILE_PATH))
        await _FS.createFile(FILE_PATH);
    // FILL THE JSON WITH "[]" IF EMPTY
    let fileContent = await _FS.readFile(FILE_PATH, 'utf8');
    if (fileContent.length == 0)
        await _FS.writeFile(FILE_PATH, '[]');

    // RETURN VALUE
    let succes = true;
    try {
        let jsonDataObject = await _FS.readJSON(FILE_PATH);
        id=jsonDataObject[jsonDataObject.length-1].id;
        data.id = `res-${Number(id.substring(4, id.length)) + 1}`
        // data.id = `res-${jsonDataObject.length + 1}`;
        data = jsonToClass(data, "Reservation");
        //     
        //THE ADD THE WENTED DATA TO IT
        jsonDataObject.push(data.getAll());
        //AFTER THAT I RESAVE THE JSON FILE
        await _FS.writeJSON(FILE_PATH, jsonDataObject);
    } catch (err) {
        succes = false;
    }
    // 
    // console.log(succes);
    return succes;
}
// TRANSFORM JSON DATA TO IT'S CORRESPONDING CLASS AND RETURN IT 👌
function jsonToClass(objectData, className) {
    let retClass = null;
    switch (className) {
        case 'Client':
            retClass = new dataObjects.Client(objectData.id, objectData.email, objectData.Text1,objectData.Text2,objectData.civil, objectData.ds, objectData.password1);
            break;
        case 'Reservation':
            retClass = new dataObjects.Question(objectData.id, objectData.ID_produit, objectData.ID_client, objectData.duree, objectData.nbrPersonnes);
            break;
        case 'Produit':
            retClass = new dataObjects.Produit(objectData.id, objectData.nom, objectData.prix);
            break;
        default:
            retClass = null;
    }
    // 
    return retClass;
}
// MAKE SURE THE DESIRED DIR EXISTS | RETURN TRUE OR FALSE
async function pathExists(path) {
    return await _FS.pathExists(path);
}
//RETURN A CLIENT OF THE SERCHED FOR VALUE👀
async function searchByEmailAndPass(data) {
    const _DATA = await jsonGetAll("Client");
    let retValue=false;
    _DATA.forEach(data_objet => {
        if(retValue == false)
        {
            if (data_objet.getCred().email==data.email && data_objet.getCred().password==data.password){
                retValue = true;
            }
        }
    });
    return retValue;
}

async function getAllReservationByIdClient(id) {
    const _DATA = await jsonGetAll("Reservation");
    let retValue = [];
    _DATA.forEach(data => {
        if (data.getIdClient() == id)
        {
            retValue.push(data.getAll());
        } 
    });
    return retValue;
}
async function updateDuree(data) {
    const FILE_PATH = _PATH.join(__dirname, '..', 'data', `Reservation.json`);
    let retValue = true;
    var Reservations = await jsonGetAll("Reservation");
    if (Reservations != null) {
        let dataObject = [];
        for (let i = 0; i < Reservations.length; i++) {
            dataObject.push(Reservations[i].getAll());
            if (Reservations[i].getId() == data.id)
            {
                dataObject[i].duree=data.duree;
            }
        }
        await _FS.writeJSON(FILE_PATH, dataObject);
    } else retValue = false;
    // 
    return retValue;
}

async function deleteReservation(id) {
    const FILE_PATH = _PATH.join(__dirname, '..', 'data', `Reservation.json`);
    let retValue = true;
    var Reservations = await jsonGetAll("Reservation");
    if (Reservations != null) {
        let dataObject = [];
        for (let i = 0; i < Reservations.length; i++) {
            if (Reservations[i].getId() !== id)
            {
                dataObject.push(Reservations[i].getAll());
            }
        }
        await _FS.writeJSON(FILE_PATH, dataObject);
    } else retValue = false;
    // 
    return retValue;
}
module.exports = {
    jsonGetAll,
    searchByEmail,
    addToClient,
    addToReservation,
    searchByEmailAndPass,
    getAllReservationByIdClient,
    updateDuree,
    deleteReservation
}


