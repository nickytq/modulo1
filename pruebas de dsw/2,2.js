    let personas = [];
    function guardar() {
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let nie = document.getElementById("nie").value;
        let edad = document.getElementById("edad").value;
        if (nombre === "" || apellido === "" || nie === "" || edad=== "") {
            alert("Todos los campos son obligatorios");
        } else {
            let persona = {
                nombre : nombre,
                apellido : apellido,
                nie : nie,
                edad: edad
            };
            personas.push(persona); 
            limpiar();
            mostrar();
        }
    }
    function mostrar() {
        let tabla = document.getElementById("tabla");
        tabla.innerHTML = "";
        for (let i = 0; i < personas.length; i++) {
            tabla.innerHTML += `
                <tr>
                    <td>${personas[i].nombre}</td>
                    <td>${personas[i].apellido}</td>
                    <td>${personas[i].nie}</td>
                    <td>${personas[i].edad}</td>
                    <td>
                        <button class="btn btn-info btn-sm" onclick="editar(${i})">Editar</button>
                        <button class="btn btn-danger btn-sm" onclick="eliminar(${i})">Eliminar</button>
                    </td>
                </tr>
            `;
        }
    }
    function editar(i) {
        document.getElementById("nombre").value = personas[i].nombre;
        document.getElementById("apellido").value = personas[i].apellido;
        document.getElementById("nie").value = personas[i].nie;
        document.getElementById("edad").value = personas[i].edad;
        document.getElementById("indice").value = i;
    }
    function actualizar() {
        let i = document.getElementById("indice").value;
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let nie = document.getElementById("nie").value;
        let edad = document.getElementById("edad").value;
        if (nombre === "" || apellido === "" || nie === "" || edad === "") {
            alert("No se pueden dejar campos vacíos");
        } else {
            personas[i]. nombre =  nombre;
            personas[i]. apellido = apellido;
            personas[i]. nie = nie;
            personas[i]. edad = edad;
            limpiar();
            mostrar();          
        }
    }
        function eliminar(i) {
            if (confirm("¿Desea eliminar el registro?")) {
                personas.splice(i, 1);
                mostrar();
            }
        }
    function limpiar() {
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("nie").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("indice").value = "";
    }