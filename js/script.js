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
    const mensaje = document.getElementById('mensaje');

    const frases = [
        "La imaginación es más importante que el conocimiento. El conocimiento se limita a todo lo que ahora sabemos y comprendemos, mientras que la imaginación abarca el mundo entero y todo lo que alguna vez sabremos y comprenderemos. - Albert Einstein",
        // Agrega más mensajes aquí
    ];

    function obtenerFraseAleatoria() {
        const indice = Math.floor(Math.random() * frases.length);
        return frases[indice];
    }

    function mostrarFraseAleatoria() {
        const mensajeDiv = document.getElementById("mensaje");
        mensajeDiv.textContent = "";

        const frase = obtenerFraseAleatoria();

        for (let i = 0; i < frase.length; i++) {
        setTimeout(() => {
            mensajeDiv.textContent += frase[i];
        }, i * 70); // Controla la velocidad de escritura
        }
    }

  // Mostrar una frase al cargar la página
    mostrarFraseAleatoria();
    });   