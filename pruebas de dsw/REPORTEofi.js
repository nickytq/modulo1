let estudiantes =[
    {nombre: "messi", apellido:"ronaldo", edad:"58", nie: "654321"},
    {nombre: "neymar", apellido:"magico", edad:"21", nie: "789010"}
];
let indexactualizar =-1;
function mostrarestudiantes(){
    const indice =document.getElementById("indice");
    estudiantes.forEach((estudiante, index)=>{
        indice.innerHTML +=`
        <li>
        ${estudiante.nombre} ${estudiante.apellido} - Nie: ${estudiante.nie} - edad: ${estudiante.edad}
        <button onclick="eliminarestudiantes(${index})">Eliminar</button>
        <button onclick="editarestudiantes (${index})">Editar</button>
        </li>
        `;
})};
function agregar(){
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const nie = document.getElementById("nie").value;
    const edad = document.getElementById("edad").value;

    if (nombre ==="" || apellido ==="" || nie ==="" || edad ===""   ){
        alert("Por favor complete todos los campos");
        return;
    }
    estudiantes.push({ nombre, apellido, nie, edad});
    limpiar();
    mostrarestudiantes();
}
function eliminarestudiantes(index){
    estudiantes.splice(index,1);
    mostrarestudiantes();
}
function editarestudiantes(index) {
    let a = estudiantes[index];
    document.getElementById("nombre").value = a.nombre;
    document.getElementById("apellido").value = a.apellido;
    document.getElementById("nie").value = a.nie;
    document.getElementById("edad").value = a.edad;
    indexactualizar = index;
    limpiar();
    mostrarestudiantes();
}
function limpiar(){
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("nie").value = "";
    document.getElementById("edad").value = "";
}
function GeneraRreporte(){
    let report = "reporte de estudiantes:\n\n";
    for (let e = 0; e <estudiantes.length; e++){
    let a = estudiantes[e];
    report += "Nombre: " + a.nombre + "" + a.apellido + "\n"
    report += "nie: " + a.nie + "\n";
    report += "edad: " + a.edad + "\n\n";
    }
    console.log(report)
    document.getElementById("Reporte").innerText = report;
}
mostrarestudiantes();
function actualizar() {
    if (indexactualizar === -1) {
        alert("Selecciona un estudiante para editar");
        return;
    }

    estudiantes[indexactualizar].nombre = document.getElementById("nombre").value;
    estudiantes[indexactualizar].apellido = document.getElementById("apellido").value;
    estudiantes[indexactualizar].nie = document.getElementById("nie").value;
    estudiantes[indexactualizar].edad = document.getElementById("edad").value;

    indexactualizar = -1;
    limpiar();
    mostrarestudiantes();
}