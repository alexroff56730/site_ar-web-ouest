<?php 
    class Title {

        private $title;
        private $description;

        public function __construct($title, $description) {
            $this->title = $title;
            $this->description = $description;
        }

        public function setTitle($title) {
            $this->title = $title;
        }

        public function getTitle() {
            return $this->title;
        }

        public function setDesc($description) {
            $this->description = $description;
        }

        public function getDesc() {
            return $this->description;
        }

        public function displayHeader() {
            echo "<!DOCTYPE html>\n";
            echo "<html>\n";
            echo "<head>\n";
            echo "<meta charset='UTF-8'>\n";
            echo "<meta http-equiv='X-UA-Compatible' content='IE=edge'>\n";
            echo "<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n";
            echo "<title>".$this->getTitle()."</title>\n";
            echo "<meta name='description' content='".$this->getDesc()."'>\n";
            echo "<link rel='stylesheet' href='style/style.css'>\n";
            echo "<link rel='stylesheet' href="."https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css". " " ."integrity="."sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"." "."crossorigin="."anonymous".">\n";
            echo "</head>\n";
        }

    }
?>