let productos = JSON.parse(localStorage.getItem("productos")) || []
let editando = -1;
function guardarProducto(){
    console.log("Guardado")
    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    let categoria = document.getElementById("categoria").value;
    let imagen = document.getElementById("imagen").value;
    let stock  = document.getElementById("stock").value;
    console.log(nombre, precio, categoria, imagen, stock);
    if(nombre=="" || precio=="" || imagen==""||stock==""){
        alert("Complete todos los campos");
        return;
    }
    if(editando==-1){
        productos.push({
            nombre,
            precio,
            categoria,
            imagen,
            stock
        });
    }else{
        productos[editando]={
            nombre,
            precio,
            categoria,
            imagen,
            stock
        };
        editando=-1;
    }
    localStorage.setItem("productos",JSON.stringify(productos));
    limpiar();
    mostrarProductos();
}
function mostrarProductos(){
    let tabla = document.getElementById("tablaProductos");
    tabla.innerHTML = "";
    productos.forEach((producto, index)=>{
        tabla.innerHTML += `
        <tr>
            <td><img src="${producto.imagen}" width="80"></td>
            <td>${producto.nombre}</td>
            <td>${producto.categoria}</td>
            <td>$${producto.precio}</td>
            <td>${producto.stock}</td>
            <td>
                <button onclick="editar(${index})">Editar</button>
                <button onclick="eliminar(${index})">Eliminar</button>
            </td>
        </tr>
        `;
    });
}
function editar(index){
    document.getElementById("nombre").value=productos[index].nombre;
    document.getElementById("precio").value=productos[index].precio;
    document.getElementById("categoria").value=productos[index].categoria;
    document.getElementById("imagen").value=productos[index].imagen;
    document.getElementById("stock").value=productos[index].stock;
    editando=index;
}
function eliminar(index){
    if(confirm("¿Eliminar productos?")){
        productos.splice(index,1);
        localStorage.setItem("productos",JSON.stringify(productos));
        mostrarProductos();
    }
}
function limpiar(){    
    document.getElementById("nombre").value="";
    document.getElementById("precio").value="";
    document.getElementById("imagen").value="";
    document.getElementById("stock").value="";
    document.getElementById("categoria").selectedIndex=0;
}
mostrarProductos();

function cerrarSesion(){
    localStorage.removeItem("logueado");
    localStorage.removeItem("rol");
    localStorage.removeItem("usuario");
    window.location.href="iniciosesion.html";
}
if(localStorage.getItem("logueado")!=="true" ||
    localStorage.getItem("rol")!=="admin"){
    alert("Acceso denegado");
    window.location.href="iniciosesion.html";
}