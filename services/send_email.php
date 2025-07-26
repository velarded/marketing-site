<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(strip_tags(trim($_POST["name"])));
    $phone = htmlspecialchars(strip_tags(trim($_POST["phone"])));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $company = isset($_POST["company"]) ? htmlspecialchars(strip_tags(trim($_POST["company"]))) : "N/A";
    $message = htmlspecialchars(strip_tags(trim($_POST["message"])));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }
        
    $to = "danica.cristine.velarde@gmail.com";  
    $subject = "$company Has Submitted An Inquiry! | $name";
    
    $body .= "Company: $company\n";
    $body  = "Full Name: $name\n";
    $body .= "Phone Number: $phone\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request.";
}
?>
