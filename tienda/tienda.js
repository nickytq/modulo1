let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
function agregar (nombre,precio){
    let producto = carrito.find(item => item.nombre === nombre);
    if(producto){
        producto.cantidad++;
    } else{
            carrito.push({
            nombre: nombre,
            precio: precio,
            cantidad: 1
        });
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContador();
    console.log("Producto agregado");
}
function actualizarContador(){
    let contador = document.getElementById("contador");
    if(contador){
        let cantidad = 0;
        carrito.forEach(producto => {
            cantidad += producto.cantidad;
        });
        contador.textContent = cantidad;
    }
}
actualizarContador();