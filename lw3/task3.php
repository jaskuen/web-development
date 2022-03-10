<?php
$password = $_GET['password'];
$len = strlen($password);
$howCool = 0;
$howCool += 4 * $len;
$n = strlen(preg_replace('/[^\d]/','',$password));
$howCool += 4 * $n;
if ($n == 0 || $n == $len) $howCool -= $len;
else $howCool += $n * 2;
$noExtra = join(array_unique(str_split($password)));
$lenNoExtra = strlen($noExtra);
$n = 0;
for ($i = 0; $i < $lenNoExtra; $i++) 
{
    $symbol = $noExtra[$i];
    $extras = substr_count($password,$symbol);
    if ($extras > 1) $n += $extras; 
}
$howCool -= $n;
echo $howCool;


