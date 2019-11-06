const argv = require ('./config/yargs').argv;
const colors = require('colors');

const porHacer = require ('./por-hacer/por-hacer');

console.log(argv);

let comando = argv._[0];
switch(comando){
    case 'crear':
        console.log('crear');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        console.log('============= Por Hacer ==========='.green);
        if (listado.length > 0){
            listado.forEach((enreg) => {
                console.log(`Tarea: ${enreg.descripcion}`);
                console.log(`Estado: ${enreg.completado}`);
            });
        }else{
            console.log('No hay nada da hacer');
        }
        console.log('==================================='.green);
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('El comando insertado no esta reconocido');
}