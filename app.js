// Array global donde guardaremos los nombres
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
  // 1. Capturar el valor del input
  let input = document.getElementById("Amigo"); // ojo, tu HTML usa "Amigo" con A mayúscula
  let nombre = input.value.trim();

 // 2. Validar la entrada
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // 3. Agregar el nombre al array
  amigos.push(nombre);

  // 4. Mostrar en la lista (actualizar la <ul>)
  let lista = document.getElementById("listaAmigos");
  let li = document.createElement("li");
  li.textContent = nombre;
  lista.appendChild(li);

  // 5. Limpiar el input
  input.value = "";
  input.focus();
}

