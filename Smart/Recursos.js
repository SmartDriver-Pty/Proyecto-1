const input = document.getElementById("busqueda");
const boton = document.getElementById("btnBuscar");

function buscar(){
    const texto = input.ariaValueMax.trim().toLowerCase();

    if (texto ===""){
        alert("Escribe tu nesecidad.");
        return;
    }

    alert("buscando: " + texto )
}
boton.addEventListener("click", buscar);

input.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        buscar();
    }

});

// ===== FUNCIÓN SEGURA =====
const traducciones = {
    es: {
        inicio: "INICIO",
        catalogo: "CATÁLOGO",
        recursosMenu: "RECURSOS",
        contacto: "CONTACTO",

        recursos: "RECURSOS AUTOMOTRICES",
        texto: "Servicios, herramientas y conocimientos para cualquier conductor.",

        accesos: "ACCESOS RÁPIDOS",

        talleres: "TALLERES",
        texto2: "Encuentra talleres cerca de ti",

        concesionarios: "CONCESIONARIOS",
        texto3: "Explora marcas y concesionarios",

        gasolineras: "GASOLINERAS",
        texto4: "Ubicaciones y precios de combustible",

        centros: "CENTROS DE CARGA",
        texto5: "Estaciones de carga para vehículos eléctricos",

        llantas: "LLANTAS Y REPUESTOS",
        texto6: "Tiendas y servicios especializados",

        gruas: "GRÚAS Y ASISTENCIA",
        texto7: "Asistencia vial 24/7",

        aprende: "APRENDE SOBRE VEHÍCULOS",
        mantenimiento: "Mantenimiento Básico",
        compra: "Compra y Venta",
        conduccion: "Conducción y Seguridad",
        leyes: "Leyes y Normativas"
    },

    en: {
        inicio: "HOME",
        catalogo: "CATALOG",
        recursosMenu: "RESOURCES",
        contacto: "CONTACT",

        recursos: "AUTOMOTIVE RESOURCES",
        texto: "Services, tools and knowledge for every driver.",

        accesos: "QUICK ACCESS",

        talleres: "WORKSHOPS",
        texto2: "Find workshops near you",

        concesionarios: "DEALERSHIPS",
        texto3: "Explore brands and dealerships",

        gasolineras: "GAS STATIONS",
        texto4: "Locations and fuel prices",

        centros: "CHARGING STATIONS",
        texto5: "Charging stations for electric vehicles",

        llantas: "TIRES & PARTS",
        texto6: "Specialized stores and services",

        gruas: "TOWING & ASSISTANCE",
        texto7: "24/7 Roadside assistance",

        aprende: "LEARN ABOUT VEHICLES",
        mantenimiento: "Basic Maintenance",
        compra: "Buying & Selling",
        conduccion: "Driving & Safety",
        leyes: "Laws & Regulations"
    }
};

// ===== FUNCIÓN SEGURA =====
function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}

function cambiarIdioma(idioma) {

    const t = traducciones[idioma];

    // Menú
    setText("navInicio", t.inicio);
    setText("navCatalogo", t.catalogo);
    setText("navRecursos", t.recursosMenu);
    setText("navContacto", t.contacto);

    // Hero
    setText("recursos", t.recursos);
    setText("texto", t.texto);

    // Accesos rápidos
    setText("ACCESOS", t.accesos);

    setText("talleres", t.talleres);
    setText("texto2", t.texto2);

    setText("concesionarios", t.concesionarios);
    setText("texto3", t.texto3);

    setText("gasolineras", t.gasolineras);
    setText("texto4", t.texto4);

    setText("centros", t.centros);
    setText("texto5", t.texto5);

    setText("llantas", t.llantas);
    setText("texto6", t.texto6);

    setText("gruas", t.gruas);
    setText("texto7", t.texto7);

    // Aprende
    setText("aprende", t.aprende);
    setText("mantenimiento", t.mantenimiento);
    setText("compra", t.compra);
    setText("conduccion", t.conduccion);
    setText("leyes", t.leyes);

    document.documentElement.lang = idioma;
    localStorage.setItem("idioma", idioma);
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {

    const btnEs = document.getElementById("idiomaBtnEs");
    const btnEn = document.getElementById("idiomaBtnEN");

    if (btnEs) {
        btnEs.addEventListener("click", () => cambiarIdioma("es"));
    }

    if (btnEn) {
        btnEn.addEventListener("click", () => cambiarIdioma("en"));
    }

    const idiomaGuardado = localStorage.getItem("idioma") || "es";
    cambiarIdioma(idiomaGuardado);
});