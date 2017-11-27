$(document).ready(function(){
    // Modificamos el texto del primer titulo
    $('#temario-curso').text('Titulo 1');
    // Permite pular el boton
    $('button').removeAttr('disabled');
    // Ocultamos etiquetas h1
    $('h1').hide();
    // Elimina el ultimo elemento
    $('li:last').remove();

});