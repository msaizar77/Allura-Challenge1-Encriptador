var botonEncriptar = document.getElementById("btn-encriptar");
var botonDesencriptar = document.getElementById("btn-desencriptar");
var botonCopiarResultado = document.getElementById("btn-copy");

botonEncriptar.addEventListener("click",function(event){
    
    event.preventDefault();

    var aCodificar = document.getElementById("input-texto");

    if (!validarEntrada(aCodificar.value)) return;

    var resultado = encriptarTexto(aCodificar.value);

    var textResultado = document.getElementById("msg");
    textResultado.value = resultado;

    aCodificar.value = "";    

})

botonDesencriptar.addEventListener("click",function(event){
    
    event.preventDefault();

    var aCodificar = document.getElementById("input-texto");
    var resultado = desencriptarTexto(aCodificar.value);

    var textResultado = document.getElementById("msg");
    textResultado.value = resultado;
    
    aCodificar.value = "";    

})

botonCopiarResultado.addEventListener("click",function(event){

    event.preventDefault();
    
    var aCodificar = document.getElementById("input-texto");
    var textResultado = document.getElementById("msg");

    var txtEncriptado = textResultado.value;
    navigator.clipboard.writeText(txtEncriptado);

    textResultado.value = "";    
    aCodificar.value = "";
    aCodificar.focus();

})