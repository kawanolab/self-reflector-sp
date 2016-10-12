<?php
// Values received via ajax
$act0 = $_POST['act0'];
$act1 = $_POST['act1'];
$act2 = $_POST['act2'];
$act3 = $_POST['act3'];
$act4 = $_POST['act4'];
$act5 = $_POST['act5'];
$act6 = $_POST['act6'];
$role_id0 = $_POST['role_id0'];
$role_id1 = $_POST['role_id1'];
$role_id2 = $_POST['role_id2'];
$role_id3 = $_POST['role_id3'];
$role_id4 = $_POST['role_id4'];
$role_id5 = $_POST['role_id5'];
$role_id6 = $_POST['role_id6'];
$user_id = $_POST['user_id'];
$role_id = array($role_id0,$role_id1,$role_id2,$role_id3,$role_id4,$role_id5,$role_id6);
$act =  array($act0,$act1,$act2,$act3,$act4,$act5,$act6);

// connection to the database
try {
$options = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
); 
$bdd = new PDO('mysql:host=localhost;dbname=mentors_development', 'root', '', $options);
} catch(Exception $e) {
exit('Unable to connect to database.');
}

for ($i = 0 ; $i < count($act); $i++) {
	if ($role_id[$i] == -1) {
		$sql = "INSERT INTO roles (user_id, activity) VALUES (?, ?)";
		$q = $bdd->prepare($sql);
		$flag = $q->execute(array($user_id, $act[$i]));
	} else {
		$sql = "UPDATE roles SET activity=? WHERE id=?";
		$q = $bdd->prepare($sql);
		$flag = $q->execute(array($act[$i], $role_id[$i]));
	}
}

?>