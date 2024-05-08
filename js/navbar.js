(function(){
    'use strict';

    const d = document, w = window;
    const contDesktop = d.querySelector(".navDesktop");
    const contMobile = d.querySelector(".navMobile");
    const boton = d.querySelector(".botonMenu");
    const imagen = d.querySelector(".botonMenu__imagen");
    
    w.addEventListener("resize",(e)=>{
        let width = w.innerWidth;

        if(width > 700){
            contDesktop.classList.remove("contenedorNav--active");
            contMobile.classList.add("contenedorNav--active");
            boton.classList.add("contenedorNav--active");
        }
        if(width <= 700){
            contDesktop.classList.add("contenedorNav--active");
            boton.classList.remove("contenedorNav--active");
        }
    })
    
    boton.addEventListener("click",(e)=>{
        if(imagen.getAttribute('src') === "assets/icon/menu.svg"){
            imagen.setAttribute('src','assets/icon/close.svg');
            contMobile.classList.add("navMobile--active");
        }
        else{
            imagen.setAttribute('src','assets/icon/menu.svg');
            contMobile.classList.remove("navMobile--active");
        }
    })


})();