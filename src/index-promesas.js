import "./styles.css";
import { buscarHeroe } from "./js/promesas";
import { buscarHeroe as buscarHeroeCallback } from "./js/callbacks";

const heroeID1 = "capi";
const heroeID2 = "iron";

// buscarHeroe(heroeID1).then(heroe1 => {
//     buscarHeroe(heroeID2).then(heroe2 => {
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
//     })
// });

Promise.all([buscarHeroe(heroeID1), buscarHeroe(heroeID2)])
    .then(([heroe1, heroe2]) => {
    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
}).catch(err => {
    alert(err);
}).finally(()=>{
    console.log('Se terminó el Promise.all');
});

console.log('Fin del programa');

// buscarHeroe(heroeID1, (err, heroe1) => {
//     if(err) return console.error(err);
//     buscarHeroe(heroeID2, (err, heroe2) => {
//         if(err) return console.error(err);
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
//     })
// });