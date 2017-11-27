$(document).ready(function(){
    // Obtenenmos la etiqueta h1 que contiene jQuery
    console.log($('h1:contains("jQuery")'));
    // Obtenemos las etiquetas a que estan en una posicion par
    console.log($('a:even'));
    // Obtnenmos el primer li
    console.log($('ul li:first-child'));
    // Obtener el primer li desde la posicion 0
    console.log($('ul li:first-child'));
    // Obtner todo lo que no tenga la palabra 'enlace'
    console.log($('li').not('enlace'));
});