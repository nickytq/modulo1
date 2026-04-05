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
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let nie = document.getElementById("nie").value;
        let edad = document.getElementById("edad").value;
        if (nombre === "" || apellido === "" || nie === "" || edad === "") {
            alert("No se pueden dejar campos vacíos");
        } else {
            estudiantees[i]. nombre =  nombre;
            estudiantees[i]. apellido = apellido;
            estudiantees[i]. nie = nie;
            estudiantees[i]. edad = edad;
            limpiar();
            mostrar();          
        }
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
let estudiantes = [
    { nombre: "messi", apellido: "ronaldo", edad: "58", nie: "654321" },
    { nombre: "neymar", apellido: "magico", edad: "21", nie: "789010" }
];

let indexactualizar = -1;
function mostrarestudiantes() {
    const indice = document.getElementById("indice");
    indice.innerHTML = "";
    estudiantes.forEach((estudiante, index) => {
    indice.innerHTML += `
    <li>
        ${estudiante.nombre} ${estudiante.apellido} - NIE: ${estudiante.nie} - Edad: ${estudiante.edad}
        <button class="boton-eliminar" onclick="eliminarestudiantes(${index})">Eliminar</button>
        <button class="boton-editar" onclick="editarestudiantes(${index})">Editar</button>
    </li>
    `;
});
}

function agregar() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const nie = document.getElementById("nie").value;
    const edad = document.getElementById("edad").value;
    if (nombre === "" || apellido === "" || nie === "" || edad === ""){
        alert("Rellene todo los campos");
    return;
    }
    estudiantes.push({ nombre, apellido, nie, edad });
    limpiar();
    mostrarestudiantes();
    
}
function generar_Reporte(){
    let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
    if(estudiantes.length === 0){
        alert("No hay estudiantes para generar el reporte")
        return;
    }
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent +="Nombre,Apellido,NIE,Edad\n";
    estudiantes.forEach(est => {
        const row = `${est.nombre},${est.apellido},${est.nie},${est.edad}`;
        csvContent += row + "\n";
    })
    const encodeUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodeUri);
    link.setAttribute("download", "reporte_estudiantes.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function eliminarestudiantes(index) {
    estudiantes.splice(index, 1);
    mostrarestudiantes();
}

function editarestudiantes(index) {
    let a = estudiantes[index];
    document.getElementById("nombre").value = a.nombre;
    document.getElementById("apellido").value = a.apellido;
    document.getElementById("nie").value = a.nie;
    document.getElementById("edad").value = a.edad;
    indexactualizar = index;
}

function actualizar() {
    if (indexactualizar === -1) return;
    estudiantes[indexactualizar].nombre = document.getElementById("nombre").value;
    estudiantes[indexactualizar].apellido = document.getElementById("apellido").value;
    estudiantes[indexactualizar].nie = document.getElementById("nie").value;
    estudiantes[indexactualizar].edad = document.getElementById("edad").value;
    indexactualizar = -1;
    limpiar();
    mostrarestudiantes();
}
function limpiar() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("nie").value = "";
    document.getElementById("edad").value = "";
}

function GenerarReporte() {
    let report = "REPORTE DE ESTUDIANTES\n\n";

    for (let i = 0; i < estudiantes.length; i++) {
    let a = estudiantes[i];

    report += "Nombre: " + a.nombre + " " + a.apellido + "\n";
    report += "NIE: " + a.nie + "\n";
    report += "Edad: " + a.edad + "\n\n";
    }

    document.getElementById("reporte").innerText = report;
}

mostrarestudiantes();
