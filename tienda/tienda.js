let carrito = JSON.parse(localStorage.getItem("carrito")) || []
function agregar(nombre,precio){
    let producto = carrito.find(item => item.nombre === nombre)
    if (producto){
        producto.cantidad++
    } else {
        carrito.push({
            nombre: nombre,
            precio : precio,
            cantidad: 1
        })
    }
    localStorage.setItem("carrito",JSON.stringify(carrito))
    actualizarContador();
    alert("Producto agregado al carro")
}
function actualizarContador(){
    let contador = document.getElementById("contador")
    if (contador){
        let cantidad = 0
        carrito.forEach(producto =>{
            cantidad += producto.cantidad
        });
        contador.textContent = cantidad
    }
}
actualizarContador()
        let contador = document.getElementById("productos")
        let total = 0
        carrito.forEach(productos =>{
            total += productos.precio * productos.cantidad;
            productos.innerHTML += `
            <div class="productos">
                <h3>${productos.nombre}</h3>
                <p>Precio: $${productos.precio}</p>
                <p>Cantidad: ${productos.cantidad}</p>
                </div>
            `;
        })
        document.getElementById("total"). textContent = total;
    
