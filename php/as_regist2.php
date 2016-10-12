<?php
$user_id = $_POST['user_id'];
$week_comment = $_POST['week_comment'];
$today = date("Y/m/d/G/i/s");

// connection to the database
try {
$options = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
); 
$bdd = new PDO('mysql:host=localhost;dbname=mentors_development', 'root', '',$options);
 } catch(Exception $e) {
exit('Unable to connect to database.');
}

$sql = "INSERT INTO assessments (user_id,week_comment,created_at) VALUES(?, ?, ?)";
$q = $bdd->prepare($sql);
$flag = $q->execute(array($user_id, $week_comment,$today));


?>