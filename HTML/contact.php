<?php

use PHPMailer\PHPMailer\PHPMailer;

require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

$mail = new PHPMailer();

if (isset($_POST["submit"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    try {
        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Username =  "athifahrh@gmail.com";
        $mail->Password = "athifahrh1907";
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = "587";

        $mail->setFrom("athifahrh@gmail.com");
        $mail->addAddress("athifahrh@gmail.com");

        $mail->isHTML(true);
        $mail->Subject = 'Message is received';
        $mail->Body = "
        <html>
        <head>
        </head>
        <body>
        <table>
        <tr>
        <td>Name</td>
        <td>:</td>
        <td>$name</td>
        </tr>
        <tr>
        <td>Email</td>
        <td>:</td>
        <td>$email</td>
        </tr>
        <tr>
        <td>Phone</td>
        <td>:</td>
        <td>$phone</td>
        </tr>
        <tr>
        <td>Message</td>
        <td>:</td>
        <td>$message</td>
        </tr>
        </table>
        </body>
        </html>
        ";

        $mail->send();
        echo "<script>
        alert('Thanks for reaching out to us. We’ll get back to you shortly.');
        document.location.href='contactus.html';
        </script>";
    } catch (Exception $e) {
        echo "<script>
        alert('Please try again.');
        document.location.href='contactus.html';
        </script>";
    }
}
