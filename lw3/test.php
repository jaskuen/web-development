<?php
$a = $_GET['string'];
echo join(array_unique(str_split($a)));
