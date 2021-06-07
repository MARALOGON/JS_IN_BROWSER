botones = document.querySelectorAll(".boton") // Con esto capturamos el boton que está en el fichero index.html (el Document del DO)

for (let i=0; i < botones.length; i++) {
    botones[i].addEventListener("click", (evento) => { // Add event listener es el capturador de eventos
        origen = evento.target.innerHTML
        entrada = document.querySelector('#entrada') // Esta linea crea una variable que guarda la referencia al objeto #entrada de HTML
        parrafo = document.createElement("p") // Esta linea crea el parrafo (fuera del arbol) en un lugar de la memoria del ordenador
        folio = document.querySelector("#folio")
        folio.appendChild(parrafo)// Esta linea ubica en el arbol del documento el parrafo creado
        parrafo.innerHTML = `${origen} dice ${entrada.value}`
    })
}