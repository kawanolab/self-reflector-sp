<?php
// Values received via ajax
$user_id = $_POST['user_id'];


// connection to the database
try {
/*
$options = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
); 
*/
//$bdd = new PDO('mysql:host=localhost;dbname=mentors_development', 'root', '', $options);
$bdd = new PDO('mysql:host=localhost;dbname=mentors_development', 'root', '');
} catch(Exception $e) {
exit('Unable to connect to database.');
}

$sql = "select title from events where user_id = ? && (start > now() && start < (now() + INTERVAL 1 DAY)) ORDER BY start;";
$q = $bdd->prepare($sql);
$flag = $q->execute(array($user_id));

$userData = array();

while($row = $q->fetch(PDO::FETCH_ASSOC)){
    //$userData[]=array(
    $userData[]=array(
    'title'=>$row['title']
  );
}

//jsonとして出力
header('Content-type: application/json');
echo json_encode($userData);



?>
