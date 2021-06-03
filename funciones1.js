botones = document.querySelectorAll(".boton") // Con esto capturamos el boton que está en el fichero index.html (el Document del DO)

for (let i=0; i < botones.length; i++) {}
    botones[i].addEventListener("click", (evento) => { // Add event listener es el capturador de eventos
        alert('click')
    })