// Arreglo con el catálogo de la tienda.
// Esta es la "fuente de datos": el catálogo, la vista
// de detalle y el carrito se construyen a partir de este arreglo con JS.

const productos = [
  {
    id: 1,
    nombre: "Guitarra Acústica Folk Yamaha F310",
    categoria: "Guitarras acústicas",
    descripcion: "Tapa de abeto, aros y fondo de meranti. Ideal para iniciantes.",
    descripcionLarga: "La Yamaha F310 es una de las guitarras acústicas más recomendadas para quienes recién comienzan. Su tapa de abeto entrega un sonido brillante y equilibrado, mientras que los aros y el fondo de meranti aportan calidez. Cuerpo tipo dreadnought, mástil de nato y diapasón de palo de rosa. Incluye cuerdas de acero de fábrica.",
    precio: 129990,
    stock: 8,
    imagen: "imagenes/cards/1.png"
  },
  {
    id: 2,
    nombre: "Guitarra Acústica Dreadnought Fender CD-60S",
    categoria: "Guitarras acústicas",
    descripcion: "Tapa de abeto macizo, brazo de caoba. Sonido cálido y proyectado.",
    descripcionLarga: "La Fender CD-60S cuenta con tapa de abeto sólido (no laminado), lo que mejora notablemente la resonancia y la proyección del sonido a medida que el instrumento se \"abre\" con el uso. Aros y fondo de caoba, mástil de arce, diapasón de nogal. Muy recomendada para quienes buscan dar el salto desde una guitarra de entrada a una de nivel intermedio.",
    precio: 189990,
    stock: 5,
    imagen: "imagenes/cards/2.jpg"
  },
  {
    id: 3,
    nombre: "Guitarra Acústica Clásica 4/4 Yamaha C40",
    categoria: "Guitarras Acústicas",
    descripcion: "Nailon, tapa de abeto. Ideal para estudio y flamenco.",
    descripcionLarga: "La Yamaha C40 es una guitarra clásica de tamaño completo (4/4), con cuerdas de nailon, tapa de abeto y aros/fondo de meranti. Es el modelo más utilizado en escuelas de música y academias por su bajo costo de mantención, tensión cómoda para los dedos y sonido cálido, ideal para técnica clásica y flamenca.",
    precio: 89990,
    stock: 10,
    imagen: "imagenes/cards/3.jpg"
  },
  {
    id: 4,
    nombre: "Guitarra Electroacústica Takamine GN20CE",
    categoria: "Guitarras Acústicas",
    descripcion: "Pickup integrado, afinador incorporado.",
    descripcionLarga: "La Takamine GN20CE combina un cuerpo tipo NEX (más pequeño y cómodo que un dreadnought) con un sistema de amplificación TK-40D que incluye ecualizador y afinador integrado. Tapa de abeto sólido, aros y fondo de caoba. Perfecta para presentaciones en vivo, ya que se puede conectar directamente a un amplificador o consola.",
    precio: 349990,
    stock: 3,
    imagen: "imagenes/cards/4.jpg"
  },
  {
    id: 5,
    nombre: "Guitarra 3/4 Niños Yamaha JR1",
    categoria: "Guitarras Acústicas",
    descripcion: "Tamaño reducido para niños de 6 a 10 años.",
    descripcionLarga: "La Yamaha JR1 es una guitarra acústica de tamaño 3/4, pensada para niños y niñas entre 6 y 10 años o para adultos de contextura pequeña. Mantiene la calidad de construcción típica de Yamaha en un formato compacto, con tapa de abeto y cuerpo de meranti, ideal como primer instrumento.",
    precio: 79990,
    stock: 6,
    imagen: "imagenes/cards/5.jpg"
  },
  {
    id: 6,
    nombre: "Guitarra Eléctrica Stratocaster Squier Affinity Strat",
    categoria: "Guitarras eléctricas",
    descripcion: "Cuerpo de álamo, mástil de arce, pastillas SSS.",
    descripcionLarga: "La Squier Affinity Stratocaster es la puerta de entrada al mundo Fender. Cuerpo de álamo, mástil de arce con diapasón de arce o laurel según acabado, y configuración de pastillas SSS (single-single-single) con selector de 5 posiciones, el clásico sonido Stratocaster. Requiere amplificador (no incluido).",
    precio: 249990,
    stock: 5,
    imagen: "imagenes/cards/6.jpg"
  },
  {
    id: 7,
    nombre: "Guitarra Eléctrica Les Paul Epiphone Les Paul Std",
    categoria: "Guitarras eléctricas",
    descripcion: "Cuerpo caoba, tapa arce, pastillas humbucker.",
    descripcionLarga: "La guitarra eléctrica Epiphone Les Paul Standard 60s pertenece a la nueva colección Inspired by Gibson y vienen a recrear las características sonoras de las Les Paul de los 60s. Cuerpo de caoba con tapa de arce, mástil de caoba con diapasón de palorrosa y dos pastillas humbucker Alnico Classic. Incluye estuche rígido.",
    precio: 329990,
    stock: 4,
    imagen: "imagenes/cards/7.jpg"
  }
];
