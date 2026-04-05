let libros = [];

    function descargar_Pdf1() {
        let elemento = document.querySelector(".table");
        html2pdf().from(elemento).save("reporte_Biblioteca.pdf");
    
    html2pdf().set({
        margin: 10,
        filename: "reporte_estudiantes.pdf",
        html2canvas:{scale:2},
        jsPDF:{orientation :"portrait"}
    }).from(elemento).save();
}

if (localStorage.getItem("libros")) {
    libros = JSON.parse(localStorage.getItem("libros"));
} 

mostrar();

function mostrar() {

    let tabla = document.getElementById("tabla");
    tabla.innerHTML = "";

    for (let contador_indices = 0; contador_indices < libros.length; contador_indices++) {

        tabla.innerHTML += `
            <tr>
                <td>${libros[contador_indices].genero}</td>
                <td>${libros[contador_indices].nombre}</td>
                <td>${libros[contador_indices].autor}</td>
                <td>${libros[contador_indices].fecha}</td>
            </tr>
        `;
    }
}
