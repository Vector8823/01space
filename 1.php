<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Validación básica
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Configuración del correo
        $to = "sr.victor8823@gmail.com"; // Cambia esto a tu dirección de correo
        $subject = "Nuevo mensaje de contacto de $name";
        $body = "Nombre: $name\nCorreo Electrónico: $email\nMensaje:\n$message";
        $headers = "From: $email";

        // Enviar correo
        if (mail($to, $subject, $body, $headers)) {
            $responseMessage = "No disponible por el momento.";
        } else {
            $responseMessage = "No disponible por el momento.";
        }
    } else {
        $responseMessage = "No disponible por el momento.";
    }
} else {
    $responseMessage = "No disponible por el momento.";
}

