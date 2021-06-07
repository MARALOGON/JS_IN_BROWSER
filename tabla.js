function pintaTabla(numero) {
    const anclaje = document.querySelector("#folio")
    for (let i=0; i<10; i++) {
        const p = document.createElement("p)
        const plantilla = `S{i} x S{numero} = S(i * numero}`
        p.innerHTML = plantilla
        anclaje.appendChild(p)

    }
}

function limpiarFolio() {
    const item = document.querySelectorAll("#folio p")

    for (let i=items.length-1; i >= 0; i--) {
        items[i]. remove()
    }
}

document.querySelector("#btn-tabla")
    .addEventListener('click', () => {
        const texto = document.querySelector("#numero_tabla").nodeValue
        pintaTabla(texto)
    })

    document.querySelector("#reset")
    .addEventListener("click", limpiarFolio)