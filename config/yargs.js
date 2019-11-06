//Cette config est pour verifier les parametres dans la console au moment de lancer l'appli
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la area'
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca completado o pendiente'
}

const argv = require('yargs')
                .command('crear', 'Generar una nuova tarea da hacer', {
                    descripcion
                })
                .command('borrar', 'Borrar una tarea da hacer', {
                    descripcion
                })
                .command('actualizar', 'Actualizar la tarea', {
                    descripcion,
                    completado
                })
                .help()
                .argv;


//Cet export est indispensable pour rendre l'objet argv accessible en dehors de ce fichier
module.exports = {
    argv
}
