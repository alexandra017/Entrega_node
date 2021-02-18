const { cursos } = require('./objetosCursos');

let fs = require('fs');

let opciones = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'x'
    }
}

let argv = require('yargs')
    .command('inscribir', 'matricular', opciones)
    .argv;


function matri_curso() {

    if (argv.id == 1 || argv.id == 2 || argv.id == 3) {
        var salida = `El estudiante ${argv.nombre}, cedula: ${argv.cedula} esta inscrito en el curso ${cursos[argv.id -1].n_curso} con un valor de ${cursos[argv.id -1].p_curso} y una intensidad hoaria de ${cursos[argv.id -1].d_curso}`;
        fs.writeFile('alumnos_inscritos.txt', salida, (err) => {
            if (err) throw (err);
            return console.log('Usted se ha inscrito correctamente!');
        });

    } else {
        console.log('Id de curso invalido, intentelo nuevamente! Digite: < node mostrarOfertaCursos >');
    }
};


matri_curso();

module.exports = {
    matri_curso
}