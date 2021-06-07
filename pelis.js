const folio = document.querySelector("#folio")


function gestionaRespuestaAsincrona() {
    if (this.readyState === 4 && this.status === 200) { /*Este this invoca a la funcion, es como el xhr*/
        console.log(this.responseText)
        const respuesta = JSON.parse(this.responseText)
        
        if(respuesta.Response === 'False') {
            alert("No se han encontrado resultados")
            return
        }
   
        for (let i=0; i < respuesta.Search.length; i++) {
            const pelicula = respuesta.Search[i]

            const div = document.createElement("div")

            const img = document.createElement("img")
            img.setAttribute("src", pelicula.Poster)
            img.setAttribute("alt", "Carátula de la película")
            
            const p = document.createElement("p")
            const textoP = `${pelicula.Title} (${pelicula.Year})`
            p.innerHTML = textoP

            const btn = document.createElement("a")
            btn.setAttribute("href", `https://www.imdb.com/title/${pelicula.imdbID}/`)
            btn.setAttribute("target", "_blank") /*Este atributo target crea una nueva pestaña en el navegador cuando hay una nueva busqueda*/
            
            div.appendChild(img)
            div.appendChild(p)
            div.appendChild(btn)

            folio.appendChild(div)

        }
    }

}  

const xhr = new XMLHttpRequest() /*Este objeto (xhr) es una petición para llamar a la API, es un manejador de peticiones asincronas*/.
xhr.onload = gestionaRespuestaAsincrona

document.querySelector("#buscar")
    .addEventListener("click", () => {
        const palabras = document.querySelector("#entrada").value
        xhr.open('GET', `http://www.omdbapi.com/?s=${palabras}&apikey=b8d84844`, true) 
        xhr.send()
        console.log("He lanzado petición")
})
