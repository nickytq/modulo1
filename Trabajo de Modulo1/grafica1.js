let libros = [];

if (localStorage.getItem("libros")) {
    let personasJason = localStorage.getItem("libros");
    libros = JSON.parse(personasJason);
    console.log (libros);
}

console.log("")
let etiquetas = [];

for(let indice_array = 0; indice_array < libros.length; indice_array++){
    console.log (libros[indice_array].edad);
    let etiquetillas = libros[indice_array].fecha ;

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

let contar_fechas = [];
for(let indice_array = 0; indice_array < etiquetas.length; indice_array++){
    console.log (etiquetas[indice_array]);
    let fecha = etiquetas[indice_array];
   
    console.log(fecha)
    let num_fechas = 0
    for(let indice_array = 0; indice_array < libros.length; indice_array++){
        let fechap = libros[indice_array].fecha ;
        if(fechap == fecha){
            num_fechas++
        }
    }
    contar_fechas.push(num_fechas)
}

let grafica = document.getElementById("myChart");
let valores_grafica=  {
    label: "Fechas",
    data: contar_fechas
  
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