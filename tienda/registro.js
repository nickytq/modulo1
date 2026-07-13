let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
function registrar(){
    let nombre = document.getElementById("nombre").value.trim();
    let usuario = document.getElementById("usuario").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let clave  = document.getElementById("clave").value;
    if(nombre=="" || usuario=="" || correo=="" || clave==""){
        document.getElementById("mensaje").textContent="Complete todos los campos";
        return;
    }
    let existe = usuarios.find(u => u.usuario === usuario);
    if(existe){
        document.getElementById("mensaje").textContent="Ese usuario ya existe";
        return
    }
    usuarios.push({
        nombre,
        usuario,
        correo,
        clave
    });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Usuario registrado correctamente");
    window.location.href="iniciosesion.html"
}
