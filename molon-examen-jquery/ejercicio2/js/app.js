$(document).ready(function(){
   
    $("#registro").submit(function(e){
        e.preventDefault();
        var edad = $("#edad").val();
        var altura = $("#altura").val();


        if(edad<2){
            $("#edad").after(
                '<div class="alert alert-danger">No Puedes Montar En La Atraccion</div>'
            );
        }
        if(altura<120){
            $("#altura").after(
                    '<div class="alert alert-danger">No Puedes Montar En La Atraccion</div>'
                );
            }
        if(edad>2){
            $("#edad").after(
                '<div class="alert alert-success">Puedes Montar En La Atraccion</div>'
            );
        }
        if(altura>120){
            $("#altura").after(
                     '<div class="alert alert-success">Puedes Montar En La Atraccion</div>'
                    );
         }
    });
});