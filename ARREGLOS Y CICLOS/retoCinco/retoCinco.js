'use strict';


// a) Vamos a crear un nuevo array numbers que contendrá 5 números cualesquiera. Vamos a recorrer el array mediante 
//un bucle para calcular la media de los números(la suma de los números dividido por cuántos hay, es decir, 5).
//Necesitaremos una variable(acumulador) para ir almacenando la suma de todos los números y después poder hacer la media.
//Para comprobar si el resultado es correcto, vamos a loguearlo en la consola.

//b) Ahora vamos añadir un nuevo número al array y repetir el cálculo de la media.En este caso, para calcular la media 
//habrá que sumar todos y dividir entre el total, que ahora es 6.

//c) Vamos a generalizar el código anterior creando una función average.Esta función toma como parámetro un array numbers, 
//calula la media del array(de cualquier longitud) y devuelve la media.Para poder trabajar con arrays de cualquier 
//longitud, deberemos consultar la longitud del array mediante su propiedad length.Para comprobar que la función hace el
// cálculo correcto, la invocaremos(o ejecutaremos para que no suene tan esotérico) varias veces pasándole como argumento
// un array con diferente longitud cada vez y mostraremos el resultado en la consola del navegador.


// PARTE A
const numbers = [4, 4, 4, 4, 4];
let acumulador = 0;

// La i empieza en 0 porque el índice de los arrays empieza en 0 también
for (let i = 0; i < numbers.length; i++) {
    acumulador += numbers[i];

}
let media = (acumulador) / 5;
console.log('La media del listado de numeros es :  ' + media);


// PARTE B

const numbers = [3, 3, 3, 3, 3, 3];
let acumulador = 0;

// La i empieza en 0 porque el índice de los arrays empieza en 0 también
for (let i = 0; i < numbers.length; i++) {
    acumulador += numbers[i];

}
let media = (acumulador) / 6;
console.log('La media del listado de numeros es :  ' + media);

// PARTE C

const numbers = [3, 3, 3, 3, 3, 3];

function calculate(numbers) {
    var sum = 0;
    var count = numbers.length;
    for (var i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum / count;
}