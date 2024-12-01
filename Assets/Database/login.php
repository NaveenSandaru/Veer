<?php
    include 'dbConnect.php';

    if(isset($_POST['email']) && isset($_POST['password'])){
        $email = $_POST['email'];
        $password = $_POST['password'];

        $getUserSQL = "SELECT Password FROM users WHERE email = '$email'";

        $result = mysqli_query($con, $getUserSQL);

        if($result){
            $row = mysqli_fetch_assoc($result);
            if(password_verify($password, $row['Password'])){
                header("Location:../../index.html?LoggedIn=1");
            }
            else{
                header("Location: ../Pages/SignUpPage.html?error=1");
            }
        }
    }
?>