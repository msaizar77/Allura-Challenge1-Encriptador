function validarEntrada(texto){

    let letrasValidas = "abcdefghijklmnñopqrstuvwxyz ";
    for (let letra of texto) {
        if (!letrasValidas.includes(letra)) {
            alert("La letra `"+letra+"` no es válida");
            return false;
        }
    }
    return true;

}