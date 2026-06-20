const slides = [
{
    carro: "img/Carro.png",
    fondo: "img/Paisajeinicio.jpg",
    modelo: "KIA SPORTAGE",
    descripcion: "Un SUV moderno, elegante y cómodo para viajes dentro y fuera de la ciudad."
},
{
    carro: "img/toyota RAV4.webp",
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

let idioma = "es";

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
        tituloContacto: "CONTACTO",
        textoContacto: "¿Tienes preguntas o deseas más información sobre nuestros vehículos y servicios?"
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
        tituloContacto: "CONTACT",
        textoContacto: "Do you have questions or would like more information about our vehicles and services?"
    }
};

document.getElementById("idiomaBtn").addEventListener("click", () => {

    idioma = idioma === "es" ? "en" : "es";

    // textos (los tuyos)
    document.getElementById("navInicio").textContent = traducciones[idioma].inicio;
    document.getElementById("navCatalogo").textContent = traducciones[idioma].catalogo;
    document.getElementById("navRecursos").textContent = traducciones[idioma].recursos;
    document.getElementById("navContacto").textContent = traducciones[idioma].contacto;

    document.getElementById("bienvenida").textContent = traducciones[idioma].bienvenida;
    document.getElementById("nuevosModelos").textContent = traducciones[idioma].modelos;
    document.getElementById("tituloRecursos").textContent = traducciones[idioma].tituloRecursos;
    document.getElementById("textoRecursos").textContent = traducciones[idioma].textoRecursos;
    document.getElementById("tituloContacto").textContent = traducciones[idioma].tituloContacto;
    document.getElementById("textoContacto").textContent = traducciones[idioma].textoContacto;

    // CAMBIO DE BANDERA
    document.getElementById("bandera").src =
        idioma === "es" ? "img/es.png" : "img/UK.png";

    document.documentElement.lang = idioma;
});
