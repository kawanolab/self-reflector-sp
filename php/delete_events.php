<?php

/* Values received via ajax */
$id = $_POST['id'];

// connection to the database
try {
$bdd = new PDO('mysql:host=localhost;dbname=mentors_development', 'root', '');
 } catch(Exception $e) {
exit('Unable to connect to database.');
}

$sql = "DELETE FROM events WHERE id=$id";
$q = $bdd->prepare($sql);
$flag = $q->execute();

?>