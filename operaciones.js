
const fs = require('fs');

const registrar = (argumentos) => {
    const contenido =fs.readFileSync('citas.json');
    const citas = JSON.parse(contenido)

    citas.push({
        nombre: argumentos[1],
        edad:argumentos[2],
        tipo:argumentos[3],
        color: argumentos[4],
        enfermedad: argumentos[5]
});

    fs.writeFileSync('citas.json', JSON.stringify(citas));
};


const leer = () => {
   const contenido = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
   console.log(contenido);
};


module.exports = { registrar, leer };