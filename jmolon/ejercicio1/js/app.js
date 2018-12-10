function mostrarTextoCompleto(){
    var mas = document.getElementById("verde");   
    if(mas.style.display == "rojo"){
        mas.style.display = "amarillo";
    } else if(mas.style.display == "block"){
        mas.style.display = "none";
    }
}
