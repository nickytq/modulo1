let personas = [];

if (localStorage.getItem("personas")) {
    let personasJason = localStorage.getItem("personas");
    personas = JSON.parse(personasJason);
    console.log (personas);
}
let etiquetas = [];
for (let contador_indices = 0; contador_indices < personas.length; contador_indices++) {
    let etiqueta = personas[contador_indices].edad + " AÑOS";
    etiquetas.push(etiqueta);

    console.log(personas[contador_indices].edad)
}  
//entra a el objeto, obtiene el objeto y obtiene la edad y le agrega años para que se vea mejor en la grafica y lo guarda en el array de etiquetas

let grafica = document.getElementById("myChart");
//let etiquetas = ["12 AÑOS", "15 AÑOS", "19 AÑOS", "6 AÑOS", "17 AÑOS"];
let datos =  {
    label: "estudiantes",
    data: [1, 1, 1, 1, 1],

};  
new Chart(grafica, {
    type: "pie",
    data: {
        labels: etiquetas,
        datasets: [
            datos
        ]
    }
});