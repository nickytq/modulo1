let libros = [];

let botonguardar = document.getElementById("boton_guardar1");
botonguardar.hidden = false;
let botonactualizar = document.getElementById("boton_actualizar1");
botonactualizar.hidden = true;  

if (localStorage.getItem("libros")) {
    libros = JSON.parse(localStorage.getItem("libros"));
} 

mostrar();

function guardar() {

    let genero = document.getElementById("html_genero").value;
    let nombre = document.getElementById("html_nombre").value;
    let autor = document.getElementById("html_autor").value;
    let fecha = document.getElementById("html_fecha").value;


    if (genero === "" || nombre === "" || autor === "" || fecha === "") {
        alert("Todos los campos son obligatorios");
        }  else {

        let libro = {
            genero : genero,
            nombre: nombre,
            autor: autor,
            fecha: fecha
        };
        console.log(libro);

        libros.push(libro);

        localStorage.setItem("libros", JSON.stringify(libros));

        botonactualizar.hidden = true;

        limpiar();
        mostrar();
    }

}

function mostrar() {

    let tabla = document.getElementById("tabla1");
    tabla.innerHTML = "";

    for (let contador_indices = 0; contador_indices < libros.length; contador_indices++) {

        tabla.innerHTML += `
            <tr>
                <td>${libros[contador_indices].genero}</td>
                <td>${libros[contador_indices].nombre}</td>
                <td>${libros[contador_indices].autor}</td>
                <td>${libros[contador_indices].fecha}</td>
                <td>
                        <button class="btn btn-info btn-sm" onclick="editar(${contador_indices})">Editar</button>
                        <button class="btn btn-danger btn-sm" onclick="eliminar(${contador_indices})">Eliminar</button>
                    </td>
            </tr>
        `;
    }
}

function editar(indice) {
    botonactualizar.hidden = false;
    botonguardar.hidden = true;
    document.getElementById("html_genero").value = personas[indice].nombre;
    document.getElementById("html_nombre").value = personas[indice].apellido;
    document.getElementById("html_autor").value = personas[indice].nie;
    document.getElementById("html_fecha").value = personas[indice].edad;
    document.getElementById("html_indice1").value = indice;
}

function actualizar() {
    let i = document.getElementById("html_indice1").value;
    let genero = document.getElementById("html_genero").value;
    let nombre = document.getElementById("html_nombre").value;
    let autor = document.getElementById("html_autor").value;
    let fecha = document.getElementById("html_fecha").value;

    if (genero === "" || nombre === "" || autor === "" || fecha === "") {
            alert("Todos los campos son obligatorios");
    } else {

        libros[i].genero = genero;
        libros[i].nombre = nombre;
        libros[i].autor = autor;
        libros[i].fecha = fecha;

        localStorage.setItem("libros", JSON.stringify(libros));

        botonactualizar.hidden = true;
        botonguardar.hidden = false;

        limpiar();
        mostrar();
    }
    
}

function eliminar(i) {
    let yesorno = confirm("¿Desea eliminar este registro?");
    console.log(yesorno);

    if (yesorno) {
        personas.splice(i, 1);

    localStorage.setItem("libros", JSON.stringify(libros));

        mostrar();
    }

   
}

function limpiar() {
    botonactualizar.hidden = true;
    botonguardar.hidden = false;


    document.getElementById("html_genero").value = "";
    document.getElementById("html_nombre").value = "";
    document.getElementById("html_autor").value = "";
    document.getElementById("html_fecha").value = "";
    document.getElementById("html_indice1").value = "";
}
