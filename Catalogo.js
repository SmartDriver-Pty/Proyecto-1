/*cambio de idioma catalogo*/
let traducciones = {
    es: {
        inicio: "INICIO",
        catalogo: "CATÁLOGO",
        recursos: "RECURSOS",
        contacto: "CONTACTO",

        titulo: "Explora los Vehículos",

        electricos: "Autos Eléctricos",
        deportivos: "Autos Deportivos",
        camionetas: "Camionetas",
        transporte: "Transporte Público",

        descripcion1: "Hecha con el espíritu de la original y diseñada con el propósito del presente.",
        descripcion2: "Equipada y capacitada para dominar.",

        explorar: "Explorar",
        disenar: "Diseñar"
    },

    en: {
        inicio: "HOME",
        catalogo: "CATALOG",
        recursos: "RESOURCES",
        contacto: "CONTACT",

        titulo: "Explore Vehicles",

        electricos: "Electric Cars",
        deportivos: "Sports Cars",
        camionetas: "SUVs",
        transporte: "Public Transport",

        descripcion1: "Built with the spirit of the original and designed for today's purpose.",
        descripcion2: "Equipped and capable to dominate.",

        explorar: "Explore",
        disenar: "Customize"
    }
};

// Botón Español
document.getElementById("idiomaBtnEs").addEventListener("click", () => {
    cambiarIdioma("es");
});

// Botón Inglés
document.getElementById("idiomaBtnEN").addEventListener("click", () => {
    cambiarIdioma("en");
});

function cambiarIdioma(idioma) {

    // Menú
    document.getElementById("navInicio").textContent = traducciones[idioma].inicio;
    document.getElementById("navCatalogo").textContent = traducciones[idioma].catalogo;
    document.getElementById("navRecursos").textContent = traducciones[idioma].recursos;
    document.getElementById("navContacto").textContent = traducciones[idioma].contacto;

    // Título
    document.querySelector(".titulo-catalogo").textContent =
        traducciones[idioma].titulo;

    // Categorías
    document.querySelectorAll(".categorias a")[0].textContent =
        traducciones[idioma].electricos;

    document.querySelectorAll(".categorias a")[1].textContent =
        traducciones[idioma].deportivos;

    document.querySelectorAll(".categorias a")[2].textContent =
        traducciones[idioma].camionetas;

    document.querySelectorAll(".categorias a")[3].textContent =
        traducciones[idioma].transporte;

    // Descripciones
    document.getElementById("Hecha").textContent =
        traducciones[idioma].descripcion1;

    document.getElementById("Equipada").textContent =
        traducciones[idioma].descripcion2;

    // Botones
    document.querySelectorAll(".btn")[0].textContent =
        traducciones[idioma].explorar;

    document.querySelectorAll(".btn")[1].textContent =
        traducciones[idioma].explorar;

    document.querySelectorAll(".enlace")[0].textContent =
        traducciones[idioma].disenar + " >";

    document.querySelectorAll(".enlace")[1].textContent =
        traducciones[idioma].disenar + " >";

    document.documentElement.lang = idioma;
}
