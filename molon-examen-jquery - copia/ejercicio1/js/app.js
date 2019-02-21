$(document).ready(function(){
    $("p").hide();
    $("#btn-Mostrar-Anuncios-Completos").click(function(){
        $("h6").show();
        $("h3").show(); 
        $("p").show();
        $("#btn-Mostrar-Anuncios-Completos").css('background-color', 'green');  
        $("#btn-Ocultar-Autores").css('background-color', '##FFBF00');  
        $("#btn-Destacar-Titulos").css('background-color', '##086A87');  
    });
    $("#btn-Ocultar-Autores").click(function(){
        $("h3").show();
        $("h6").hide();
        $("p").show();
        $("#btn-Mostrar-Anuncios-Completos").css('background-color', 'green');  
        $("#btn-Ocultar-Autores").css('background-color', '##FFBF00');  
        $("#btn-Destacar-Titulos").css('background-color', '##086A87');    
    });
    $("#btn-Destacar-Titulos").click(function(){
        $("h3").css('background-color', '#FFFF00'); 
        $("h6").hide(); 
        $("p").show(); 
        $("#btn-Mostrar-Anuncios-Completos").css('background-color', 'green');  
        $("#btn-Ocultar-Autores").css('background-color', '##FFBF00');  
        $("#btn-Destacar-Titulos").css('background-color', '##086A87'); 
    });
});