 function actualizar(){

   	cita = document.getElementById('cita').value;

   	var p = document.createElement("p");
    var texto = document.createTextNode('"' + cita + '"');
    p.appendChild(texto);
    var resultado = document.getElementById("resultado");
    resultado.appendChild(p);

  	return false;
}
