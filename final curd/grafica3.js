let personas = [];
/*
let etiquetas = [];
let contar_edades = [];*/

if (localStorage.getItem("personas")) {
    let personasJason = localStorage.getItem("personas");
    personas = JSON.parse(personasJason);
    console.log (personas);
}
/*
for (let indice_array = 0; indice_array < personas.length; indice_array++) {
    let edades = personas[indice_array].edad;
    let existeedad = false;

    for (let etiqueta = 0; etiqueta < etiquetas.length; etiqueta++) {
        if (etiquetas[etiqueta] == edades + " AÑOS") {
            existeedad = true;
        }
    }

    let etiqueta = personas[indice_array].edad + " AÑOS";
    etiquetas.push(etiqueta);

    console.log(personas[indice_array].edad)


    for (let contador_estudiantes = 0; contador_estudiantes < personas.length; contador_estudiantes++) {
    let dato = personas[contador_estudiantes].edad + 1;
    contar_edades.push(dato);

    console.log(personas[contador_estudiantes].edad)
    }
}*/
console.log("")
let etiquetas = [];

for(let indice_array = 0; indice_array < personas.length; indice_array++){
    console.log (personas[indice_array].edad);
    let etiquetillas = personas[indice_array].edad + " Años";


    /*esto es para verificar si la etiqueta esta repetida*/ 
    let etiqueta_repetida = false;
    for(let etiquetas_array = 0; etiquetas_array < etiquetas.length; etiquetas_array++){
        if(etiquetas[etiquetas_array] == etiquetillas ){
            etiqueta_repetida = true;
            break;
        }
    }
    if(etiqueta_repetida == false){
        etiquetas.push(etiquetillas);
    }
    
}

console.log(etiquetas)

let contar_edades = [];
for(let indice_array = 0; indice_array < etiquetas.length; indice_array++){
    console.log (etiquetas[indice_array]);
    let edad = etiquetas[indice_array].match(/\d+/g)[0]; //devuelve el numero sin texto
    console.log(edad)
    // para contar las edades repetitivas
    let num_edades = 0
    for(let indice_array = 0; indice_array < personas.length; indice_array++){
        let edadp = personas[indice_array].edad ;
        if(edadp == edad){
            num_edades++
        }
    }
    contar_edades.push(num_edades)
}



//console.log(etiquetas)
//entra a el objeto, obtiene el objeto y obtiene la edad y le agrega años para que se vea mejor en la grafica y lo guarda en el array de etiquetas

let grafica = document.getElementById("myChart");
//let etiquetas = ["12 AÑOS", "13 AÑOS",  "6 AÑOS"];
let valores_grafica=  {
    label: "estudiantes",
    //data: [2, 1, 2],
    data: contar_edades

};  
new Chart(grafica, {
    type: "pie",
    data: {
        labels: etiquetas,
        datasets: [
            valores_grafica
        ]
    }
}); 