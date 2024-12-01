<?php
    include 'dbConnect.php';

    if(isset($_POST['name']) && isset($_POST['phone_number']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['region'])){
        $name = $_POST['name'];
        $phone_number = $_POST['phone_number'];
        $email = $_POST['email'];
        $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
        $region = $_POST['region'];

        $insertSQL = "INSERT INTO users (Name, Phone_Number, Email, Password,District) VALUES ('$name','$phone_number','$email','$password','$region')";

        try{
            if (mysqli_query($con, $insertSQL)){
                header("Location:../../index.html?LoggedIn=1");
            }
            else{
                header("Location:../Pages/SignUpPage.html?error=2");
            }
        }
        catch(Exception $e)
        {
            header("Location:../Pages/SignUpPage.html?error=2");
        }
    }
?>