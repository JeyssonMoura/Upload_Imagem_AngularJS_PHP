<?php

$TempPath = $_FILES['arquivo']['tmp_name']; // Pegar nome temporário
$FileName = $_FILES['arquivo']['name']; // Pegar nome do arquivo

$Extension = strtolower(substr($FileName, strpos($FileName, ".") + 1));
$HashFileName = hash("sha256", $FileName);

if ($Extension == 'png') {
    $LocalUpload = "Uploads/$HashFileName.$Extension";
    move_uploaded_file($TempPath, $LocalUpload);
    echo $LocalUpload;
} else {
    echo "Formato de arquivo não suportado.";
}