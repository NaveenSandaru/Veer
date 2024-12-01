<?php
    $con = mysqli_connect('localhost','root','','veerBackup');

    if(!$con){
        die('Connection failed: '. mysqli_connect_error());
    }
?>