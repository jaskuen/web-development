<?php

$fName = $_GET['first_name'];
$lName = $_GET['last_name'];
$email = $_GET['email'];
$age = $_GET['age'];

$fp = fopen("data/file.txt", "w");
$fName = str_split("First Name: ", $fName);
fwrite($fp, $fName);
fclose($fp);