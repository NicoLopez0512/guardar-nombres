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
        function exportarExcel() {
    let nombres = JSON.parse(localStorage.getItem("nombres")) || [];

    if (nombres.length === 0) {
        alert("No hay nombres para exportar");
        return;
    }

    let datos = nombres.map((nombre, index) => ({
        "N°": index + 1,
        "Nombre": nombre
    }));

    let hoja = XLSX.utils.json_to_sheet(datos);
    let libro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(libro, hoja, "Nombres");

    XLSX.writeFile(libro, "lista_de_nombres.xlsx");
}

        li.textContent = nombre;
        lista.appendChild(li);
    });
}

