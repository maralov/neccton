<?php

$recepient = "mykhailo.aralov@softengi.com";
$sitename = "Necctonwebsite";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$message = "Name: $name \nPhone: $email \nText: $text";

$pagetitle = "New message from \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");