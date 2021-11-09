<?php

$con = mysqli_connect("localhost","root","","eduhub");

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
    
$name = mysqli_real_escape_string($con, $_POST['name']);
$email = mysqli_real_escape_string($con, $_POST['email']);
$msg = mysqli_real_escape_string($con, $_POST['message']);

$query = "INSERT INTO `contact_form` (`name`, `email`, `message`) VALUES ('$name', '$email', '$msg')";
$result = mysqli_query($con, $query);

}

?>