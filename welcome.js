const slides = [
{
    carro: "img/Carro.png",
    fondo: "img/Paisajeinicio.jpg",
    modelo: "KIA SPORTAGE",
    descripcion: "Un SUV moderno, elegante y cómodo para viajes dentro y fuera de la ciudad."
},
{
    carro: "img/toyota RAV4.png",
    fondo: "img/Paisajeinicio.jpg",
    modelo: "TOYOTA RAV4",
    descripcion: "El nuevo modelo está inspirado en SUV Toughness, evolucionando hacia una estética más moderna y urbana."
},
{
    carro: "img/j702.png",
    fondo: "img/Paisajeinicio.jpg",
    modelo: "JETOUR G700",
    descripcion: "El Jetour G700 es un SUV híbrido enchufable de gran tamaño diseñado para ofrecer lujo, tecnología y excelente desempeño."
}
];
document.getElementById("descripcion").style.fontFamily =
    "sans-serif";

let index = 0;

const carroImg = document.querySelector(".carro img");
const cuerpo = document.querySelector(".cuerpo");
const btnIzq = document.querySelector(".flecha.izquierda");
const btnDer = document.querySelector(".flecha.derecha");
const modelo = document.getElementById("modelo");
const descripcion = document.getElementById("descripcion");

function mostrarSlide(i){

    carroImg.classList.add("saliendo");

    setTimeout(() => {

        carroImg.src = slides[i].carro;

        // CAMBIO DE FONDO
        cuerpo.style.backgroundImage = `url('${slides[i].fondo}')`;

        modelo.textContent = slides[i].modelo;
        descripcion.textContent = slides[i].descripcion;

        carroImg.classList.remove("saliendo");

        void carroImg.offsetWidth;

        carroImg.classList.add("entrando");

        setTimeout(() => {
            carroImg.classList.remove("entrando");
        }, 700);

    }, 300);
}

btnDer.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
});

btnIzq.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    mostrarSlide(index);
});

window.addEventListener("load", () => {
    mostrarSlide(index);
});
/*----Idioma----*/

const traducciones = {
    es: {
        inicio: "INICIO",
        catalogo: "CATÁLOGO",
        recursos: "RECURSOS",
        contacto: "CONTACTO",

        bienvenida: "Bienvenido a Smart Driver",
        modelos: "DESCUBRE LOS NUEVOS MODELOS",

        tituloRecursos: "RECURSOS SMART DRIVER",
        textoRecursos: "Explora las herramientas y servicios que harán tu experiencia más segura, eficiente y conectada.",

        mapas: "Mapas",
        ofertas: "Ofertas",
        marketplace: "Marketplace",
        feedback: "Feedback",

        tituloContacto: "CONTACTO",
        textoContacto: "¿Tienes preguntas o deseas más información sobre nuestros vehículos y servicios?",

        direccion: "📍 Dirección",
        telefono: "📞 Teléfono",
        correo: "✉️ Correo"
    },

    en: {
        inicio: "HOME",
        catalogo: "CATALOG",
        recursos: "RESOURCES",
        contacto: "CONTACT",

        bienvenida: "Welcome to Smart Driver",
        modelos: "DISCOVER THE NEW MODELS",

        tituloRecursos: "SMART DRIVER RESOURCES",
        textoRecursos: "Explore the tools and services that will make your experience safer, more efficient and connected.",

        mapas: "Maps",
        ofertas: "Deals",
        marketplace: "Marketplace",
        feedback: "Feedback",

        tituloContacto: "CONTACT",
        textoContacto: "Do you have questions or would like more information about our vehicles and services?",

        direccion: "📍 Address",
        telefono: "📞 Phone",
        correo: "✉️ Email"
    }
};

// =====================
// CAMBIO DE IDIOMA
// =====================
function cambiarIdioma(idioma) {

    const t = traducciones[idioma];

    // NAV
    document.getElementById("navInicio").textContent = t.inicio;
    document.getElementById("navCatalogo").textContent = t.catalogo;
    document.getElementById("navRecursos").textContent = t.recursos;
    document.getElementById("navContacto").textContent = t.contacto;

    // HERO + MODELOS
    document.getElementById("bienvenida").textContent = t.bienvenida;
    document.getElementById("nuevosModelos").textContent = t.modelos;

    // RECURSOS
    document.getElementById("tituloRecursos").textContent = t.tituloRecursos;
    document.getElementById("textoRecursos").textContent = t.textoRecursos;

    const mapas = document.getElementById("Mapas");
    const ofertas = document.getElementById("ofertas");
    const marketplace = document.getElementById("marketplace");
    const feedback = document.getElementById("feedback");

    if (mapas) mapas.textContent = t.mapas;
    if (ofertas) ofertas.textContent = t.ofertas;
    if (marketplace) marketplace.textContent = t.marketplace;
    if (feedback) feedback.textContent = t.feedback;

    // CONTACTO
    document.getElementById("tituloContacto").textContent = t.tituloContacto;
    document.getElementById("textoContacto").textContent = t.textoContacto;

    const direccion = document.getElementById("direccion");
    const telefono = document.getElementById("telefono");
    const correo = document.getElementById("correo");

    if (direccion) direccion.textContent = t.direccion;
    if (telefono) telefono.textContent = t.telefono;
    if (correo) correo.textContent = t.correo;

    // idioma HTML
    document.documentElement.lang = idioma;
}

// =====================
// BOTONES
// =====================
document.getElementById("idiomaBtnEs").addEventListener("click", () => {
    cambiarIdioma("es");
});

document.getElementById("idiomaBtnEN").addEventListener("click", () => {
    cambiarIdioma("en");
});

// idioma por defecto
cambiarIdioma("es");
