<?php
// Values received via ajax
$mission_statement = $_POST['mission_statement'];
$user_id = $_POST['user_id'];
$mission_statement_id = $_POST['mission_statement_id'];


// connection to the database
try {
$options = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
); 
$bdd = new PDO('mysql:host=localhost;dbname=mentors_development', 'root', '', $options);
} catch(Exception $e) {
exit('Unable to connect to database.');
}

if ($mission_statement_id == -1) {
$sql = "INSERT INTO mission_statements (user_id, mission_statement) VALUES (?, ?)";
$q = $bdd->prepare($sql);
$flag = $q->execute(array($user_id, $mission_statement));
} else {
$sql = "UPDATE mission_statements SET mission_statement=? WHERE id=?";
$q = $bdd->prepare($sql);
$flag = $q->execute(array($mission_statement, $mission_statement_id));
}
?>
