const noticiasData = [
  {
    id: 1,
    titulo: "Ignacio Ruiz vuelve a los corridos chileno-mexicanos con \"La Santa\"",
    fecha: "1 de Septiembre, 2026",
    resumen: "El cantante chileno Ignacio Ruiz estrenó su nuevo tema \"La Santa\", una canción que marca su regreso al universo de los corridos después del lanzamiento de su EP \"1.125\" en mayo pasado.",
    contenidoCompleto: "Estoy muy feliz por volver a sacar un corrido (...) Desde ahí, he estado en lanzamientos de diferentes estilos, como cumbia norteña y cumbia ranchera, y estoy muy contento con el resultado de esta canción, puesto que sonoramente se ha visto una evolución y este es el primero de muchas sorpresas más que se vienen, comentó el artista oriundo de Chiloé.",
    imagen: "imagenes/noticias/1.jpg"
  },
  {
    id: 2,
    titulo: "La \"armada chilena\" que llega al Rock al Parque 2026",
    fecha: "27 de Agosto, 2026",
    resumen: "El festival Rock al Parque se celebrará en Bogotá los días 10, 11 y 12 de octubre próximo, y conmemorando 30 años del evento gratuito que convoca a miles y miles de personas en la capital colombiana.",
    contenidoCompleto: "Con una variopinta mezcla de estilos, desde vallenato hasta black metal, Rock al Parque también es un hito cultural del continente y al mismo tiempo una atracción turística. Así, el anuncio de la parrilla de artistas tiene nombres tan disímiles como Apocalyptica, Bandalos Chinos, Between The Buried and Me, Serú Girán o Trotsky Vengarán.",
    imagen: "imagenes/noticias/2.jpg"
  }
];

function renderizarDetalleNoticia() {
  const contenedor = document.getElementById("noticia-detalle-container");
  if (!contenedor) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10);
  const noticia = noticiasData.find((n) => n.id === id);

  if (!noticia) {
    contenedor.innerHTML =
      '<div class="col-12 text-center text-white py-5">' +
      '<h2>Noticia no encontrada</h2>' +
      '<a href="noticias.html" class="btn btn-primary mt-3">Volver a Noticias</a>' +
      '</div>';
    return;
  }

  document.title = noticia.titulo + " - Sonido Vivo";

  contenedor.innerHTML =
    '<div class="col-lg-8 mx-auto">' +
      '<div class="card shadow-lg border-0 overflow-hidden text-dark style="font-style: normal;">' +
        '<img src="' + noticia.imagen + '" class="card-img-top img-fluid" alt="' + noticia.titulo + '" style="max-height: 400px; object-fit: cover;">' +
        '<div class="card-body p-4 p-md-5">' +
          '<span class="badge bg-primary mb-2">' + noticia.fecha + '</span>' +
          '<h1 class="fw-bold mb-4">' + noticia.titulo + '</h1>' +
          '<p class="fs-5 text-secondary lead">' + noticia.resumen + '</p>' +
          '<hr class="my-4">' +
          '<div class="lh-lg fs-6">' + noticia.contenidoCompleto + '</div>' +
          '<div class="mt-5 text-end">' +
            '<a href="noticias.html" class="btn btn-outline-secondary"><i class="bi bi-arrow-left me-1"></i> Volver a Noticias</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarDetalleNoticia();
});