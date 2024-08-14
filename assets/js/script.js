let cambiarImg = document.getElementById('cambioImg');

function intercambiarImg() {
    if(cambiarImg.src === window.location.origin + "/assets/img/perfil.jpeg"){
        cambiarImg.src = "./assets/img/jas.jpeg";
    }else{
        cambiarImg.src = "./assets/img/perfil.jpeg";
    }
}
//para asociar la funcion a los eventos
cambiarImg.addEventListener('mouseover', intercambiarImg);
cambiarImg.addEventListener('mouseout', intercambiarImg);


//para mostrar contacto
let contactoNav = document.getElementById('contactoNav');
let btnVerContacto = document.getElementById('btnVerContacto');
let contacto = document.getElementById('contacto');
let cancelarForm = document.getElementById('cancelarForm');

//mostrar seccion contacto
function mostrarContacto(event){
    event.preventDefault();
    console.log("mostrando contacto");
    if(contacto){
        contacto.style.display = "block";
        contacto.scrollIntoView({ behavior: 'smooth' }); //para q haga scroll a la seccion, ya q el enlace del nav no funciona
    }
}

//para "asociar" los eventos a la funcion mostrarContacto
contactoNav.addEventListener('click', mostrarContacto);
btnVerContacto.addEventListener('click', mostrarContacto);


//ocultar form contacto
cancelarForm.addEventListener('click', function(event){
    event.preventDefault();
    console.log("ocultando seccion contacto");
    contacto.style.display = "none";
});


//mostrar contacto desde nav
/* contactoNav.addEventListener('click', function(event){
    event.preventDefault();
    console.log("mostrando seccion contacto");
    if(contacto){
        contacto.style.display = "block";
        contacto.scrollIntoView({ behavior: 'smooth' }); //para q haga scroll a la seccion, ya q el enlace del nav no funciona
    }
});

//mostrar contacto desde el btn de proyectos
btnVerContacto.addEventListener('click', function(event){
    event.preventDefault();
    console.log("mostrando seccion contacto");
    if(contacto){
        contacto.style.display = "block";
        contacto.scrollIntoView({ behavior: 'smooth' }); //para q haga scroll a la seccion, ya q el enlace del nav no funciona
    }
}); */