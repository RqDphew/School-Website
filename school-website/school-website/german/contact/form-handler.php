<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'info@websitename.extension';//treba da se smeni koga ke se postavi na server

$email_subject = 'New form submition';

$email_body = "User name: $name.\n"."User email: $visitor_email.\n"."Subject: $subject.\n"."User message: $message.\n";

$to = "hristijanbeast2004@gmail.com";//email na koj shto ke se isprati formata

$headers = "From: $email_from\r\n";

$headers.= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: contact.html");

?>