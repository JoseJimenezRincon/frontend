$(document).ready(function () {
    $.ajax({
        url: 'https://jquery-lista-compra.firebaseio.com/productos.json',
        type: 'GET',
        dataType: 'json'
    }).done(function (datos) {
        for (var id in datos) {
            $('#productos').append(`<li><b>${datos[id].nombre}:</b> <a>${datos[id].precio} €</a> <button type="button" class="btn">Añadir cesta</button></li>`);
        }
    }).fail(function () {
        console.log('Ha ocurrido un error');
    });
});

$(document).on('click', '.btn', function () {
    // console.log($(this).parent().children()[0]);
    var nombre = $(this).parent().children()[0].textContent;
    var precio = $(this).parent().children()[1].textContent;
    var totalHTML = $(`#total`).text();
    var total = parseInt(precio) + parseInt(totalHTML);
    $('#cesta').append(`<li>${nombre} ${precio}</li>`);
    $('#total').text(`${total}`);
});

$(document).on('click', '#vaciar', function () {
    // console.log($(this).parent().children()[0]);
    $('#cesta').empty();
    $('#total').text(`0`);
});