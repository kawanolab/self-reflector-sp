<?php
$user_id = $_POST['user_id'];
$day_comment = $_POST['day_comment'];
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

$sql = "INSERT INTO assessments (user_id,day_comment,created_at) VALUES(?, ?, ?)";
$q = $bdd->prepare($sql);
$flag = $q->execute(array($user_id, $day_comment,$today));

?>