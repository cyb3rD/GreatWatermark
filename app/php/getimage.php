<?php
use WideImage\WideImage;

require_once 'plugins/autoload.php';

$result = '../img/result.jpg';

$opacity = $_POST['opacity'];
$deltaX = $_POST['deltaX'];
$deltaY = $_POST['deltaY'];
$koef = $_POST['koef'];
$tiling = $_POST['tiling'];

$watermark = WideImage::loadFromFile($_POST['watermark']);
$image = WideImage::loadFromFile($_POST['image']);

$sizeImg = getimagesize($_POST['image']);
$sizeWt = getimagesize($_POST['watermark']);



$marginX = $_POST['marginX'];
$marginY = $_POST['marginY'];
$lengthX = $marginY;
$lengthY = $marginX;
$i = 0;
$j = 0;


if($tiling) {
    $new = $image->merge($watermark, 'left + 0', 'top + 0', 0);
    while ($lengthY < $sizeImg[1]) {
        $lengthX = $marginX;
        while ($lengthX < $sizeImg[0]) {
            $new = $new->merge($watermark, $lengthX, $lengthY, $opacity);
            $lengthX = $lengthX + $sizeWt[0] + $marginX * $koef;
        }
        $lengthY = $lengthY + $sizeWt[1] + $marginY * $koef;
    }
    $new -> saveToFile($result);
} else {

    $new = $image->merge($watermark, $deltaX * $koef, $deltaY * $koef, $opacity);
    $new -> saveToFile($result);


}


exit;