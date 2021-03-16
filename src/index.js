// import { promesaLenta, promesaMedia, promesaRapida } from "./js/promesas";

// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([promesaLenta, promesaMedia, promesaRapida])
//     .then(console.log)
//     .catch(console.warn);
// --------------------------------------------------------------------------------
// import { buscarHeroe, buscarHeroeAsync } from "./js/promesas";

// buscarHeroe("capiz").then(console.log).catch(console.warn);
// buscarHeroeAsync("irons").then(console.log).catch(console.warn);
// --------------------------------------------------------------------------------
// import { obtenerHeroesArr, obtenerHeroesAwait } from "./js/await";

// console.time('await');

// obtenerHeroesArr().then(heroes => {
//     console.table(heroes);
//     console.timeEnd('await');
// });

// console.time("await");

// obtenerHeroesAwait("capi2").then((heroe) => {
//     console.log(heroe);
//     console.timeEnd("await");
// });
// --------------------------------------------------------------------------------
// import { heroesCiclo } from "./js/await";

// heroesCiclo();
// --------------------------------------------------------------------------------
import { heroeIfAwait } from "./js/await";

heroeIfAwait("iron");