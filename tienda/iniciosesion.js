function login(){
    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) ||[];
    if(usuario ==="admin" && clave==="1234"){
        localStorage.setItem("logueado", "true");
        localStorage.setItem("rol", "admin");
        window.location.href="inventario.html";
        return;
    }
    let encontrado = usuarios.find(u =>
        u.usuario===usuario && u.clave===clave
    );
    if(encontrado){
        localStorage.setItem("logueado","true");
        localStorage.setItem("rol","cliente")
        localStorage.setItem("usuario", encontrado.nombre);
        window.location.href="tienda2.html"
    }else{
        document.getElementById("mensaje").textContent ="Usuario o contraseña incorrecta"
    }
}