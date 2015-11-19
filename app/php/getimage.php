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



$marginX = $_POST['marginX']*$koef;
$marginY = $_POST['marginY']*$koef;
$lengthX = 0;
$lengthY = 0;
$i = 0;
$j = 0;


if($tiling) {
    $new = $image->merge($watermark, 'left + 0', 'top + 0', 0);
    while ($lengthY - $sizeWt[1] < $sizeImg[1]) {
        $lengthX = 0;
        while ($lengthX - $sizeWt[0] < $sizeImg[0]) {
            $new = $new->merge($watermark, $deltaX * $koef+$lengthX, $deltaY * $koef+$lengthY, $opacity);
            $lengthX = $lengthX + $sizeWt[0] + $marginX;
        }
        $lengthY = $lengthY + $sizeWt[1] + $marginY;
    }
    $new -> saveToFile($result);
} else {

    $new = $image->merge($watermark, $deltaX * $koef, $deltaY * $koef, $opacity);
    $new -> saveToFile($result);


}


exit;