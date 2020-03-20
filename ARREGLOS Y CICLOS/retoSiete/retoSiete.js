var media=0;
var count=0;
var acum=0;
var nombrejoven=0;
var countdiseñadoras=0;

const geekGirls=[

    {
        nombre: 'Maria',
        edad: 29,
        profesion: 'Diseñadora'
      }, 
      {
        nombre: 'Lucia',
        edad: 31,
        profesion: 'Ingeniera química'
      },
      {
        nombre: 'Susana',
        edad: 34,
        profesion: 'Periodista'
      },
      {
        nombre: 'Rocio',
        edad: 25,
        profesion: 'actriz'
      },
      {
        nombre: 'Inmaculada',
        edad: 21,
        profesion: 'Diseñadora'
      },


];

console.log(geekGirls)

count=countGeekGirls(geekGirls);


function countGeekGirls(geekGirls){
    var cont1=0;
    for (let i = 0; i < geekGirls.length; i++) {

       cont1=cont1+1;
        
    }
    return cont1

}

console.log("hay "+ count+ " geekGirls :D")

/* Segunda función */

media=averageAge(geekGirls)


function averageAge(geekGirls){
    
var acum=0;
    dim=geekGirls.length;
    for (let i = 0; i < geekGirls.length; i++){
        
        acum+=geekGirls[i].edad;
          
       
    }
    return acum/dim
}
console.log('La media del numero es '+ media);

/*Tercera Función*/

nombrejoven= theYoungest(geekGirls)

function theYoungest(geekGirls){
let edad=100;
 let mayor="";

for (let i = 0; i < geekGirls.length; i++){
    if(geekGirls[i].edad <edad)
   
    mayor=geekGirls[i].nombre;
  
} return mayor


}

console.log('La  menor del grupo es  '+ nombrejoven);


/*Cuarta Función*/
const geekGirlsprofesion=geekGirls.filter(item=>{
    return item.profesion==='Diseñadora';},0
    
    )
    console.log ('El numero de diseñadoras es '+geekGirlsprofesion)