const { registrar, leer } = require('./operaciones');

const argumentos = process.argv.slice(2);


if( argumentos[0] === 'leer') {
    leer();
  }


if( argumentos[0] === 'registrar') {
    if(argumentos.length === 6 ){
      registrar(argumentos);
    } 
  }



