$(document).ready(function () {
    jQuery(window).load(function () {
        $(".loader").delay(1500).fadeOut("slow");
    });

    var touch = $('#resp-menu');
    var menu = $('.menu');

    $(touch).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(".rotate").click(function () {
        $(this).toggleClass("down");
    })

    $("#totalfila").append($("#tablefila tr").length - 1);
    $("#totalabertos").append($("#tableabertos tr").length - 1);
    $("#totalresp").append($("#tableresp tr").length - 1);
    $("#totalfin").append($("#tablefin tr").length - 1);
    $("#totalall").append($("#tableall tr").length - 1);

    $("#totalfilaslide").append($("#tablefilaslide tr").length - 1);
    $("#totalabertoslide").append($("#tableabertoslide tr").length - 1);
    $("#totalrespslide").append($("#tablerespslide tr").length - 1);
    $("#totalfinslide").append($("#tablefinslide tr").length - 1);
    $("#totalallslide").append($("#tableallslide tr").length - 1);
});

//TICKETS FILA
$('#fila').change(function () {
    if ($(this).is(":checked")) {
        $("#col-fila").fadeIn();
        $("#col-fila").fadeIn("slow");
        $("#col-fila").fadeIn(60000);
    } else {
        $("#col-fila").fadeOut();
        $("#col-fila").fadeOut("slow");
        $("#col-fila").fadeOut(60000);
    }
});

//TICKETS ABERTOS
$('#abertos').change(function () {
    if ($(this).is(":checked")) {
        $("#col-aberto").fadeIn();
        $("#col-aberto").fadeIn("slow");
        $("#col-aberto").fadeIn(60000);
    } else {
        $("#col-aberto").fadeOut();
        $("#col-aberto").fadeOut("slow");
        $("#col-aberto").fadeOut(60000);
    }
});

//TICKETS RESPONDIDOS
$('#resp').change(function () {
    if ($(this).is(":checked")) {
        $("#col-resp").fadeIn();
        $("#col-resp").fadeIn("slow");
        $("#col-resp").fadeIn(60000);
    } else {
        $("#col-resp").fadeOut();
        $("#col-resp").fadeOut("slow");
        $("#col-resp").fadeOut(60000);
    }
});

//TICKETS FINALIZADOS
$('#fin').change(function () {
    if ($(this).is(":checked")) {
        $("#col-fin").fadeIn();
        $("#col-fin").fadeIn("slow");
        $("#col-fin").fadeIn(60000);
    } else {
        $("#col-fin").fadeOut();
        $("#col-fin").fadeOut("slow");
        $("#col-fin").fadeOut(60000);
    }
});

//TICKETS TODOS
$('#all').change(function () {
    if ($(this).is(":checked")) {
        $("#col-all").fadeIn();
        $("#col-all").fadeIn("slow");
        $("#col-all").fadeIn(60000);
    } else {
        $("#col-all").fadeOut();
        $("#col-all").fadeOut("slow");
        $("#col-all").fadeOut(60000);
    }
});

//TICKETS SLIDESHOW
$('#slide').change(function () {
    if ($(this).is(":checked")) {
        $("#slideShow").fadeIn();
        $("#slideShow").fadeIn("slow");
        $("#slideShow").fadeIn(60000);
        $("#dot").fadeIn();
        $("#dot").fadeIn("slow");
        $("#dot").fadeIn(60000);
    } else {
        $("#slideShow").fadeOut();
        $("#slideShow").fadeOut("slow");
        $("#slideShow").fadeOut(60000);
        $("#dot").fadeOut();
        $("#dot").fadeOut("slow");
        $("#dot").fadeOut(60000);
    }
});

