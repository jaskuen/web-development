<?php
$identif = $_GET["identifier"];
$chArray = str_split($identif);
if (is_numeric($chArray[0])){
    echo "No. First character is number.";
} else {
    echo "Yes";
};
