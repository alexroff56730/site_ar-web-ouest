<?php 
    require_once("Mail.php");
    
    class Info extends Mail {
        private $name;
        private $firstName;
        private $subject;
        private $mail;
        private $msg;
        private $fileName;

        function __construct($name, $firstName, $subject, $mail, $msg, $fileName="") {
            $this->name = htmlspecialchars($_POST[$name]);
            $this->firstName = htmlspecialchars($_POST[$firstName]);
            $this->subject = htmlspecialchars($_POST[$subject]);
            $this->mail = htmlspecialchars($_POST[$mail]);
            $this->msg = htmlspecialchars($_POST[$msg]);
            $this->fileName = $fileName;
        }

        function AddName($name) {
            $this->name = htmlspecialchars($_POST[$name]);
        }

        function Add_F_Name($firstName) {
            $this->firstName = htmlspecialchars($_POST[$firstName]);
        }

        function AddSubject($subject) {
            $this->subject = htmlspecialchars($_POST[$subject]);
        }

        function AddMail($mail) {
            $this->mail = htmlspecialchars($_POST[$mail]);
        }

        function AddMsg($msg) {
            $this->msg = htmlspecialchars($_POST[$msg]);
        }

        function AddFile($fileName) {
            $this->fileName = $fileName;
        }

        function getName() {
            return $this->name;
        }

        function get_F_Name() {
            return $this->firstName;
        }

        function getSubject() {
            return $this->subject;
        }

        function getMail() {
            return $this->mail;
        }

        function getMsg() {
            return $this->msg;
        }

        function getFile() {
            return $this->fileName;
        }
    }

    function SpeedMail($name="", $fName="", $subject="", $mail="", $msg="", $file="") {
        $test = new Info($name, $fName, $subject, $mail, $msg, $file);
        $test1 = new Mail();
        $test1->send($test);
    }
?>