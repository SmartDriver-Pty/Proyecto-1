// ==============================
// IMÁGENES DE CADA GALERÍA
// ==============================

const galerias = {

    interior: [

        "img/interior1.jpg",
        "img/interior2.jpg",
        "img/interior3.jpg",
        "img/interior4.jpg"

    ],

    exterior: [

        "img/exterior1.jpg",
        "img/exterior2.jpg",
        "img/exterior3.jpg",
        "img/exterior4.jpg"

    ],

};

//============================

const tabs=document.querySelectorAll(".tab");

const contenidos=document.querySelectorAll(".contenido");

tabs.forEach(tab=>{

    tab.addEventListener("click",()=>{

        tabs.forEach(t=>t.classList.remove("active"));

        contenidos.forEach(c=>{

            c.classList.remove("active");

        });

        tab.classList.add("active");

        const id=tab.dataset.tab;

        const panel=document.getElementById(id);

        panel.classList.add("active");

        panel.animate([

            {

                opacity:0,

                transform:"translateY(20px)"

            },

            {

                opacity:1,

                transform:"translateY(0px)"

            }

        ],{

            duration:350,

            easing:"ease"

        });

    });

});

//============================
// EFECTO HOVER IMÁGENES
//============================

const imagenes=document.querySelectorAll("img");

imagenes.forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform="scale(1.05)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});