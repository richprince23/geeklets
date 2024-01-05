<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';


header('Content-Type: application/json'); 

// Get the raw POST data
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $input["name"];
    $email = $input["email"];
    $subject = $input["subject"];
    $message = $input["message"];

    // echo $name;
    // Email configuration
    $to = "aikins@arksoftwarez.com";

    $mail = new PHPMailer(true);

    try {
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;

        $mail->isSMTP();
        $mail->Host       = 'smtp.arksoftwarez.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'aikins@arksoftwarez.com';
        $mail->Password   = 'Costero23#';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;
        //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom("aikins@arksoftwarez.com", $name);
        $mail->addAddress($to, 'Innville');     //Add a recipient
        $mail->Subject = $subject;
        $mail->isHTML(true);
        $mail->Body = "
        <html>
        <head>
            <title>New Message from Website</title>
        </head>
        <body>
            <h2>New Message</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Subject:</strong> $subject</p>
            <p><strong>Message:</strong> $message</p>
        </body>
        </html>
    ";

        $mail->send();
        echo json_encode(["success" => true, "message" => "Email sent successfully"]);
    } catch (\Throwable $th) {
        echo json_encode(["success" => false, "message" => "Failed to send email. Error: {$mail->ErrorInfo}"]);
    }
    
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}
