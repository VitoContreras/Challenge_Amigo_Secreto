//Inicializar variables
let amigos = [];

//funcion para cambiar el contenido de los elementos del HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}

//Funcion para verificar que el nombre contiene solo letras
function esNombreValido(nombre) {
    return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre); // Solo letras y espacios
}

//Funcion que verifica si se ingreso un nombre valido y de ser asi es agregado al array
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();
    if (nombre === '') {
        asignarTextoElemento('resultado', 'Ingresa un nombre por favor.');
        return;
    } else if (!esNombreValido(nombre)) {
        asignarTextoElemento('resultado', 'Ingresa un nombre válido por favor.');
        return;
    } else if (amigos.includes(nombre)) { 
        asignarTextoElemento('resultado', 'El nombre ya está en la lista.');
        return;
    }
    amigos.push(nombre);
    actualizarListaAmigos();
    asignarTextoElemento('resultado', `✅ Se agregó: ${nombre}`);
    inputAmigo.value = '';
}

//Funcion para actualizar la lista de amigos
function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML= '';

    amigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//Funcion para sortear amigo aleatoriamente, verifica que la lista tenga al menos un elemento
function sortearAmigo() {
    if (amigos.length === 0) {
        asignarTextoElemento('resultado ', 'No hay amigos en la lista para sortear.');
        return;
    }

    let ganador = amigos[Math.floor(Math.random() * amigos.length)];
    asignarTextoElemento('resultado', `El amigo secreto es: ${ganador}`);
}


