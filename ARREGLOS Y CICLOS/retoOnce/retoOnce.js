let numero = 0;
let space = '';
let contador = 1;

numero = prompt('que altura quieres para tu arbol:');

acomulado = acomulado+'▲';

let estrellita='★';
let tronquito = '|';

console.log(space.repeat(numero)+estrellita);
for (let i = numero; i >= 0; i--) {
    console.log(space.repeat(i)+acomulado.repeat(contador)); 
    contador+=2;
}
console.log(space.repeat(numero)+tronquito);