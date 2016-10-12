<?php

/* Values received via ajax */
$id = $_POST['id'];
$done = $_POST['done'];

// connection to the database
try {
$bdd = new PDO('mysql:host=localhost;dbname=mentors_development', 'root', '');
 } catch(Exception $e) {
exit('Unable to connect to database.');
}

if($done == 0) {
$sql = "UPDATE events SET done=? WHERE id=?";
$q = $bdd->prepare($sql);
$flag = $q->execute(array(1,$id));
}

if($done == 1) {
$sql = "UPDATE events SET done=? WHERE id=?";
$q = $bdd->prepare($sql);
$flag = $q->execute(array(0,$id));
}

?>