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
        data.id = `res-${jsonDataObject.length + 1}`;
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
            retClass = new dataObjects.Produit(objectData.id, objectData.nom, objectData.prix, objectData.image);
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
            if (data_objet.getCred().email==data.email && data_objet.getCred().password1==data.password1){
                retValue = true;
            }
        }
    });
    return retValue;
}
async function searchByImage(image) {
    const _DATA = await jsonGetAll("Produit");
    let retValue = -1;
    _DATA.forEach(data_objet => {
            if (data_objet.getImage() == image)
                retValue = data_objet.getId();
            }
    );
    return retValue;
}
// 
// 
module.exports = {
    jsonGetAll,
    searchByEmail,
    addToClient,
    addToReservation,
    searchByEmailAndPass,
    searchByImage
}


