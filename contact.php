<?php
    header("Location: index.php");
    require_once('Title.php'); 
    $SEO = new Title("AR-WEB-OUEST - Contactez-nous", "Contactez-nous pour plus d'information sur la création d'un site web");
    $SEO->displayHeader();
?>
<body>
    <?php
        include("header.php");
        require_once("speed-mail/Info.php");

        if(isset($_POST["sub"])) {
            if(!empty($_POST["Name"]) && !empty($_POST["Fname"]) && !empty($_POST["subject"]) && !empty($_POST["Mail"]) && !empty($_POST["MSG"])) {
                SpeedMail("Name", "Fname", "subject", "Mail", "MSG");
                echo "<div class='bg-success text-light' style='width:100%; padding-top: 10px; padding-bottom: 10px; text-align: center; font-size: 1.5em;'>Mail bien envoyé</div>";
            } else {
                echo "<div class='bg-danger text-light' style='width:100%; padding-top: 10px; padding-bottom: 10px; text-align: center; font-size: 1.5em;'>Le mail ne s'est pas envoyé veuillez remplir tous les champs</div>";
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