    let libros = [];

    //FUNCION GUARDAR
    function guardar() {

        let genero = document.getElementById("genero").value;
        let nombre = document.getElementById("nombre").value;
        let autor = document.getElementById("autor").value;
        let fecha = document.getElementById("fecha").value;

        if (genero === "" || nombre === "" || autor === "" || fecha=== "") {
            alert("Todos los campos son obligatorios");
        } else {
            //TIPO DE ARREGLO EN JAVASCRIPT
            let libro = {
                genero : genero,
                nombre : nombre,
                autor : autor,
                fecha: fecha
            };

            libros.push(libro); //Metodo Push en javascript para añadir a la pila
            limpiar();
            mostrar();
        }
    }

    // FUNCION MOSTRAR
    function mostrar() {
        let tabla = document.getElementById("tabla");
        tabla.innerHTML = "";

        //METODO LENGHT
        for (let i = 0; i < libros.length; i++) {

            //METODO INNER
            //MENSAJE ALERT PARA PERMITIR ELIMINAR UN DATO
            tabla.innerHTML += `
                <tr>
                    <td>${libros[i].genero}</td>
                    <td>${libros[i].nombre}</td>
                    <td>${libros[i].autor}</td>
                    <td>${libros[i].fecha}</td>
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
        document.getElementById("genero").value = libros[i].genero;
        document.getElementById("nombre").value = libros[i].nombre;
        document.getElementById("autor").value = libros[i].autor;
        document.getElementById("fecha").value = libros[i].fecha;
        document.getElementById("indice").value = i;
    }

    // ACTUALIZAR
    function actualizar() {

        let i = document.getElementById("indice").value;
        let genero = document.getElementById("genero").value;
        let nombre = document.getElementById("nombre").value;
        let autor = document.getElementById("autor").value;
        let fecha = document.getElementById("fecha").value;

        if (genero === "" || nombre === "" || autor === "" || fecha === "") {
            alert("No se pueden dejar campos vacíos");
        } else {

            libros[i]. genero =  genero;
            libros[i]. nombre = nombre;
            libros[i].autor = autor;
            libros[i].fecha = fecha;
            limpiar();
            mostrar();          
        }
    }

        // ELIMINAR
        function eliminar(i) {

            if (confirm("¿Desea eliminar el registro?")) {
                libros.splice(i, 1);
                mostrar();
            }
        }

    // LIMPIAR
    function limpiar() {
        document.getElementById("genero").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("autor").value = "";
        document.getElementById("fecha").value = "";
        document.getElementById("indice").value = "";
    }
