<?php
include '../Database/dbconnect.php';

// Check the connection
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

// Fetch data from locations table
$sql = "SELECT name, description, district, image FROM locations";
$result = $con->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Stylesheets/Locations.css?v=1.1">
    <link rel="stylesheet" href="../Stylesheets/HeaderFooter.css?v=1.1">
    <link rel="shortcut icon" href="../Images/HomePage/logo2.png" type="image/x-icon">
    <title>Locations</title>
</head>
<body>
    <div class="navbar">
        <div class="logo"></div>
        <div class="navbtnlist">
            <ul class="list">
                <li class="listItem"><a href="../../index.html" class="navLink">Home</a></li>
                <li class="listItem"><a href="../Pages/ServicesPage.html" class="navLink">Services</a></li>
                <li class="listItem"><a href="../Pages/GalleryPage.html" class="navLink">Gallery</a></li>
                <li class="listItem"><a href="../Pages/Locations.php" class="navLink active">Locations</a></li>
            </ul>
        </div>
        <div class="search">
            <input type="search" class="searchBox" placeholder="Search place..">
            <button type="submit" class="searchbtn"></button>
        </div>
    </div>
        <!-- <button class="share" onclick="gotoSharePage2()">SHARE</button> -->
    <div class="content">
    <h2>Locations</h2>
    <br>
        <div class="locations">
        <?php
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
       
                    echo '<div class="location">';
                    echo '    <div class="image">';
                    echo '        <img src="' . htmlspecialchars($row['image']) . '" width="" height="" alt="' . htmlspecialchars($row['name']) . '">';
                    echo '    </div>';
                    echo '    <div class="name">';
                    echo '        <p>' . htmlspecialchars($row['name']) . '</p>';
                    echo '    </div>';
                    echo '    <div class="district">';
                    echo '        <p>' . htmlspecialchars($row['district']) . '</p>';
                    echo '    </div>';
                    echo '    <div class="description">';
                    echo '        <p>' . htmlspecialchars($row['description']) . '</p>';
                    echo '    </div>';
                    echo '</div>';
                }
            } else {
                echo "No locations found.";
            }
        ?>
        </div>
    </div>
    <footer class="footer" style="position: relative; margin-bottom: 0px;">
            <div class="fRow">
                <div class="fcol fbussines">
                    <div class="blogo "></div>
                    <p class="fdis">Veer - Your travelling partner.
                        <br>
                        <br>
                        Committed to excellence, we strive to empower your journey through reliability, quality, and
                        unparalleled
                        service.
                    </p>
                </div>
                <div class="fcol">
                    <h3>Links</h3>
                    <hr>
                    <ul class="fList">
                        <li><a href="../../index.html" class="flink">Home</a></li>
                        <li><a href="../Pages/ServicesPage.html" class="flink">Services</a></li>
                        <li><a href="../Pages/GalleryPage.html" class="flink">Gallery</a></li>
                        <li><a href="../Pages/Locations.php" class="flink">Locations</a></li>
                        <li><a href="../Pages/AboutUsPage.html" class="flink">About Us</a></li>
                    </ul>
                </div>
                <div class="fcol">
                    <h3>Social</h3>
                    <hr>
                    <div class="sLinks">
                        <a href="">
                            <div class="social yt"></div>
                        </a>
                        <a href="">
                            <div class="social fb"></div>
                        </a>
                        <a href="">
                            <div class="social insta"></div>
                        </a>
                        <a href="">
                            <div class="social tw"></div>
                        </a>
                    </div>
                </div>
                <div class="fcol tagdiv">
                    <h3>Tags</h3>
                    <hr>
                    <button class="tags">Rivers</button>
                    <button class="tags">Water falls</button>
                    <button class="tags">Lakes</button>
                    <button class="tags">Rock climbing</button>
                    <button class="tags">Rafting</button>
                    <button class="tags">Matara</button>
                    <button class="tags">Deniyaya</button>
                    <button class="tags">Nuwawra Eliya</button>
                    <button class="tags">Kandy</button>
                    <button class="tags">Scuba</button>
                    <button class="tags">Scuba Diving</button>
                    <button class="tags">Safari</button>
                </div>
            </div>
            <hr>
        </footer>
    </div>
    <script src="../Scripts/HeaderFooterScript.js"></script>
</body>
</html>

<?php
$con->close();
?>
