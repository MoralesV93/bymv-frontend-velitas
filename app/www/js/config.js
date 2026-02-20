/**
 * ============================================
 * LOCALES VELITA - CONFIGURACION DEL SITIO
 * ============================================
 * Edita este archivo para cambiar todo el
 * contenido, imagenes y configuraciones.
 * ============================================
 */

const CONFIG = {

    // ==========================================
    // INFORMACION DEL NEGOCIO
    // ==========================================
    business: {
        name: "Locales Velita",
        tagline: "Dos Locales, Infinitos Recuerdos",
        foundedYear: 1987,
        phone: "+34 912 345 678",
        email: "info@localesvelita.com",
        address: "Calle Principal 123, Madrid",
        // Etiquetas de contacto
        phoneLabel: "Llamanos",
        emailLabel: "Correo",
        addressLabel: "Ubicacion",
    },

    // ==========================================
    // NAVEGACION
    // ==========================================
    navigation: {
        links: [
            { text: "Nuestros Locales", href: "#venues" },
            { text: "Eventos", href: "#occasions" },
            { text: "Galeria", href: "#gallery" },
        ],
        ctaText: "Reservar",
        ctaHref: "#booking",
    },

    // ==========================================
    // SECCION HERO
    // ==========================================
    hero: {
        subtitle: "Dos Locales, Infinitos Recuerdos",
        title: "Donde Tus Momentos Mas Preciados Cobran Vida",
        description: "Desde nuestro elegante Salon Principal hasta nuestra encantadora Terraza Jardin, descubre dos espacios extraordinarios disenados para hacer tus celebraciones inolvidables.",
        primaryButton: {
            text: "Consultar Disponibilidad",
            href: "#booking",
        },
        secondaryButton: {
            text: "Conoce Nuestros Locales",
            href: "#venues",
        },
        scrollText: "Desliza",
        backgroundImage: "images/hero-bg.jpg",
        backgroundImageFallback: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80",
    },

    // ==========================================
    // SECCION LOCALES
    // ==========================================
    venues: {
        sectionTitle: "Nuestros Locales",
        sectionDescription: "Dos espacios unicos, cada uno con su propio caracter y encanto, listos para albergar tus celebraciones mas especiales.",
        bestForLabel: "Ideal Para",

        items: [
            {
                id: "salon-principal",
                name: "El Salon Principal",
                badge: "Local Emblematico",
                description: "Un espacio interior opulento con lamparas de cristal, techos altos y una elegancia atemporal, perfecto para celebraciones sofisticadas.",
                image: "images/venue-grand-hall.jpg",
                imageFallback: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
                imageAlt: "El Salon Principal - Local interior elegante",
                features: [
                    { icon: "capacity", text: "Hasta 250 invitados" },
                    { icon: "wifi", text: "WiFi de Alta Velocidad" },
                    { icon: "kitchen", text: "Cocina Completa" },
                    { icon: "climate", text: "Climatizacion" },
                ],
                bestFor: ["Grandes Bodas", "Galas", "Eventos Corporativos"],
            },
            {
                id: "terraza-jardin",
                name: "La Terraza Jardin",
                badge: "Belleza Natural",
                description: "Un refugio al aire libre rodeado de exuberantes jardines, luces decorativas y belleza natural para reuniones romanticas e intimas.",
                image: "images/venue-garden-terrace.jpg",
                imageFallback: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80",
                imageAlt: "La Terraza Jardin - Hermoso local al aire libre",
                features: [
                    { icon: "capacity", text: "Hasta 150 invitados" },
                    { icon: "pavilion", text: "Pabellon Cubierto" },
                    { icon: "garden", text: "Jardines Escenico" },
                    { icon: "lighting", text: "Iluminacion Decorativa" },
                ],
                bestFor: ["Bodas al Aire Libre", "Comuniones", "Fiestas Intimas"],
            },
        ],
    },

    // ==========================================
    // SECCION EVENTOS
    // ==========================================
    events: {
        sectionTitle: "Eventos Que Organizamos",
        sectionDescription: "Desde los grandes hitos de la vida hasta reuniones intimas, aportamos experiencia y pasion a cada ocasion.",

        items: [
            {
                id: "bodas",
                title: "Bodas",
                description: "Tu dia perfecto, realizado con cada detalle cuidado.",
                icon: "wedding",
            },
            {
                id: "comuniones",
                title: "Comuniones",
                description: "Celebra la fe y la familia en un entorno elegante.",
                icon: "communion",
            },
            {
                id: "cumpleanos",
                title: "Cumpleanos",
                description: "Haz que los momentos importantes sean inolvidables.",
                icon: "birthday",
            },
            {
                id: "corporativos",
                title: "Eventos Corporativos",
                description: "Espacios profesionales que impresionan e inspiran.",
                icon: "corporate",
            },
        ],
    },

    // ==========================================
    // SECCION GALERIA
    // ==========================================
    gallery: {
        sectionTitle: "Momentos Capturados",
        sectionDescription: "Un vistazo a las celebraciones que hemos tenido el honor de organizar.",

        images: [
            {
                src: "images/gallery-1.jpg",
                fallback: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
                alt: "Decoracion de mesa elegante",
            },
            {
                src: "images/gallery-2.jpg",
                fallback: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&q=80",
                alt: "Ceremonia de boda",
            },
            {
                src: "images/gallery-3.jpg",
                fallback: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
                alt: "Globos de celebracion",
            },
            {
                src: "images/gallery-4.jpg",
                fallback: "https://images.unsplash.com/photo-1470217957101-da7150b9b681?w=600&q=80",
                alt: "Iluminacion del jardin",
            },
            {
                src: "images/gallery-5.jpg",
                fallback: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80",
                alt: "Arreglos florales",
            },
        ],
    },

    // ==========================================
    // SECCION RESERVAS
    // ==========================================
    booking: {
        title: "Planifiquemos Tu Evento Perfecto",
        description: "Listo para convertir tu vision en realidad? Contacta con nuestro equipo y comencemos a crear algo hermoso juntos.",

        form: {
            title: "Solicitar Informacion",
            submitText: "Enviar Consulta",
            submittingText: "Enviando...",
            successText: "Mensaje Enviado!",

            fields: {
                name: {
                    label: "Tu Nombre",
                    placeholder: "Juan y Maria Garcia",
                },
                email: {
                    label: "Correo Electronico",
                    placeholder: "hola@email.com",
                },
                eventType: {
                    label: "Tipo de Evento",
                    placeholder: "Selecciona una ocasion",
                    options: [
                        { value: "boda", label: "Boda" },
                        { value: "comunion", label: "Comunion" },
                        { value: "cumpleanos", label: "Celebracion de Cumpleanos" },
                        { value: "corporativo", label: "Evento Corporativo" },
                        { value: "otro", label: "Otro" },
                    ],
                },
                date: {
                    label: "Fecha Preferida",
                },
                message: {
                    label: "Cuentanos Sobre Tu Evento",
                    placeholder: "Comparte tu vision, numero de invitados y cualquier requisito especial...",
                },
            },
        },
    },

    // ==========================================
    // PIE DE PAGINA
    // ==========================================
    footer: {
        description: "Creando momentos inolvidables en nuestros locales familiares desde 1987. Dos espacios hermosos, un compromiso con la excelencia.",

        socialLinks: [
            { platform: "facebook", url: "#", label: "Facebook" },
            { platform: "instagram", url: "#", label: "Instagram" },
            { platform: "pinterest", url: "#", label: "Pinterest" },
        ],

        columns: [
            {
                title: "Enlaces Rapidos",
                links: [
                    { text: "Nuestros Locales", href: "#venues" },
                    { text: "Eventos", href: "#occasions" },
                    { text: "Galeria", href: "#gallery" },
                    { text: "Reservar", href: "#booking" },
                ],
            },
            {
                title: "Nuestros Locales",
                links: [
                    { text: "El Salon Principal", href: "#venues" },
                    { text: "Terraza Jardin", href: "#venues" },
                    { text: "Tour Virtual", href: "#booking" },
                    { text: "Disponibilidad", href: "#booking" },
                ],
            },
            {
                title: "Contacto",
                links: [
                    { text: "+34 912 345 678", href: "tel:+34912345678" },
                    { text: "info@localesvelita.com", href: "mailto:info@localesvelita.com" },
                    { text: "Calle Principal 123", href: "#booking" },
                    { text: "Programar Visita", href: "#booking" },
                ],
            },
        ],

        copyright: "© 2026 Locales Velita. Todos los derechos reservados.",
        familyBadge: "Empresa Familiar Desde 1987",
    },

    // ==========================================
    // SEO Y META
    // ==========================================
    meta: {
        title: "Locales Velita | Dos Locales, Infinitos Recuerdos",
        description: "Descubre dos locales extraordinarios para bodas, comuniones y celebraciones privadas. Empresa familiar desde 1987.",
    },
};

// Exportar para uso en otros modulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
