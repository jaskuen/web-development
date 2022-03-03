<?php
$password = $_GET['password'];
$len = strlen($password);
$howCool = 0;
$n = iconv_strlen($password);
$howCool += 4 * $n;
$n = strlen(preg_replace('/[^\d]/','',$password));
$howCool += 4 * $n;

