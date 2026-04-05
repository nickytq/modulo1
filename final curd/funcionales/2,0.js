
let personas = [];
    if(localStorage.getItem("personas")){
        estudiantees = JSON.parse(localStorage.getItem("personas"));

    }

    let estudiantees = [];
    function guardar() {
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let nie = document.getElementById("nie").value;
        let edad = document.getElementById("edad").value;
        if (nombre === "" || apellido === "" || nie === "" || edad=== "") {
            alert("Todos los campos son obligatorios");
        } else {
            let estudiante = {
                nombre : nombre,
                apellido : apellido,
                nie : nie,
                edad: edad
            };
            estudiantees.push(estudiante); 
            localStorage.setItem(("estudiantees", JSON.stringify(estudiantees)));
            limpiar();
            mostrar();
        }
    }
    function mostrar() {
        let tabla = document.getElementById("tabla");
        tabla.innerHTML = "";
        for (let i = 0; i < estudiantees.length; i++) {
            tabla.innerHTML += `
                <tr>
                    <td>${estudiantees[i].nombre}</td>
                    <td>${estudiantees[i].apellido}</td>
                    <td>${estudiantees[i].nie}</td>
                    <td>${estudiantees[i].edad}</td>
                    <td>
                        <button class="btn btn-info btn-sm" onclick="editar(${i})">Editar</button>
                        <button class="btn btn-danger btn-sm" onclick="eliminar(${i})">Eliminar</button>
                    </td>
                </tr>
            `;
        }
    }
    function editar(i) {
        document.getElementById("nombre").value = estudiantees[i].nombre;
        document.getElementById("apellido").value = estudiantees[i].apellido;
        document.getElementById("nie").value = estudiantees[i].nie;
        document.getElementById("edad").value = estudiantees[i].edad;
        document.getElementById("indice").value = i;
    }
    function actualizar() {
    let i = document.getElementById("indice").value;
    if (i === "") {
        alert("Selecciona primero un estudiante");
        return;
    }
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let nie = document.getElementById("nie").value;
    let edad = document.getElementById("edad").value;
    if (nombre === "" || apellido === "" || nie === "" || edad === "") {
        alert("No se pueden dejar campos vacíos");
        return;
    }
    estudiantees[i].nombre = nombre;
    estudiantees[i].apellido = apellido;
    estudiantees[i].nie = nie;
    estudiantees[i].edad = edad;
    limpiar();
    mostrar();
}
        function eliminar(i) {
            if (confirm("¿Desea eliminar el registro?")) {
                estudiantees.splice(i, 1);
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
    function generarReporte() {
    if (estudiantees.length === 0) {
        alert("No hay estudiantes para generar el reporte");
        return;
    }

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Nombre,Apellido,NIE,Edad\n";

    estudiantees.forEach(est => {
        csvContent += `${est.nombre},${est.apellido},${est.nie},${est.edad}\n`;
    });

    const encodeUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodeUri);
    link.setAttribute("download", "reporte_estudiantes.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}