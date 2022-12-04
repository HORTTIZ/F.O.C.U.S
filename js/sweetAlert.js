//const { default: Swal } = require("sweetalert2");



/* INCIO ENVIO DE EMAIL */
const logo = document.getElementById('imgLogoContainer');
logo.addEventListener('click', function (){
    Swal.fire({
        icon: 'info',
        title: '<h1 font-size="14px">¿Hola?</h1>',
        text: '¡Envíame un email contándome tus mejoras desde que usas la App!',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#fa5454',
        confirmButtonText: '¡Aceptar!',
        cancelButtonText: 'Cancelar',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        width: '80%',
    }).then((result) => {
        if (result.isConfirmed) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                width: '70%',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'success',
                title: '¡Viajando hacia página de contacto!'
            })
            setTimeout(function aceptaEmail() {
                window.location.href ="https://horttiz.github.io/F.O.C.U.S/paginas/contact.html";
            }, 2000);

        } else if (result.dismiss){
            setTimeout(function cancelaEmail(){
                console.log("cancelado");
            });
        }
    })
})
/* FIN ENVIO DE EMAIL */


/* INCIO REPRODUCCIÓN DE RUIDO MARRÓN */
const noiseSong = document.getElementById('noise');
onNoise.addEventListener('click', function () {
    Swal.fire({
        title: '<h1 font-size="20px">🎧</h1>',
        text: 'El brown noise es un sonido envolvente que se mueve en graves frecuencias transmitiendo calma y concentración, ideal para estudiar.',
        footer: 'Conoce más acerca del ruido marrón...<a href="https://35mm.es/ruido-marron/">aquí</a>',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#fa5454',
        confirmButtonText: '¡Quiero concentrarme!',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            setTimeout(function ruidoBrown() {
                noiseSong.currentTime = 0;
                noiseSong.volume = 1.0;
                noiseSong.play();
            }, 1000);
        } else if (result.dismiss){
            setTimeout(function volumen(){
                noiseSong.pause();
                noiseSong.currentTime = 0;
            });
        }
    })
});
/* FIN REPRODUCCIÓN RUIDO MARRÓN */