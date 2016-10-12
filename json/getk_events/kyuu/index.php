<?php
require_once('config.php');
require_once('functions.php');


$user_id = $_POST['data1'];

mb_language("uni");
mb_internal_encoding("utf-8"); //内部文字コードを変更
mb_http_input("auto");
mb_http_output("utf-8");

$dbh = connectDb();

//$sth = $dbh->prepare("select title from events where user_id = 46 && start > '2016-06-00';");
//$sth = $dbh->prepare("select title from events where user_id = 46;");
//$sth = $dbh->prepare("select title from events where user_id = $user_id && (start > now() && start < (now() + INTERVAL 1 DAY)) ORDER BY start;");
//$sth->execute();


$sql = "select title from events where user_id = ? && (start > now() && start < (now() + INTERVAL 1 DAY)) ORDER BY start;";
$q = $bdd->prepare($sql);
$flag = $q->execute(array($user_id));




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
