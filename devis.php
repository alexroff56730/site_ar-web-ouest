<?php
    header("Location: index.php");
    require_once('Title.php'); 
    $SEO = new Title("AR-WEB-OUEST - Demande de devis", "Demander un devis pour créer votre site web");
    $SEO->displayHeader();
?>
<body>
    <?php
        include("header.php");
        require_once("speed-mail/Info.php");

        if(isset($_POST['sub'])) {
            if(!empty(($_POST["Name"])) && !empty($_POST["Fname"]) && !empty($_POST["Mail"]) && !empty($_POST["siret"]) && !empty($_POST["Techno"])) {
                SpeedMail("Name", "Fname", "siret", "Mail", "MSG");
                echo "<div class='bg-success text-light' style='width:100%; padding-top: 10px; padding-bottom: 10px; text-align: center; font-size: 1.5em;'>Mail bien envoyé</div>";
            } else {
                echo "<div class='bg-danger text-light' style='width:100%; padding-top: 10px; padding-bottom: 10px; text-align: center; font-size: 1.5em;'>Le mail ne s'est pas envoyé veuillez remplir tous les champs</div>";
            }
        }
    ?>
    <div style="display: flex; max-width: 100%;">
        <div id="devis" class="DispForm bg-dark"></div>
        <div id="temp" class="DispTemp bg-secondary"></div>
    </div>
    <?php
        include("footer.php");
    ?>
    <script src="script/Devis.js"></script>
    <script src="script/TempDevis.js"></script>
</body>
</html>