<?php

if (isset($_POST["auth_edit"]) && trim($_POST["auth_edit"]) != "") {
    $password = htmlspecialchars($_POST["auth_edit"]);

    if ($password == "a") {
        if (isset($_POST["category_edit_item"]) && isset($_POST["subpage_edit_item"]) && isset($_POST["title_edit_item"]) && isset($_POST["filename_edit_item"]) && isset($_POST["filenameExtension_edit_item"])) {
            // 取得 $_POST 資料
            $index = $_POST["subpage_edit_item"]; // 取得 index
            $category = $_POST["category_edit_item"]; // 取得分類
            $path = "./assets/database/" . $category . $index . ".txt";

            // 讀寫資料
            $file = fopen($path, "r");
            $result = "";
            while ($line = fgets($file)) {
                $result .= $line;
            }
            fclose($file);

            $file = fopen($path, "w");
            $updated_data = "";
            $arr_all_data = explode(";;;", $result);
            var_dump($arr_all_data); echo "<br><br><br>";
            for ($i = 0; $i < count($arr_all_data)-1; $i++) {
                $a = trim($arr_all_data[$i]);
                $arr_data = json_decode($a, true);
                // Make sure the file we are going to edit is correct.
                // Compare to its `title` and `filename`.
                if ($_POST["title_edit_item"] == $arr_data["title"] && $_POST["filename_edit_item"] == $arr_data[$_POST["filenameExtension_edit_item"]]) {
                    $arr_data["status"] = 0;
                }
                $updated_data .= json_encode($arr_data, JSON_UNESCAPED_UNICODE) . ";;;\n";
            }

            fwrite($file, $updated_data);
            fclose($file);

            // Some pages like `LaborHealth` >> `labor-health`
            $categorySplit = preg_split('/(?=[A-Z])/', $category, -1, PREG_SPLIT_NO_EMPTY);
            $category = $categorySplit[0];
            for ($i = 1; $i < count($categorySplit); $i++) {
                $category .= "-" . $categorySplit[$i];
            }
            // var_dump($category); die();

            header("Location: " . strtolower($category) . ".html", true, 301);
            exit();
        }
        else {
            echo "Error: Unable to get POST data.";
            header("refresh:2; url=beer.html", true, 301);
            exit();
        }
    }
    else {
        echo "錯誤: Invalid Password.";
        header("refresh:2; url=beer.html", true, 301);
        exit();
    }
}
else {
    echo "錯誤: Unable to get POST data.";
    header("refresh:2; url=beer.html", true, 301);
    exit();
}
