    let personas = [];

    //FUNCION GUARDAR
    function guardar() {

        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let nie = document.getElementById("nie").value;
        let edad = document.getElementById("edad").value;

        if (nombre === "" || apellido === "" || nie === "" || edad === "") {
            alert("Todos los campos son obligatorios");
        } else {
            //TIPO DE ARREGLO EN JAVASCRIPT
            let persona = {
                nombre: nombre,
                apellido:apellido,
                nie:nie,
                edad: edad
            };

            personas.push(persona); //Metodo Push en javascript para añadir a la pila
            limpiar();
            mostrar();
        }
    }

    // FUNCION MOSTRAR
    function mostrar() {
        let tabla = document.getElementById("tabla");
        tabla.innerHTML = "";

        //METODO LENGHT
        for (let i = 0; i < personas.length; i++) {

            //METODO INNER
            //MENSAJE ALERT PARA PERMITIR ELIMINAR UN DATO
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

    // EDITAR
    function editar(i) {
        document.getElementById("nombre").value = personas[i].nombre;
        document.getElementById("apellido").value = personas[i].apellido;
        document.getElementById("nie").value = personas[i].nie;
        document.getElementById("edad").value = personas[i].edad;
        document.getElementById("indice").value = i;
    }

    // ACTUALIZAR
    function actualizar() {

        let i = document.getElementById("indice").value;
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let nie = document.getElementById("nie").value;
        let edad = document.getElementById("edad").value;

        if (nombre === "" || apellido === "" || nie === "" || edad === "") {
            alert("No se pueden dejar campos vacíos");
        } else {

            personas[i].nombre = nombre;
            personas[i].apellido = apellido;
            personas[i].nie = nie;
            personas[i].edad = edad;
            limpiar();
            mostrar();          
        }
    }

        // ELIMINAR
        function eliminar(i) {

            if (confirm("¿Desea eliminar el registro?")) {
                personas.splice(i, 1);
                mostrar();
            }
        }

    // LIMPIAR
    function limpiar() {
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("nie").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("indice").value = "";
    }

