<?php

if (isset($_POST["auth"]) && trim($_POST["auth"]) != "") {
    $password = htmlspecialchars($_POST["auth"]);

    if ($password == "a") {
        if (isset($_POST["title"]) && isset($_POST["category"]) && isset($_POST["subpage"])) {
            date_default_timezone_set("Asia/Taipei");
            $now = new DateTime();
            $datetime = explode(" ", $now->format("Y-m-d H:i:s"));
            $dateDB = str_replace("-", " / ", $datetime[0]);
            $time = $datetime[0] . "-" . str_replace(":", "-", $datetime[1]);

            // 取得 $_POST 資料
            $title = htmlspecialchars($_POST["title"]); // 取得標題
            $category = htmlspecialchars($_POST["category"]); // 取得分類
            $subpage = htmlspecialchars($_POST["subpage"]); // 取得分類頁面
            $filepath = "./assets/database/" . $category . $subpage . ".txt";

            $filenameFragment = explode(".", $_FILES["file"]["name"]);
            $extension = end($filenameFragment);
            $filename = "CCU-EHSC-" . $time . "." . $extension;

            if ($extension != 'doc' && $extension != 'docx' && $extension != 'opt' && $extension != 'pdf') {
                echo "錯誤: 檔案格式錯誤";
                header("refresh:2; url=beer.html", true, 301);
                exit();
            }
            else {
                // 資料轉 json 格式
                if ($category != "News") {
                    $dataToJson = [
                        "title" => $title,
                        "date" => $dateDB,
                        $extension => $filename,
                        "status" => 1
                    ];
                }
                else {
                    $content = htmlspecialchars($_POST["content"]); // 取得最新消息內容
                    $dataToJson = [
                        "title" => $title,
                        "date" => $dateDB,
                        "content" => $content,
                        $extension => $filename,
                        "status" => 1
                    ];
                }

                $data = json_encode($dataToJson, JSON_UNESCAPED_UNICODE) . ";;;\n";

                if ($_FILES["file"]["error"] > 0) {
                    echo "錯誤: " . $_FILES["file"]["error"];
                    header("refresh:2; url=beer.html", true, 301);
                    exit();
                }
                else {
                    if (file_exists("./assets/" . $filename)) {
                        echo "檔案已經存在，請勿重覆上傳相同檔案。";
                        header("refresh:2; url=beer.html", true, 301);
                        exit();
                    }
                    else {
                        // 寫入資料
                        $targetfile = fopen($filepath, "a+");
                        fwrite($targetfile, $data);
                        fclose($targetfile);

                        move_uploaded_file($_FILES["file"]["tmp_name"], "./assets/" . $filename);
                    }
                }

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
        }
        else {
            echo "錯誤: Unable to get POST data.";
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
