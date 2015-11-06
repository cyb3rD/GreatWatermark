<?php

// Файл будет скачиваться с определенным нами названием

$result = '../images/#';

header('Content-type: application/jpeg');
header('Content-Disposition: attachment; filename="#"');

readfile($result);