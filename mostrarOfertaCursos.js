const { cursos } = require('./objetosCursos');


function mostrasCursos() {

    var con_curso = 1;
    for (let i = 0; i < cursos.length; i++) {
        con_curso = con_curso + 1;
        setTimeout(() => {
            console.log('id del curso: ' + cursos[i].id_curso + ' -- ' + 'nombre curso: ' + cursos[i].n_curso + ' -- ' + 'precio del curso: ' + cursos[i].p_curso + ' -- ' + 'duracion: ' + cursos[i].d_curso);
        }, 2000 * con_curso);
    }
}

mostrasCursos();

module.exports = {
    mostrasCursos
}