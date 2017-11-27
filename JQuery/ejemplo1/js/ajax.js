$(document).ready(function () {
    $.ajax({
        url: 'https://ejemplo-d49a3.firebaseio.com/tareas.json',
        type: 'GET',
        dataType: 'json'
    }).done(function (datos) {
        console.log(datos);
        for(var id in datos){
            $('#ajax').append(`<li>${datos[id].tarea}</li>`);
        }
        
    }).fail(function () {
        console.log('Ha ocurrido un error');
    });

    // $.post({
    //     url: 'https://ejemplo-d49a3.firebaseio.com/tareas.json',
    //     data: JSON.stringify({tarea:'Una tarea nueva'})
    // }).done(function(){
    //     console.log('Se ha guardado correctamente.');
    // }).fail(function(){
    //     console.log('Ha ocurrido un error.');
    // });

    $('#datostxt').load('datos/data.txt');
    $.getJSON('datos/data.json', function(datos){
        console.log(datos);
    });
});