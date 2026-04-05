let usuarios = [];

function aceptar() {
    if (localStorage.getItem("usuarios")) {
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
    } 

    let user = document.getElementById("login_user").value;
    let password = document.getElementById("login_password").value;

    let encontrado = false;

    for (let contador_users = 0; contador_users < usuarios.length; contador_users++) {
        let usuario = usuarios[contador_users];
        if (user === usuario.user && password === usuario.password) {
            alert("Bienvenido " + usuario.user);
            window.location.href = "crud.html";
            encontrado = true;
            return;
        }
    }
        
    if (encontrado == false) {
        alert("Usuario o contraseña incorrectos");
    }
}
