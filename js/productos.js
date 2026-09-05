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
  },
  {
    id: 8,
    nombre: "Bajo Eléctrico Jazz Bass Fender Player Jazz",
    categoria: "Bajos Eléctricos",
    descripcion: "Alder body, 2 Alnico V Jazz single-coil.",
    descripcionLarga: "Su mástil de arce (Maple) presenta un confortable contorno en C de principios de los años 60, ofreciendo un tacto clásico y fluido. El diapasón de palisandro (Rosewood) mantiene el tradicional radio vintage de 7.25 acompañado de trastes Vintage Tall, asegurando una gran comodidad en la ejecución. En el apartado electrónico, incorpora un par de pastillas de bobina simple de estilo vintage de los '60s, encargadas de entregar el legendario gruñido rítmico, definición y pegada características del J Bass®.",
    precio: 699990,
    stock: 2,
    imagen: "imagenes/cards/JazzBassFender.jpg"
  },
  {
    id: 9,
    nombre: "Batería Acústica 5 piezas Pearl Roadshow",
    categoria: "Baterías",
    descripcion: "Incluye stands, platillos y pedal de bombo.",
    descripcionLarga: "La Pearl Roadshow es una batería acústica completa, versátil y confiable, pensada para músicos que buscan un set listo para tocar con buen sonido, presencia y respaldo de marca. Su configuración permite usarla en práctica, clases, ensayos, estudio o presentaciones, manteniendo una base sólida para distintos estilos musicales.",
    precio: 599990,
    stock: 2,
    imagen: "imagenes/cards/BateriaAcustica.jpg"
  },
  {
    id: 10,
    nombre: "Teclado Digital 61 teclas Yamaha PSR-E373",
    categoria: "Teclados y Pianos",
    descripcion: "61 teclas sensibles al tacto, 622 voces.",
    descripcionLarga: "",
    precio: 249990,
    stock: 4,
    imagen: "imagenes/cards/TecladoDigitalYamahaPSR-E373.jpg"
  },
  {
    id: 11,
    nombre: "Amplificador Acústico 40W Fishman Loudbox Mini",
    categoria: "Amplificadores",
    descripcion: "60W, 2 canales, reverb y chorus incorporados.",
    descripcionLarga: "El Loudbox Mini Charge es un amplificador portátil alimentado por batería diseñado para reproducir fielmente el sonido de los instrumentos acústicos y una diversa variedad de acompañamientos vocales o grabados. Con la adición de conectividad inalámbrica Bluetooth®, ahora puedes agregar fácil y ordenadamente pistas de acompañamiento u otro acompañamiento a tus actuaciones, atascos o donde sea que tu Loudbox Mini Charge te lleve a ti y a tu música. ¿Dónde lo vas a llevar?",
    precio: 499990,
    stock: 2,
    imagen: "imagenes/cards/AmplificadorAcustico40W.jpg"
  },
  {
    id: 12,
    nombre: "Pedal Reverb	Boss RV-6",
    categoria: "Pedales de Efectos",
    descripcion: "8 modos de reverb, control de shimmer.",
    descripcionLarga: "Boss RV-6 pedal de reverberación digital - Operación mono o estéreo - Entrada de pedal de expresión - Pedal de reverberación compacto y versátil con sonido rico y expansivo. Esfera en sofisticados tonos de reverberación de nivel superior rápidamente con controles simples. Algoritmos de grado de estudio desarrollados con tecnología BOSS de vanguardia. Ocho modos de sonido proporcionan una amplia gama de efectos de reverberación listos para jugar. Los modos Shimmer, Dynamic, y Delay+Reverb ofrecen texturas exuberantes e inmersivas buscadas por los modernos playersInput para controlar nivel de reverberación con un pedal de expresión opcionalSoporta funcionamiento mono o estéreo.",
    precio: 179990,
    stock: 4,
    imagen: "imagenes/cards/PedalReverb.jpg"
  }
 /*,
  {
    id: ,
    nombre: "",
    categoria: "",
    descripcion: "",
    descripcionLarga: "",
    precio: ,
    stock: ,
    imagen: "imagenes/cards/.jpg"
  }
  */ 
 /*,
  {
    id: ,
    nombre: "",
    categoria: "",
    descripcion: "",
    descripcionLarga: "",
    precio: ,
    stock: ,
    imagen: "imagenes/cards/.jpg"
  }
  */ 

];
