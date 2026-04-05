let estudiantes = [
  { nombre: "Carlos", apellido: "Perez", nie: "12345", edad: 18 },
  { nombre: "Ana", apellido: "López", nie: "34567", edad: 20 }
];
estudiantes[indexEditar].nombre = nuevoValor;
// ===== MOSTRAR =====
function mostrarEstudiantes() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  estudiantes.forEach((e, index) => {
    lista.innerHTML += `
      <li>
        ${e.nombre} ${e.apellido} - NIE: ${e.nie} - Edad: ${e.edad}
        <button onclick="cargarDatos(${index})">✏️</button>
        <button onclick="eliminar(${index})">❌</button>
      </li>
    `;
  });
}

// ===== AGREGAR =====
function agregar() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const nie = document.getElementById("nie").value;
  const edad = parseInt(document.getElementById("edad").value);

  estudiantes.push({ nombre, apellido, nie, edad });
  mostrarEstudiantes();
}

// ===== ELIMINAR =====
function eliminar(index) {
  estudiantes.splice(index, 1);
  mostrarEstudiantes();
}

// ===== CARGAR DATOS (para editar) =====
let indexEditar = -1;

function cargarDatos(index) {
  let e = estudiantes[index];

  document.getElementById("nombre").value = e.nombre;
  document.getElementById("apellido").value = e.apellido;
  document.getElementById("nie").value = e.nie;
  document.getElementById("edad").value = e.edad;

  indexEditar = index;
}

// ===== ACTUALIZAR (UPDATE 🔥) =====
function actualizar() {
  if (indexEditar === -1) return;

  estudiantes[indexEditar].nombre = document.getElementById("nombre").value;
  estudiantes[indexEditar].apellido = document.getElementById("apellido").value;
  estudiantes[indexEditar].nie = document.getElementById("nie").value;
  estudiantes[indexEditar].edad = parseInt(document.getElementById("edad").value);

  indexEditar = -1;
  mostrarEstudiantes();
}

// ===== INICIAR =====
mostrarEstudiantes();