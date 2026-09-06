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
    nombre: "Guitarra Eléctrica SG Epiphone	SG Standard",
    categoria: "Guitarras Eléctricas",
    descripcion: "Cuerpo caoba, mástil caoba, 2 humbuckers.",
    descripcionLarga: "El Epiphone SG Standard de la nueva colección Inspired by Gibson, recrea el legendario clásico de la década de 1960 que impulsó la primera generación de bandas de hard rock y heavy metal, incluidas The Who, Cream, AC / DC y Black Sabbath. La guitarra presenta el histórico perfil SG con golpeador batwing, un par de humbuckers Alnico Classic PRO ™ de Epiphone y afinadores Epiphone Deluxe de relación 18: 1. Este modelo Epiphone inspirado en Gibson Original también tiene el cabezal Kalamazoo, cuello enrollado para una sensación cómoda, tuerca GraphTech® NuBone ™, cableado apropiado para la época y potenciómetros CTS. La carcasa rígida o EpiLite opcional está disponible. Disponible en acabados brillantes Heritage Cherry, Ebony y Alpine White.",
    precio: 319990,
    stock: 3,
    imagen: "imagenes/cards/GuitarraEléctricaSGEpiphone.jpg"
  },
  {
    id: 9,
    nombre: "Guitarra Eléctrica Telecaster Squier	Affinity Tele",
    categoria: "Guitarras Eléctricas",
    descripcion: "Cuerpo álamo, clavijero vintage, 2 pastillas single.",
    descripcionLarga: "La Squier Telecaster® Sonic™ está lista para lanzar cualquier aventura musical a la velocidad de la luz, ofreciendo el estilo icónico de Fender® y un tono inspirador para los músicos en cualquier etapa. Esta Tele® luce un perfil de mástil delgado y atractivo en forma de C y un cuerpo delgado y liviano para una comodidad óptima al tocar, mientras un par de cápsulas de bobina simple Squier® repican con claridad cristalina para una amplia variedad de tonos versátiles. Otros detalles de este modelo incluyen un puente fijo de 6 selletas para una entonación confiable, clavijeros de engranajes sellados para una afinación suave y precisa y hardware cromado duradero que seguramente llamará la atención.",
    precio: 239990,
    stock: 4,
    imagen: "imagenes/cards/GuitarraElectricaTelecaster.jpg"
  },
  {
    id: 10,
    nombre: "Guitarra Eléctrica Semi-hollow	Epiphone ES-335",
    categoria: "Guitarras Eléctricas",
    descripcion: "Semi-hueca, 2 humbuckers, ideal para jazz y blues.",
    descripcionLarga: "El Epiphone Inspired by Gibson ES-335 Figured honra al inmortal ES-335, el delgado arco semihueco que llevó la clase de arco a la era del rock. Con un bloque central de arce sólido para mayor resistencia al apoyo y a la retroalimentación, humbuckers Alnico Classic PRO, afinadores rotomáticos Grover y una parte superior de chapa de arce de llama en impresionantes acabados brillantes de Blueberry Burst y Raspberry Tea Burst que seguramente llamarán la atención. Carcasa rígida opcional o EpiLite disponible por separado.",
    precio: 549990,
    stock: 2,
    imagen: "imagenes/cards/GuitarraElectricaES335.jpg"
  },
  {
    id: 11,
    nombre: "Bajo Eléctrico 4 Cuerdas	Squier Affinity PJ",
    categoria: "Bajos Eléctricos",
    descripcion: "Pickup PJ, cuerpo álamo, mástil arce.",
    descripcionLarga: "El squier precision bass es el bajo eléctrico perfecto para dar el salto al auténtico sonido Fender®. Ligero, cómodo y versátil, su configuración PJ te permite explorar graves profundos y tonos brillantes con total libertad. Diseñado para inspirar desde el primer ensayo hasta el escenario, es la base sólida que todo bajista necesita para destacar.",
    precio: 299990,
    stock: 5,
    imagen: "imagenes/cards/BajoEléctricoAffinityPJ.jpg"
  },
  {
    id: 12,
    nombre: "Bajo Eléctrico Jazz Bass Fender Player Jazz",
    categoria: "Bajos Eléctricos",
    descripcion: "Alder body, 2 Alnico V Jazz single-coil.",
    descripcionLarga: "Su mástil de arce (Maple) presenta un confortable contorno en C de principios de los años 60, ofreciendo un tacto clásico y fluido. El diapasón de palisandro (Rosewood) mantiene el tradicional radio vintage de 7.25 acompañado de trastes Vintage Tall, asegurando una gran comodidad en la ejecución. En el apartado electrónico, incorpora un par de pastillas de bobina simple de estilo vintage de los '60s, encargadas de entregar el legendario gruñido rítmico, definición y pegada características del J Bass®.",
    precio: 699990,
    stock: 2,
    imagen: "imagenes/cards/JazzBassFender.jpg"
  },
  {
    id: 13,
    nombre: "Bajo Acústico 4 Cuerdas	Yamaha	APX700II",
    categoria: "Bajos Eléctricos",
    descripcion: "Electroacústico, afinador incorporado.",
    descripcionLarga: "",
    precio: 429990,
    stock: 2,
    imagen: "imagenes/cards/BajoAcústicoYamahaAPX700II.jpg"
  },
  {
    
    id: 14,
    nombre: "Batería Acústica 5 piezas Pearl Roadshow",
    categoria: "Baterías",
    descripcion: "Incluye stands, platillos y pedal de bombo.",
    descripcionLarga: "La Pearl Roadshow es una batería acústica completa, versátil y confiable, pensada para músicos que buscan un set listo para tocar con buen sonido, presencia y respaldo de marca. Su configuración permite usarla en práctica, clases, ensayos, estudio o presentaciones, manteniendo una base sólida para distintos estilos musicales.",
    precio: 599990,
    stock: 2,
    imagen: "imagenes/cards/BateriaAcustica.jpg"

  },
  {
    id: 15,
    nombre: "Batería Electrónica 8 pads	Roland	TD-02KV",
    categoria: "Baterías",
    descripcion: "Módulo TD-02, 8 pads de goma, pedal hi-hat.",
    descripcionLarga: "TD-02K Empieza tu aventura de batería con buen pie. La serie TD-02 te ofrece la mejor experiencia básica de batería electrónica del mundo a un precio asequible, respaldados por décadas de innovación de V-Drums, estos kits compactos y superexpresivos son mucho mejores que la suma de sus partes.",
    precio: 799990,
    stock: 2,
    imagen: "imagenes/cards/BateríaElectrónicaRolandTD-02KV.jpg"
  },
  {
    id: 16,
    nombre: "Caja Snare 14'	Pearl	STE1450",
    categoria: "Baterías",
    descripcion: "Acero, 14x5', 10 tensores.",
    descripcionLarga: "Experimenta un sonido de caja versátil y con gran respuesta con un casco de Aluminio Sin Soldadura de 1.2mm: Proporciona un sonido brillante, seco y articulado con una rápida caída y gran sensibilidad. La construcción sin soldadura mejora la resonancia y la estabilidad de la afinación.",
    precio: 89990,
    stock: 4,
    imagen: "imagenes/cards/CajaSnarePearlSTE1450.jpg"
  },
  {
    id: 17,
    nombre: "Platillo Hi-Hat 14' Zildjian	A Series",
    categoria: "Baterías",
    descripcion: "Latón B20, sonido brillante y claro.",
    descripcionLarga: "Reconocidos por su impactante acabado brillante, los HiHats Custom cuentan con ranuras tonales únicas y perfiles inferiores. Juntos, estos atributos producen un platillo con un sonido más suave, vidrioso y brillante con más elasticidad cuando se golpea. Son estas cualidades las que han hecho que el sonido de A Custom sea particularmente buscado en el estudio.",
    precio: 149990,
    stock: 3,
    imagen: "imagenes/cards/PlatilloHi-HatZildjianASeries.jpg"
  },
  {
    id: 18,
    nombre: "Platillo Crash 16'	Zildjian	A Series",
    categoria: "Baterías",
    descripcion: "Latón B20, ataque rápido.",
    descripcionLarga: "El platillo Crash Zildjian Planet Z ZP16C de 16 pulgadas ofrece un ataque brillante, rápido y un sostén corto pero potente, perfecto para acentuar compases y dar dinámica a tus ejecuciones. Diseñado para estudiantes y bateristas en desarrollo, este Crash proporciona la legendaria musicalidad y durabilidad de Zildjian a un nivel accesible.",
    precio: 129990,
    stock: 3,
    imagen: "imagenes/cards/PlatilloCrash16.jpg"
  },
  {
    id: 19,
    nombre: "Teclado Digital 61 teclas Yamaha PSR-E373",
    categoria: "Teclados y Pianos",
    descripcion: "61 teclas sensibles al tacto, 622 voces.",
    descripcionLarga: "",
    precio: 249990,
    stock: 4,
    imagen: "imagenes/cards/TecladoDigitalYamahaPSR-E373.jpg"
  },
  {
    id: 20,
    nombre: "Piano Digital 88 teclas Yamaha P-45",
    categoria: "Teclados y Pianos",
    descripcion: "88 teclas pesadas, 10 voces, pedal sustain incluido.",
    descripcionLarga: "La serie P le ofrece el sonido dinámico de gran calidad y la respuesta de pulsación de piano natural que se espera de Yamaha, fabricantes de pianos acústicos de talla mundial durante más de un siglo. Estos pianos distintivos de Yamaha, junto con un sistema de altavoces estéreo incorporado de gran calidad, se proporcionan en un tamaño compacto.",
    precio: 499990,
    stock: 2,
    imagen: "imagenes/cards/PianoDigitalYamahaP-45.jpg"
  },
  {
    id: 21,
    nombre: "Sintetizador 49 teclas	Arturia	MiniLab MKII",
    categoria: "Teclados y Pianos",
    descripcion: "MIDI controller, 49 mini teclas.",
    descripcionLarga: "El Arturia Keylab Essential 49 mk3 White es un controlador MIDI diseñado para entregar un ritmo de trabajo fluido a la hora de hacer música. Este controlador entrega a músicos y productores la posibilidad de controlar cualquier DAW o hardware con todos los controles esenciales en la punta de sus dedos, herramientas creativas a su disposición y el software musical más inspirador incluido.",
    precio: 129990,
    stock: 5,
    imagen: "imagenes/cards/SintetizadorArturiaMiniLabMKII.jpg"
  },
  {
    id: 22,
    nombre: "Teclado MIDI 88 teclas	M-Audio	Hammer 88",
    categoria: "Teclados y Pianos",
    descripcion: "88 teclas martillo, sin sonidos propios.",
    descripcionLarga: "El M-Audio Hammer 88 es un controlador de teclado premium diseñado para músicos profesionales, semiprofesionales o estudiantes que buscan una experiencia realista similar a la de un piano de cola para usar con instrumentos virtuales o módulos de sonido.",
    precio: 339990,
    stock: 2,
    imagen: "imagenes/cards/TecladoMIDIM-Audio.jpg"
  },
  {
    id: 23,
    nombre: "Amplificador Guitarra 15W Fender Frontman 15G",
    categoria: "Amplificadores",
    descripcion: "15W, distorsión incorporada, entrada auxiliar.",
    descripcionLarga: "POTENCIA Y CALIDAD DE SONIDO Este amplificador ofrece una potencia de 15W RMS, ideal para practicar y presentaciones pequeñas. Su diseño compacto y ligero facilita su transporte.",
    precio: 99990,
    stock: 5,
    imagen: "imagenes/cards/AmplificadorGuitarra15WFenderFrontman.jpg"
  },
  {
    id: 24,
    nombre: "Amplificador Guitarra 40W Marshall MG40GFX",
    categoria: "Amplificadores",
    descripcion: "40W, 4 canales, efectos digitales integrados.",
    descripcionLarga: "Si lo que buscas es un equipo que se caracterice por tener una distorsión única y mayor calidez de sonidos clásicos y orgánicos, este amplificador valvular es ideal para ti. Cantidad de canales al contar con 2 canales, te permitirán alcanzar tonos limpios y reproducir todos los géneros de música.",
    precio: 299990,
    stock: 3,
    imagen: "imagenes/cards/AmplificadorGuitarra40WMarshall.jpg"
  },
  {
    id: 25,
    nombre: "Amplificador Bajo 100W	Hartke HD100",
    categoria: "Amplificadores",
    descripcion: "100W, tweeter integrado, ecualizador de 4 bandas.",
    descripcionLarga: "Este Amplificador es la herramienta perfecta para bajistas que necesitan gran potencia en un formato compacto, ideal para presentaciones en vivo, ensayos exigentes o giras. Este combo compacto se convierte en el favorito de clubes gracias a su capacidad de integrarse perfectamente en la mezcla, ofreciendo un sonido claro, balanceado y con presencia profesional.",
    precio: 449990,
    stock: 2,
    imagen: "imagenes/cards/AmplificadorBajo100WHartke.jpg"
  },
  {
    id: 26,
    nombre: "Amplificador Acústico 40W Fishman Loudbox Mini",
    categoria: "Amplificadores",
    descripcion: "60W, 2 canales, reverb y chorus incorporados.",
    descripcionLarga: "El Loudbox Mini Charge es un amplificador portátil alimentado por batería diseñado para reproducir fielmente el sonido de los instrumentos acústicos y una diversa variedad de acompañamientos vocales o grabados. Con la adición de conectividad inalámbrica Bluetooth®, ahora puedes agregar fácil y ordenadamente pistas de acompañamiento u otro acompañamiento a tus actuaciones, atascos o donde sea que tu Loudbox Mini Charge te lleve a ti y a tu música. ¿Dónde lo vas a llevar?",
    precio: 499990,
    stock: 2,
    imagen: "imagenes/cards/AmplificadorAcustico40W.jpg"
  },






  {
    id: 32,
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
];
