<?php
use WideImage\WideImage;

session_start();
require_once 'plugins/autoload.php';

function rus2translit($string)
{
    $converter = array(
        'а' => 'a', 'б' => 'b', 'в' => 'v',
        'г' => 'g', 'д' => 'd', 'е' => 'e',
        'ё' => 'yo', 'ж' => 'j', 'з' => 'z',
        'и' => 'i', 'й' => 'y', 'к' => 'k',
        'л' => 'l', 'м' => 'm', 'н' => 'n',
        'о' => 'o', 'п' => 'p', 'р' => 'r',
        'с' => 's', 'т' => 't', 'у' => 'u',
        'ф' => 'f', 'х' => 'h', 'ц' => 'c',
        'ч' => 'ch', 'ш' => 'sh', 'щ' => 'sch',
        'ь' => '*', 'ы' => 'i', 'ъ' => '*',
        'э' => 'e', 'ю' => 'yu', 'я' => 'ya',
        'А' => 'A', 'Б' => 'B', 'В' => 'V',
        'Г' => 'G', 'Д' => 'D', 'Е' => 'E',
        'Ё' => 'YO', 'Ж' => 'Zh', 'З' => 'Z',
        'И' => 'I', 'Й' => 'Y', 'К' => 'K',
        'Л' => 'L', 'М' => 'M', 'Н' => 'N',
        'О' => 'O', 'П' => 'P', 'Р' => 'R',
        'С' => 'S', 'Т' => 'T', 'У' => 'U',
        'Ф' => 'F', 'Х' => 'H', 'Ц' => 'C',
        'Ч' => 'Ch', 'Ш' => 'Sh', 'Щ' => 'Sch',
        'Ь' => '*', 'Ы' => 'Y', 'Ъ' => '*',
        'Э' => 'E', 'Ю' => 'Yu', 'Я' => 'Ya',
    );
    return strtr($string, $converter);
}

if ($_SERVER['REQUEST_METHOD' == 'POST']) {

    $allowed = array('png', 'jpg', 'gif');

    if (isset($_FILES['upl']) && $_FILES['upl']['error'] == 0) {

        $extension = pathinfo($_FILES['upl']['name'], PATHINFO_EXTENSION);

        $inputName = key($_FILES);
        print_r($_POST['fileurl']);
        $file = $_FILES[$inputName];
        if ($file['size'] === 0 || $file['size'] > 2097152) {
            $data['message_error'] = "Выберите файл меньше 2Мб";
        }
        $uploadFileName = $file['name'];
        $uploadFile = $file['tmp_name'];
        $uploadFileName = rus2translit($uploadFileName);
        $destination = '../images/upload' . $uploadFileName;
        $imageSizes = getimagesize($uploadFile);

        WideImage::loadFromFile($uploadFile)->saveToFile($destination);

        $data = [
            "width" => $imageSizes[0],
            "height" => $imageSizes[1],
            "path" => $destination,
            "inputName" => $inputName,
            "fileName" => $uploadFileName,
            "status" => "OK"
        ];

        echo json_encode($data);
        exit;
    }

} else {
    $_SESSION['message'] = 'У Вас нет доступа на данную страницу';
    print_r($_SERVER['REQUEST_METHOD']);
    echo "error";
    exit;
}