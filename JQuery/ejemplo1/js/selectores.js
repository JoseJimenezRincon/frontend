$(document).ready(function () {
    //Muestra elementos de h1
    console.log($('h1'));
    //Obtiene todas las etiquetas descendientes a ul
    console.log($('ul a'));
    //Obtiene todas las etiquetas a hijas de las etiquetas li que son hijas de ul
    console.log($('ul > li > a'));
    //Obtiene la etiqueta h1 que tiene el id temario-jquery
    console.log($('h1#temario-jquery'));
    //Obtiene las etiquetas p que se encuentran justo despues de la etiqueta h1
    console.log($('#temario-jquery'));
    // Obteiene las etiquetas p que se encuentran al mismo nicel que la etiqueta h1
    console.log($('h1 + p'));
    // Obtiene todas las etiquetas a y p
    console.log($('a, p'));
});