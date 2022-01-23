var botonEncriptar = document.getElementById("botonEncriptar");
var botonDesencriptar = document.getElementById("botonDesencriptar");
var botonCopiarResultado = document.getElementById("botonCopiarResultado");

botonEncriptar.addEventListener("click",function(){

    var aCodificar = document.getElementById("aCodificar");
    var resultado = encriptarTexto(aCodificar.value);

    var textResultado = document.getElementById("textResultado");
    textResultado.value = resultado;

    aCodificar.value = "";    

})

botonDesencriptar.addEventListener("click",function(){

    var aCodificar = document.getElementById("aCodificar");
    var resultado = desencriptarTexto(aCodificar.value);

    var textResultado = document.getElementById("textResultado");
    textResultado.value = resultado;
    
    aCodificar.value = "";    

})

botonCopiarResultado.addEventListener("click",function(){

    var aCodificar = document.getElementById("aCodificar");
    var textResultado = document.getElementById("textResultado");

    aCodificar.value = textResultado.value;
    textResultado.value = "";    

})