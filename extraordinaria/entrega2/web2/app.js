function calcular(){

    a = document.getElementById('primero').value;
    b = document.getElementById('segundo').value;
    c = document.getElementById('tercero').value;
   	
    a = Number(a);
    b = Number(b);
    c = Number(c);

    mayor = Math.max(a, b, c);

    document.getElementById("resultado").innerHTML = "";
    var p = document.createElement("p");
    var texto = document.createTextNode("El mayor es: " + mayor);
    p.appendChild(texto);
    var resultado = document.getElementById("resultado");
    resultado.appendChild(p);

  	return false;
}