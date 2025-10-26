import logoBlanco from './assets/imagotipo en blanco transparente.svg'
import logoBlancoNaranja from './assets/imagotipo en blanco y naranja transparente-01.svg'
import logoNegro from './assets/imagotipo en negro transparente.svg'
import logoGrisNaranja from './assets/imagotipo gris y naranja sin fondo.svg'
import logoOriginal from './assets/imagotipo original transparente-01.svg'
import logotipoNegro from './assets/isotipo negro.svg'
import logotipoBlanco from './assets/imagotipo original transparente-01.svg'
import logotipoNaranja from './assets/isotipo naranja.png'
import img1 from './assets/img1.avif'
import img2 from './assets/img2.avif'
import img3 from './assets/img3.avif'
import img4 from './assets/img4.avif'
import img5 from './assets/img5.avif'
import turnero from './assets/turnero-video.webp'
import proceso from './assets/isotipo negro png sin fondo-02.png'

 export const brandingAssets = [
	{ id: '1', img: logoBlanco },
	{ id: '2', img: logoBlancoNaranja },
	{ id: '3', img: logoNegro },
	{ id: '4', img: logoGrisNaranja },
	{ id: '5', img: logoOriginal },
	{ id: '6', img: logotipoNegro },
	{ id: '7', img: logotipoBlanco },
	{ id: '8', img: logotipoNaranja },
];

export const HeroDetails = [
  {
    id: '1',
    class: 'hero-title',
    detail: 'PYROWEB',
  },
  {
    id: '2',
    class: 'hero-subtitle',
    detail:
      'Bienvenido a PyroWeb, donde transformamos tus ideas en soluciones digitales innovadoras. Con tecnología de punta y un enfoque personalizado, creamos experiencias que impulsan tu negocio al siguiente nivel.',
  },
  {
    id: '3',
    class: 'hero-cta',
    detail: 'Cotiza ahora',
  },
];

export const ServiceDetails = [
  {
    id: '2',
    titleClass: 'service-title',
    title: 'Diseño de sitios Web Corporativos',
    descriptionClass: 'service-description',
    description:
      'Creamos sitios web completos con hasta 5 páginas, incluyendo SEO básico, formularios de contacto, botones de WhatsApp y enlaces a redes sociales para una presencia digital sólida.',
    imageClass: 'service-image-placeholder',
    imageText: 'Imagen Sitio',
    imageSrc: img2
  },
  {
    id: '3',
    titleClass: 'service-title',
    title: 'Diseño de Aplicaciones Web',
    descriptionClass: 'service-description',
    description:
      'Desarrollamos apps personalizadas con integración de APIs, bases de datos seguras, autenticación de roles y opciones de IA para automatizar tus procesos empresariales.',
    imageClass: 'service-image-placeholder',
    imageText: 'Imagen App',
    imageSrc: img5
  },
   {
    id: '1',
    titleClass: 'service-title',
    title: 'Soporte post lanzamiento',
    descriptionClass: 'service-description',
    description:
      'Proporcionas soporte y mantenimiento después del lanzamiento para asegurar que los proyectos sigan funcionando perfectamente',
    imageClass: 'service-image-placeholder',
    imageText: 'Imagen Landing',
    imageSrc: img1
  },
];

export const PortfolioDetails = [
  {
    id: '1',
    title: 'Turnero Web',
    description: `Aplicación web para solicitar y asignar turnos medicos, combinando una experiencia de usuario intuitiva con una arquitectura robusta y escalable.

Funcionalidades:
-Autenticación segura con cookies y control de roles.
-Calendario interactivo para reservar y visualizar turnos.
-Listado de citas y panel administrativo.
-Recuperación de contraseña con tokens y rutas protegidas.
-Notificaciones automáticas al usuario 12 horas previa al turno.
-Arquitectura modular con separación clara entre frontend, backend y servicios.`,
    media: turnero, // puede ser gif, imagen o video
    type: 'image',
  },
  {
    id: '2',
    title: 'Catalogo web',
    description:
      `Aplicación web de comercio electronico base, sin integración de cobranzas al carrito, envia el pedido al whatsapp del administrador,
      con capacidad para gestionar inventario y un panel administrativo para cargar y visualizar contenido dinamico,
      ideal para pequeños comercios, restaurantes, emprendimientos, etc

      `,
    media: proceso,
    type: 'image',
  },
  {
    id: '3',
    title: 'Web Mantenimiento L.A',
    description:
      `Sitio web para cliente que realiza mantenimiento general en edificios y aeropuertos. 
      Con diseño minimalista a solicitud del cliente`,
    media: proceso,
    type: 'image',
  },
];


