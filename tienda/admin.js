if(localStorage.getItem("logueado") !== "true"){
    alert("Debe iniciar sesion");
    window.location = Login.html
}
let productos = JSON.parse(localStorage.getItem("productos")) || []
let editando = -1;
function guardarProducto(){
    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    let categoria = document.getElementById("categoria").value;
    let imagen = document.getElementById("imagen").value;
    let stock  = document.getElementById("stock").value;
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
            stock
        };
        editando=-1;
    }
    localStorage.setItem("productos",JSON.stringify(productos));
    limpiar();
    mostrarProductos();
}
function mostrarProductos(){
    let tabla=document.getElementById("tablasProductos");
    tabla.innerHTML="";
    productos.forEach((productos,index)=>{
        tabla.innerHTML+=`
        <tr>
        <td>
        <img src="${producto.imagen}" width="80">
        </td>
        <td>${productos.nombre}</td>
        <td>${productos.categoria}</td>
        <td>${productos.precio}</td>
        <td>${productos.stock}</td>
        <td>
        <button onclick="editar(${index})">
        Editar
        </button>
        <button onclick="eliminar(${index})">
        Eliminar
        </button>  
        </td>   
        </tr>
`;
    });
}
function editar(index){
    document.getElementById("nombre").value=productos[index].nombre;
    document.getElementById("precio").value=productos[index].precio
    document.getElementById("categoria").value
}

function cerrarSesion(){
    localStorage.removeItem("logueado");
    window.location.href = login.html
}