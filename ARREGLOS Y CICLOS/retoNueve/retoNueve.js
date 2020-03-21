let numero=0;

numero = prompt('Que altura quieres para tu arbolito:');
acumulado='';

for (let i = 0; i < numero; i++) {

    acumulado = acumulado+'▲';

    console.log('' + acumulado);
}