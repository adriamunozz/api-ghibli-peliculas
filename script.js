// URL de la API de Studio Ghibli
const url = "https://ghibliapi.vercel.app/films";

// Elementos del HTML
const contenedorPeliculas = document.querySelector("#peliculas");
const mensaje = document.querySelector("#mensaje");

// Función para cargar las películas desde la API
function cargarPeliculas() {
    fetch(url)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (peliculas) {
            mensaje.textContent = "";
            contenedorPeliculas.innerHTML = "";

            peliculas.forEach(function (pelicula) {
                contenedorPeliculas.innerHTML += `
                    <article class="tarjeta">
                        <img src="${pelicula.image}" alt="Imagen de la película ${pelicula.title}">
                        <div class="contenido">
                            <h3>${pelicula.title}</h3>
                            <p><strong>Director:</strong> ${pelicula.director}</p>
                            <p><strong>Año de estreno:</strong> ${pelicula.release_date}</p>
                            <p><strong>Puntuación:</strong> ${pelicula.rt_score}</p>
                        </div>
                    </article>
                `;
            });
        })
        .catch(function () {
            mensaje.textContent = "No se han podido cargar las películas.";
        });
}

// Ejecutar la carga de datos
cargarPeliculas();
