<?php

session_start();

$currentLanguge = $_GET['lang'];

if($currentLanguge === "en"){
    echo 'Hello, stupid!!! :)))';
} else {
    echo 'Привет, Россия';
}

$langArray = parse_ini_file('/../languages.ini', true);

print_r($langArray);