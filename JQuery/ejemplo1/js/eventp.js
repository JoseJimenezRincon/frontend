$(document).ready(function(){
    $('img').on('mouseover', function(e){

    });

    $('#add-btn').on('click', function(){
        $('#datostxt').append('<button type="button" class="btn">Un boton</button>')
    });

    $('.btn').on('click', function(){
        console.log('Se detecta 1');
    });

    // Opcion buena
    $(document).on('click','#vaciar', function(){
        console.log('Se detecta 2');
    });
})