let elBoton = document.querySelector("#btn-aceptar") // Con esto capturamos el boton que está en el fichero index.html (el Document del DO)
    .addEventListener('click', () => { // Add event listener es el capturador de eventos
        laEntrada = document.querySelector('#entrada')
        parrafo =document.createElement("p")
        elfolio = document.querySelector("#folio")
        elfolio.appendChild(parrafo)
        parrafo.innerHTML = laEntrada.value
    })