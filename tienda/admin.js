if(localStorage.getItem("logueado") !== "true"){
    alert("Debe iniciar sesion");
    window.location = Login.html
}

function cerrarSesion(){
    localStorage.removeItem("logueado");
    window.location.href = login.html
}