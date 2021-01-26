<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'file:///C:/Users/sdeme/Desktop/bootcamp/homework/homework2/demercurio-portfolio/index.html';

    $email_subject = "New Form Submission";

    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";

    $to = "sarah.l.demercurio@gmail.com"


    ?>