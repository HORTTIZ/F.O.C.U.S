const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    btn.value = 'Enviando...';
    
    const serviceID = 'default_service';
    
    const templateID = 'template_arjpdjk';
    
    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Send Email';
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 4000,
            width: '100%',
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'success',
            title: '¡Enviado! Regresaremos a la App ☺'
        })
        window.location.href = "https://horttiz.github.io/FOCUS/";
    }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
    });
});