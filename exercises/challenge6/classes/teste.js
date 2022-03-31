import { Animal } from "./animal.js";
import { Gato } from "./gato.js";
import { Cachorro } from "./cachorro.js";
import { Papagaio } from "./papagaio.js";

const cachorro = new Cachorro('Severino', 'Canis lupus familiaris', 'doméstico', true, 'Pastor Alemão');
const gato = new Gato('Tião', 'Felis catus', 'doméstico', true, 'pelado');
const papagaio = new Papagaio('Ademir', 'Amazona aestiva', 'selvagem', true, 76)

console.log(cachorro.mijarPoste())
console.log(gato.derrubarCaneta())
console.log(papagaio.imitar())

console.log(cachorro.raca)
console.log(gato.vocalizar())
console.log(papagaio.idade)