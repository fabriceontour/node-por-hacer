//Importer la paquet du File-System pour ecrire dans un fichier. Ce paquet se trouve dans node_modules
const fs = require('fs');

let listaPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listaPorHacer);

    //Ecriture du fichier. le nom du fichier, l'enreg à enregistrer, la fonction callback pour l'erreur
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err); 
    })
}

const cargarDB = () => {
    try {
        listaPorHacer = require ('../db/data.json');
    } catch (error) {
        listaPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listaPorHacer.push(porHacer);

    guardarDB();
    
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listaPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listaPorHacer.findIndex( tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listaPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    };
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listaPorHacer.findIndex( tarea => {
        return tarea.descripcion === descripcion;
    });
    
    if (index >= 0) {
        listaPorHacer.splice(index, 1);
        guardarDB();
        return true;
    }else{
        return false;
    };
}

//Toujours faire le exports pour rendre les choses accessibles
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}