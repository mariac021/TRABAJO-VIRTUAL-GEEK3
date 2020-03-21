let numero = 0;

numero = prompt('que altura quieres para tu arbol:');
acomulado='';

let estrellita='★';
let tronquito = '|';

console.log(estrellita)
for (let i = 0; i < numero; i++) {
    acomulado = acomulado+'▲';

    console.log(''+acomulado); 
}
console.log(tronquito);