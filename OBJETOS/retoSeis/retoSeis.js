function getID(id) {
    return document.getElementById(id).value;
    
}

function innerHTML(id,result) {
    return document.getElementById(id).innerHTML=result;
}

function contadorCaracteres() {
    setInterval(function() {
        var c = getID('txt');
        if (c.length>50) {
            innerHTML("txtVista", "SOLO PERMITE 50 CARACTERES");
        }else{
            innerHTML('txt', c.length);
        }
        
    },0000)
    
}