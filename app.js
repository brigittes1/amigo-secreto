// Array global donde guardaremos los nombres
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
  // 1. Capturar el valor del input
  let input = document.getElementById("amigo"); 
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

// Función para sortear un amigo secreto
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debes agregar al menos 2 amigos para sortear.");
    return;
  }

  let indice = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indice];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;




