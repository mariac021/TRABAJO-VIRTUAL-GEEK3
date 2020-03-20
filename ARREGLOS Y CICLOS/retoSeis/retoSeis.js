const message = document.getElementById('message'); /*primer h1*/
const message1 = document.getElementById('message1'); /*segundo h1*/
const button=document.getElementById('button');

 /*llenamos el array*/
function viewsArrayInput(){
  var arrayInput= new Array();
  var inputsValues =document.getElementsByClassName('datoInput'),
  namesvalues= [].map.call(inputsValues,function(dataInput){
    arrayInput.push(dataInput.value);
  });

  /*for..of...*/
    for(const peliculas of arrayInput){
     console.log(`!a mi también me encantó ${peliculas}! Tenemos mucho en común, humana.`);
      message.querySelectorAll=(`!a mi también me encantó ${peliculas}! Tenemos mucho en común, humana.`);
      message.innerHTML=(`!a mi también me encantó ${peliculas}! Tenemos mucho en común, humana.`);
    }
   
    
    

  }



button.addEventListener("click",viewsArrayInput);