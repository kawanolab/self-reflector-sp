<?php
require_once('config.php');
require_once('functions.php');

session_start();
header("Content-type: text/html; charset=utf-8");
$id = $_SESSION['id'];

mb_language("uni");
mb_internal_encoding("utf-8"); //内部文字コードを変更
mb_http_input("auto");
mb_http_output("utf-8");

$dbh = connectDb();

//$sth = $dbh->prepare("select title from events where user_id = 46 && start > '2016-06-00';");
$sth = $dbh->prepare("select title from events where user_id = 46;");
$sth->execute();

$userData = array();

while($row = $sth->fetch(PDO::FETCH_ASSOC)){
    //$userData[]=array(
    $userData[]=array(
    'title'=>$row['title']
  );
}

//jsonとして出力
header('Content-type: application/json');
echo json_encode($userData);
