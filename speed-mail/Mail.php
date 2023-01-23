<?php 
    class Mail {

        function clean_string($string) {
            $bad = array("content-type","bcc:","to:","cc:","href");
            return str_replace($bad,"",$string);
        }

        function send(Info $info) {

            $to      = "alexandreroffiaen@gmail.com";
            $mail_client = $info->getMail();
            $subject = $info->getName() . " " . $info->get_F_Name() . " " . $info->getSubject();
            $message = $info->getMail() . "\r\n" . $info->getMsg();
            $boundary = md5(rand());

            $headers = "From: <webmaster@example.com>" . "\r\n"; //Emetteur
            $headers.= "Reply-to: ".$info->getName()." <webmaster@example.com>" . "\r\n"; //Emetteur
            $headers.= "MIME-Version: 1.0" . "\r\n"; //Version de MIME
            $headers.= 'Content-Type: multipart/mixed; boundary='.$boundary .' '. "\r\n";

            $email_message = '--' . $boundary . "\r\n"; //Séparateur d'ouverture
            $email_message .= "Content-Type: text/plain; charset=utf-8" . "\r\n"; //Type du contenu
            $email_message .= "Content-Transfer-Encoding: 8bit" . "\r\n"; //Encodage
            $email_message .= "\r\n" .$this->clean_string($message). "\r\n";

            $filename = $info->getFile();
            echo $filename;

            if(isset($_FILES[$filename]) &&  $_FILES[$filename]['name'] != ""){ //Vérifie sur formulaire envoyé et que le fichier existe
                $nom_fichier = $_FILES[$filename]['name'];
                $source = $_FILES[$filename]['tmp_name'];
                $type_fichier = $_FILES[$filename]['type'];
                $taille_fichier = $_FILES[$filename]['size'];
                            
                if($nom_fichier != ".htaccess"){ //Vérifie que ce n'est pas un .htaccess
                     if($type_fichier == "image/jpeg" || $type_fichier == "image/png" || $type_fichier == "application/pdf"){ //Soit un jpeg soit un pdf
                         
                        if ($taille_fichier <= 2097152) { //Taille supérieure à Mo (en octets)
                            $tabRemplacement = array("é"=>"e", "è"=>"e", "à"=>"a"); //Remplacement des caractères spéciaux
                            
                            $handle = fopen($source, 'r'); //Ouverture du fichier
                            $content = fread($handle, $taille_fichier); //Lecture du fichier
                            $encoded_content = chunk_split(base64_encode($content)); //Encodage
                            $f = fclose($handle); //Fermeture du fichier
                                        
                            $email_message .= "\r\n" . "--" . $boundary . "\r\n"; //Deuxième séparateur d'ouverture
                            $email_message .= 'Content-type:'.$type_fichier.';name="'.$nom_fichier.'"'. "\r\n"; //Type de contenu (application/pdf ou image/jpeg)
                            $email_message .='Content-Disposition: attachment; filename="'.$nom_fichier.'"'. "\r\n"; //Précision de pièce jointe
                            $email_message .= 'Content-transfer-encoding:base64'. "\r\n"; //Encodage
                            $email_message .= "\r\n"; //Ligne blanche. IMPORTANT !
                            $email_message .= $encoded_content. "\r\n"; //Pièce jointe
        
                        }else{
                            //Message d'erreur
                            $email_message .= "\r\n" ."L'utilisateur a tenté de vous envoyer une pièce jointe mais celle ci était superieure à 2Mo.". "\r\n";
                        }
                    }else{
                        //Message d'erreur
                        $email_message .= "\r\n" ."L'utilisateur a tenté de vous envoyer une pièce jointe mais elle n'était pas au bon format.". "\r\n";
                    }
                }else{
                    //Message d'erreur
                    $email_message .= "\r\n" ."L'utilisateur a tenté de vous envoyer une pièce jointe .htaccess.". "\r\n";
                }
            }
        $email_message .= "\r\n" . "--" . $boundary . "--" . "\r\n";

            if(mail($to, $subject, $email_message, $headers)) {
                echo "Mail bien envoyé <br>";
            } else {
                echo "Erreur mail non envoyé <br>";
            }
        }
    }
?>