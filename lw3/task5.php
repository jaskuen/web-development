<?php

$email = $_GET['email'];
$fileName = "$email.txt";
$dir = "data/";
$tmp = opendir($dir);
$path = $dir.$fileName;
if (File_exists($path)){
    $fp = fopen($path, "r+");
    rewind($fp);
    echo(fgets($fp, 4096) . "<br>");
    echo(fgets($fp, 4096) . "<br>");
    echo(fgets($fp, 4096) . "<br>");
    echo(fgets($fp, 4096) . "<br>");
    fclose($fp);
} else {
    echo("This file does not exist");
}