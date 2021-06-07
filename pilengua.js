document.querySelector("#btn-aceptar") // Esta linea devuleve una instancia de un objeto HTML
    .addEventListener('click', () => { // Esta linea añade un escuchador de eventos, que es una instancia de un objeto EventListener, que si escucha un evento responde con algo (con una funcion). La flecha indica una arrow function
        laEntrada = document.querySelector('#entrada') // Esta linea crea una variable que guarda la referencia al objeto #entrada de HTML
        parrafo = document.createElement("p") // Esta linea crea el parrafo (fuera del arbol) en un lugar de la memoria del ordenador
        elfolio = document.querySelector("#folio")
        elfolio.appendChild(parrafo)// Esta linea ubica en el arbol del documento el parrafo creado
        // Aqui haremos llamada al servidor de python (en el puerto 5000)
        // Esta llamada va a devolver un .json
        // Cogeremos la parte que nos interesa del .json y lo m eteremos en el parrafo
        
        parrafo.innerHTML = laEntrada.value
    })