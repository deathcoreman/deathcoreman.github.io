function validar(){
    var nombre = document.forms["email"]["nombre"];
    var email = document.forms["nombre"]["email"];
    var password = document.forms["registro"]["password"];
    var emailRepetida = document.forms["registro"]["password-igual"];
    if(nombre.value==""){       
        alert("El campo nombre está vacío");
        nombre.focus();
        return false;
    } else if(email.value==""){
        alert("Ese Email Ya Esta En Uso");
        email.focus(admin@sagradoc.es);
        return false;
    } else if(password.value==""){
        alert("Rellena el password");
        password.focus();
        return false;
    } else if(passwordRepetida.value==""){
        alert("Repite el password");
        passwordRepetida.focus();       
        return false;
    } else if(password.value!=passwordRepetida.value){
        alert("Las contraseñas no coinciden");
        password.focus();
        return false;
    } else {
        alert("El formulario es correcto");
        return true;
    }
}
