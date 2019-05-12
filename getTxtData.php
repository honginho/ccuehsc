<?php

if (isset($_POST["category"]) && isset($_POST["index"])) {
    // 取得 $_POST 資料
    $index = $_POST["index"]; // 取得 index
    $category = $_POST["category"]; // 取得分類
    $path = "./assets/database/" . $category . $index . ".txt";

    // 讀寫資料
    $file = fopen($path, "a+");
    $result = "";
    while ($line = fgets($file)) {
        $result .= $line;
    }
    fclose($file);
    echo $result;
}
else {
    echo "Error: Unable to get POST data.";
}
