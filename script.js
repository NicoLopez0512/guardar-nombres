document.addEventListener("DOMContentLoaded", cargarNombres);

function agregarNombre() {
    const input = document.getElementById("nombreInput");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Ingresa un nombre");
        return;
    }

    let nombres = JSON.parse(localStorage.getItem("nombres")) || [];
    nombres.push(nombre);
    localStorage.setItem("nombres", JSON.stringify(nombres));

    input.value = "";
    mostrarNombres();
}

function cargarNombres() {
    mostrarNombres();
}

function mostrarNombres() {
    const lista = document.getElementById("listaNombres");
    lista.innerHTML = "";

    let nombres = JSON.parse(localStorage.getItem("nombres")) || [];

    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}
