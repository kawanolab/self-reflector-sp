<?php
// Values received via ajax
$role0 = $_POST['role0'];
$role1 = $_POST['role1'];
$role2 = $_POST['role2'];
$role3 = $_POST['role3'];
$role4 = $_POST['role4'];
$role5 = $_POST['role5'];
$role6 = $_POST['role6'];
$role_id0 = $_POST['role_id0'];
$role_id1 = $_POST['role_id1'];
$role_id2 = $_POST['role_id2'];
$role_id3 = $_POST['role_id3'];
$role_id4 = $_POST['role_id4'];
$role_id5 = $_POST['role_id5'];
$role_id6 = $_POST['role_id6'];
$user_id = $_POST['user_id'];
$role_id = array($role_id0,$role_id1,$role_id2,$role_id3,$role_id4,$role_id5,$role_id6);
$role =  array($role0,$role1,$role2,$role3,$role4,$role5,$role6);

// connection to the database
try {
$options = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
); 
$bdd = new PDO('mysql:host=localhost;dbname=mentors_development', 'root', '', $options);
} catch(Exception $e) {
exit('Unable to connect to database.');
}

for ($i = 0 ; $i < count($role); $i++) {
	if ($role_id[$i] == -1) {
		$sql = "INSERT INTO roles (user_id, role) VALUES (?, ?)";
		$q = $bdd->prepare($sql);
		$flag = $q->execute(array($user_id, $role[$i]));
	} else {
		$sql = "UPDATE roles SET role=? WHERE id=?";
		$q = $bdd->prepare($sql);
		$flag = $q->execute(array($role[$i], $role_id[$i]));
	}
}

?>