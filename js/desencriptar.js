function desencriptarTexto(texto){

    var mensajeDesencriptado = texto
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

    return mensajeDesencriptado;
}