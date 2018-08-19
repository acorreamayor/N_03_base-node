const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`./resultados/tabla-${ base }.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${ base }.txt`);
            }
        });
    });
}

let listarTabla = async(base, limite = 10) => {
    console.log('=============================='.green);
    console.log(`==Tabla del ${ base }==`.green);
    console.log('=============================='.green);


    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${ base } * ${ i } = ${ base * i }\n`;
    }

    console.log(data);
}


module.exports = {
    crearArchivo,
    listarTabla
}