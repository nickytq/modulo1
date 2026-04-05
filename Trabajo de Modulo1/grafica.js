let personas = [];

if (localStorage.getItem("personas")) {
    let personasJason = localStorage.getItem("personas");
    personas = JSON.parse(personasJason);
    console.log (personas);
}

console.log("")
let etiquetas = [];

for(let indice_array = 0; indice_array < personas.length; indice_array++){
    console.log (personas[indice_array].edad);
    let etiquetillas = personas[indice_array].edad + " Años";

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
    let edad = etiquetas[indice_array].match(/\d+/g)[0]; 
   
    console.log(edad)

    let num_edades = 0
    for(let indice_array = 0; indice_array < personas.length; indice_array++){
        let edadp = personas[indice_array].edad ;
        if(edadp == edad){
            num_edades++
        }
    }
    contar_edades.push(num_edades)
}

let grafica = document.getElementById("myChart");
let valores_grafica=  {
    label: "estudiantes",
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