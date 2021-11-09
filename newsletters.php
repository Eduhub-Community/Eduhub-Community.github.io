<?php

$con = mysqli_connect("localhost","root","","eduhub");

if(isset($_POST['email']) && isset($_POST['submit'])) {
    
$email = mysqli_real_escape_string($con, $_POST['email']);

$query = "INSERT INTO `newsletters` (`email`) VALUES ('$email')";
$result = mysqli_query($con, $query);

if($result) {
    header('location:index.html');
}
}

?>