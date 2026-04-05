let personas = [];

let botonguardar = document.getElementById("boton_guardar");
botonguardar.hidden = false;
let botonactualizar = document.getElementById("boton_actualizar");
botonactualizar.hidden = true;  

if (localStorage.getItem("personas")) {
    personas = JSON.parse(localStorage.getItem("personas"));
} 

mostrar();

function guardar() {
    
    let nombre = document.getElementById("html_nombre").value;
    let nie = document.getElementById("html_nie").value;
    let edad = document.getElementById("html_edad").value;
    let apellido = document.getElementById("html_apellido").value;


    if (nombre === "" || edad === "" || apellido === "" || nie === "") {
        alert("Todos los campos son obligatorios");
        } else if (edad < 3 || edad > 20) {
        alert("La edad debe estar entre 3 y 20 años ");
        }  else {

        let persona = {
            nombre: nombre,
            edad: edad,
            apellido: apellido,
            nie: nie
        };
        console.log(persona);

        personas.push(persona);

        localStorage.setItem("personas", JSON.stringify(personas));

        botonactualizar.hidden = true;

        limpiar();
        mostrar();
    }

}

function mostrar() {

    let tabla = document.getElementById("tabla");
    tabla.innerHTML = "";

    for (let contador_indices = 0; contador_indices < personas.length; contador_indices++) {

        tabla.innerHTML += `
            <tr>
                <td>${personas[contador_indices].nombre}</td>
                <td>${personas[contador_indices].apellido}</td>
                <td>${personas[contador_indices].nie}</td>
                <td>${personas[contador_indices].edad}</td>
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
    document.getElementById("html_nombre").value = personas[indice].nombre;
    document.getElementById("html_apellido").value = personas[indice].apellido;
    document.getElementById("html_nie").value = personas[indice].nie;
    document.getElementById("html_edad").value = personas[indice].edad;
    document.getElementById("html_indice").value = indice;
}

function actualizar() {
    let i = document.getElementById("html_indice").value;
    let nombre = document.getElementById("html_nombre").value;
    let apellido = document.getElementById("html_apellido").value;
    let nie = document.getElementById("html_nie").value;
    let edad = document.getElementById("html_edad").value;

    if (nombre === "" || edad === "" || apellido === "" || nie === "") {
            alert("Todos los campos son obligatorios");
            } else if (edad < 3 || edad > 20) {
        alert("La edad debe estar entre 3 y 20 años ");
    } else {

        personas[i].nombre = nombre;
        personas[i].edad = edad;
        personas[i].apellido = apellido;
        personas[i].nie = nie;

        localStorage.setItem("personas", JSON.stringify(personas));

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

    localStorage.setItem("personas", JSON.stringify(personas));

        mostrar();
    }

   
}

function limpiar() {
    botonactualizar.hidden = true;
    botonguardar.hidden = false;


    document.getElementById("html_nombre").value = "";
    document.getElementById("html_apellido").value = "";
    document.getElementById("html_nie").value = "";
    document.getElementById("html_edad").value = "";
    document.getElementById("html_indice").value = "";
}

