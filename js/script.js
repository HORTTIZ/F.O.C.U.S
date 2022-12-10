// Notes
const note = document.getElementById('note');
const containerNotes = document.getElementById('container-notes');
const cerrar = document.getElementById('cerrarNote');

note.addEventListener('click', function () {
    containerNotes.style.display = 'grid';
    containerMain.style.filter = 'blur(5px)';
    containerNotes.style.zIndex = '2';
})

cerrar.addEventListener('click', function () {
    containerNotes.style.display = 'none';
    containerMain.style.filter = 'blur(0px)';
})


//


const onNoise = document.getElementById('imgNoise');

const containerMain = document.getElementById('container-main');
setTimeout(function carga (){
    loader.style.opacity = '1';
    loader.style.zIndex = '999';
    loader.style.display = 'grid';
    containerMain.style.overflow = 'hidden';
}, 1);

window.addEventListener("load", function(event) {
    contenedor.style.display = 'none';
    loader.style.zIndex = '-999';
    loader.style.display = 'none';
    containerLoad.style.display = 'none';
    containerMain.style.overflow = 'visible';
});


// Cronometro para modo Gym, suena en 1 minuto como maximo de un ejercicio
    // El funcionamiento es sencillo, se temporiza por segundos. El segundo deseaso a ser el que active la campana del tiempo estimado tanto en modo gym como en modo estudio, debe ser restado en 6 para que concuerde con el setTimeout.
    