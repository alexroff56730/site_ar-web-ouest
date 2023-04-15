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

    }
?>