<?php
use WideImage\WideImage;

require_once 'plugins/autoload.php';

$result = '../images/result.jpg';

$opacity = $_POST['opacity'];
$deltaX = $_POST['deltaX'];
$deltaY = $_POST['deltaY'];
$tiling = $_POST['tiling'];
$image = WideImage::load($_POST['image']);
$watermark = WideImage::load($_POST['watermark']);
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
            $new = $new->merge($watermark, 'left  + ' . $lengthX, 'top  +' . $lengthY, $opacity);
            $lengthX = $lengthX + $sizeWt[0] + $marginX;
        }
        $lengthY = $lengthY + $sizeWt[1] + $marginY;
    }
    $new -> saveToFile($result);
} else {
    $new = $image->merge($watermark, 'left + ' . $deltaX, 'top+' . $deltaY, $opacity);
    $new -> saveToFile($result);
}


exit;