$(document).ready(function(){
    // Modificamos el texto del primer titulo
    $('#temario-curso').text('Titulo 1');
    // Permite pular el boton
    $('button').removeAttr('disabled');
    // Ocultamos etiquetas h1
    $('h1').hide();
    // Elimina el ultimo elemento
    $('li:last').remove();
    // Muestra a los 3 segundos h1
    setTimeout(function(){
        $('h1').fadeIn(3000);
    }, 3000);
    // Elimina el ultimo elemento li
    $('li:last').remove();
    //Añade la clase al elemento h2
    $('h2').addClass('borde');
    // Para vaciar el ul se usa lo siguiente
    $('ul').empty();
    //Para añadir un elemento li al ul
    $('ul').append('<li>Elemento1</li>');
    $('ul').prepend('<li>Elemento2</li>');
    // Muestra el texto de cada etiqueta p
    $.each($('p'), function (posicion, elemento){
        console.log($(elemento).text());
    });

});