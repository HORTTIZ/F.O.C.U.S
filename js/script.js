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
        "Si quieres seguir obteniendo lo que estás obteniendo, sigue haciendo lo que estás haciendo. - Proverbio",
        "El arte de vivir se acerca más al de la lucha, que al de la danza. - Marco Aurelio",
        "Preocúpate, resueltamente, como romano y varón, de hacer lo que tienes entre manos con puntual y no fingida gravedad, con amor, libertad y justicia, y procúrate tiempo libre para liberarte de todas las demás distracciones. - Marco Aurelio (Meditaciones)",
        "...No toma en consideración el elogio de tales hombres que ni consigo mismo están satisfechos. - Marco Aurelio (Meditaciones)",
        "Ni actúes contra tu voluntad, ni de manera insociable, ni sin reflexión. - Marco Aurelio (Meditaciones)",
        "...En realidad no querías estar con otro, sino que no podías estar contigo. - Séneca (De la brevedad de la vida)",
        "Aquellos que verdaderamente lideran son capaces de crear un grupo de seguidores que no actúan porque estén dominados, sino porque se sienten motivados. - Simon Sinek (Empieza con el porqué)",
        "Si hay algo que es una amenaza para ti y tu bienestar, tienes que hacer algo al respecto. - Reflexiones Personales",
        "Es un punto de supervivencia; neutralizar la amenaza. - Reflexiones Personales",
        "Sé tu propio mayordomo... Cuando se desarrolla una relación entre el yo presente y el yo futuro, el primero sirve al segundo... Prioriza las necesidades del yo futuro antes que las tuyas. - Chase Hughes",
        "Entre más responsabilidades tienes, más sentido tiene tu vida. Entre mayor sea el grado de responsabilidad que tú aceptes soportar de manera voluntaria, más rica será tu vida. - Jordan Peterson",
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