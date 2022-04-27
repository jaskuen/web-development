<?php

$fName = $_GET['first_name'];
$lName = $_GET['last_name'];
$email = $_GET['email'];
$age = $_GET['age'];
$fileName = "$email.txt";
$dir = "data/";
$tmp = opendir($dir);
$path = $dir.$fileName;

if (File_exists($path)){
    $fp = fopen($path, "r+");
    rewind($fp);
} else {
    $fp = fopen($path, "w+");
    rewind($fp);
}

if (!empty($fName)){
    $fName = "First Name: ". $fName;
    fwrite($fp, $fName . PHP_EOL);
} else {
    fgets($fp, 4096);
}
if (!empty($lName)){
    $lName = "Last Name: ". $lName;
    fwrite($fp, $lName . PHP_EOL);
} else {
    fgets($fp, 4096);
}
if (!empty($email)){
    $email = "Email: ". $email;
    fwrite($fp, $email . PHP_EOL);
} else {
    fgets($fp, 4096);
}
if (!empty($age)){
    $age = "Age: ". $age;
    fwrite($fp, $age . PHP_EOL);
} else {
    fgets($fp, 4096);
}
fclose($fp);