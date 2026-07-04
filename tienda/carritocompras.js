let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let contenedor = document.getElementById("productos");
let total = 0;
function mostrarCarrito(){
    contenedor.innerHTML = "";
    total = 0;
    if(carrito.length === 0){
        contenedor.innerHTML = "<p> El carro esta vacio </p>";
    } else{
        carrito.forEach ((producto, index) =>{
            total += producto.precio * producto.cantidad;
            contenedor.innerHTML +=`
            <div class="producto">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <p>Cantidad: ${producto.cantidad}</p>

            <button onclick="sumar(${index})">Agregar</button>
            <button onclick="restar(${index})">Quitar</button>
            <button onclick="eliminar(${index})">Eliminar</button>
            </div>
            <hr>
            `;
        });
    }
    document.getElementById("total").textContent = total;
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
function sumar(index){
    carrito[index].cantidad++;
    mostrarCarrito();
}
function restar(index){
    carrito[index].cantidad--;
    if (carrito[index].cantidad <= 0){
        carrito.splice(index, 1);
    }
    mostrarCarrito();
}
function eliminar(index){
    carrito.splice(index, 1);
    mostrarCarrito();
}
