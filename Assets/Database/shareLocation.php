<?php
include 'dbconnect.php';

if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $con->real_escape_string($_POST['name']);
    $description = $con->real_escape_string($_POST['description']);
    $district = $con->real_escape_string($_POST['district']);
    
    if (isset($_FILES['dp']) && $_FILES['dp']['error'] === UPLOAD_ERR_OK) {
        $target_dir = "../uploads/";
        $target_file = $target_dir . basename($_FILES["dp"]["name"]);
        $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

        $allowed_types = ['jpg', 'jpeg', 'png', 'gif'];
        if (!in_array($imageFileType, $allowed_types)) {
            die("Sorry, only JPG, JPEG, PNG & GIF files are allowed.");
        }

        if ($_FILES["dp"]["size"] > 5000000) {
            die("Sorry, your file is too large.");
        }

        if (move_uploaded_file($_FILES["dp"]["tmp_name"], $target_file)) {
            $sql = "INSERT INTO locations (name, description, district, image) 
                    VALUES ('$name', '$description', '$district', '$target_file')";

            if ($con->query($sql) === TRUE) {
                header("Location: ../Pages/Locations.php");
            } else {
                echo "Error: ". $sql. "<br>". $con->error;
            }
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    } else {
        echo "No file was uploaded or there was an error during the upload.";
    }
}

$con->close();
?>
