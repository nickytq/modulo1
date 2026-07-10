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
    mostrarCarrito()
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
function sumar(index){
    carrito[index].cantidad++;
    mostrarCarrito()
}
function restar(index){
    carrito[index].cantidad--;
    if (carrito[index].cantidad<=0){
        carrito.splice(index,1);
    }
    mostrarCarrito();
}
function eliminar(index){
    carrito.splice(index,1);
    mostrarCarrito();
}
function mostrarCarrito(){
    let contenedor = document.getElementById("listaCarrito");
    let total = 0;
    contenedor.innerHTML="";
    if (carrito.length === 0){
        contenedor.innerHTML = "<p> El carro esta vacio </p>";
        document.getElementById("total").textContent = "0";
        return;
    }

carrito.forEach((producto, index)=>{
    total += producto.precio * producto.cantidad;
    contenedor.innerHTML += `
    <div class="productoCarrito">
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</P>
        <p>Cantidad: ${producto.cantidad}</p>
        <button onclick="sumar(${index})">Agregar</button>
        <button onclick="restar(${index})">Quitar</button>
        <button onclick="eliminar(${index})">Eliminar</button>
    </div>
    `;
});
document.getElementById("total").textContent = total;
localStorage.setItem("carrito", JSON.stringify(carrito))

}

function vaciarCarrito(){
    if(confirm("¿Desea vaciar el carrito?")){
        carrito = [];
        localStorage.removeItem("carrito");
        mostrarCarrito();
    }
}
function finalizarCompra(){
    if (carrito.length === 0){
        alert("El carrito esta sin nada");
    }else{
        alert("¡Gracias por la compra!");
        carrito = [];
        localStorage.removeItem("carrito");
        mostrarCarrito();
    }
}
actualizarContador();
let sidebar = document.getElementById("sidebar");
function abrirCarrito(){
    mostrarCarrito();
    sidebar.classList.add("activo");
}
function cerrarCarrito(){
    sidebar.classList.remove("activo");
}

let modal = document.getElementById("modalPago");
function abrirPago(){
    modal.style.display = "flex";
}
function cerrarPago(){
    modal.style.display = "none";
}
function pagar(){
    let nombre = document.getElementById("nombre").value;
    let tarjeta = document.getElementById("tarjeta").value;
    let cvv = document.getElementById("cvv").value;
    
    if(nombre=="" || tarjeta=="" || cvv==""){
        alert("Por favor llenar los campos");
        return;
    }
    alert("Gracias por la compra");
    carrito = [];
    localStorage.removeItem("carrito");
    cerrarPago();
    cerrarCarrito();
    mostrarCarrito();
    actualizarContador();
}
const carrusel = document.getElementById("carrusel");
document.getElementById("siguiente").onclick = () => {
    carrusel.scrollBy({
        left:250,
        behavior:"smooth"
    });
};
document.getElementById("anterior").onclick = () => {
    carrusel.scrollBy({
        left:-250,
        behavior:"smooth"
    });
};
let menu = document.getElementById("menu");
function abrirMenu(){
    menu.classList.add("activo");
}
function cerrarMenu(){
    menu.classList.remove("activo");
}
localStorage.clear()