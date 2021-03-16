import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = ["capi", "iron", "spider"];

// export const obtenerHeroesArr = async() => {
//     const heroesArr = [];
//     for (const id of heroesIds) {
//         heroesArr.push(buscarHeroe(id));
//     }
//      // En lugar de hacer el await dentro del bucle for para cada promise, ejecutamos las promesas simultaneamente con Promise.all() y aplicamos await una sola vez
//      return await Promise.all(heroesArr);
// };
// -----------------------------------------------------------------------------------------------------------------
// export const obtenerHeroesArr = async() => { // Esta funciona es igual a la anterior pero mas eficiente
//     return await Promise.all(heroesIds.map(buscarHeroe));
// };
// -----------------------------------------------------------------------------------------------------------------
// export const obtenerHeroesAwait = async(id) => { // Manejo de errores con await a través de try-catch
//     try {
//         const heroe = await buscarHeroeAsync(id); // Esperar a que se resuelve la promesa
//         return heroe;
//     } catch (error) {
//         console.log('CATCH!!!');
//         // console.log(error);
//         return {
//             nombre: 'desconocido',
//             poder: 'desconocido'
//         }
//     }
// };

const heroesPromesas = heroesIds.map(buscarHeroe);

export const heroesCiclo = async() => {
    console.time("HeoresCiclo");

    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(console.log);

    //Lo siguiente es igual a las 2 anteriores
    for await (const heroe of heroesPromesas) {
        console.log(heroe);
    }

    //Lo siguiente no es igual, ya que en este caso se esta creando promesas y el programa mostrará el console.time mientras estas promesas se resuelven
    // heroesPromesas.forEach(async(p) => console.log(await p));

    console.timeEnd("HeoresCiclo");
};

export const heroeIfAwait = async(id) => {
    if ((await buscarHeroeAsync(id)).nombre == "Ironman") {
        console.log("Es el mejor de todos");
    } else {
        console.log("Naaa");
    }
};