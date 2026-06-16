const slides = [
{
    carro: "img/Carro.png",
    fondo: "img/s3.jpg",
    modelo: "KIA SPORTAGE",
    descripcion: "Un SUV moderno, elegante y cómodo para viajes dentro y fuera de la ciudad."
},
{
    carro: "img/toyota RAV4.webp",
    fondo: "img/fondo-rav4.jpg",
    modelo: "TOYOTA RAV4",
    descripcion: "El nuevo modelo está inspirado en SUV Toughness, evolucionando hacia una estética más moderna y urbana."
},
{
    carro: "img/j702.png",
    fondo: "img/fondo-jetour.jpg",
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