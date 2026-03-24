<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['action']) and $_POST['action'] == 'Subscribe' ) {
        $email = $_POST["email"];
        $subject = "Nova subscrição no portfólio";
        $to = "felizardomachica@gmail.com";
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-type: text/html\r\n";
        $message = "Pedido de subscrição enviado através do portfólio.";

        $messageBody = "Email: $email<br>Mensagem: $message";

        if (mail($to, $subject, $messageBody, $headers)) {
            echo "success";
        } else {
            echo "error";
        }
    } else {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];
        $subject = "Nova mensagem enviada pelo portfólio";

        $to = "felizardomachica@gmail.com";
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-type: text/html\r\n";

        $messageBody = "Nome: $name<br>Email: $email<br>Mensagem: $message";

        if (mail($to, $subject, $messageBody, $headers)) {
            echo "success";
        } else {
            echo "error";
        }
    }
}
