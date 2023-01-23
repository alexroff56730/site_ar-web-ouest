<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AR-WEB-OUEST - Contact</title>
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
</head>
<body>
    <?php
        include("header.php");
        require_once("speed-mail/Info.php");

        if(isset($_POST["sub"])) {
            if(!empty($_POST["Name"]) && !empty($_POST["Fname"]) && !empty($_POST["subject"]) && !empty($_POST["Mail"]) && !empty($_POST["MSG"])) {
                SpeedMail("Name", "Fname", "subject", "Mail", "MSG");
                echo "<div class='bg-success text-light' style='width:100%; padding-top: 10px; padding-bottom: 10px; text-align: center; font-size: 1.5em;'>Mail bien envoye</div>";
            } else {
                echo "<div class='bg-danger text-light' style='width:100%; padding-top: 10px; padding-bottom: 10px; text-align: center; font-size: 1.5em;'>Le mail ne s'est pas envoye veuillez remplir tous les champs</div>";
            }
        }
    ?>
    <div id="ContactForm" class="bg-dark"></div>
    <?php
        include("footer.php");
    ?>
    <script src="script/ContactForm.js"></script>
</body>
</html>