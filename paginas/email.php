<?php 

$correo = $_POST['correo'];
$nombre = $_POST['nombre'];
$mensaje = $_POST['mensaje'];


//echo $correo . " " . $nombre . " " . $mensaje;


$destinatario = "ormaza.main@gmail.com";
$asunto = "Correo proveniente de FOCUS by HORTTIZ"; 
$cuerpo = '
    <html> 
        <head> 
            <title>
                '.$nombre.' Te ha enviado el siguiente mensaje:
            </title> 
        </head>
        <body>
            <p> 
                Mensaje: '.$mensaje.'
                Asunto específico: '.$asunto.'
            </p> 
        </body>
    </html>
';
//para el envío en formato HTML 
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=UTF8\r\n"; 

//dirección del remitente

$headers .= "FROM: $nombre <$correo>\r\n";
mail($destinatario,$asunto,$cuerpo,$headers);

echo "Correo enviado"; 
?> 

<a href="contact.html">Volver a inicio</a>
