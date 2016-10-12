<?php

/* Values received via ajax */
$id = $_POST['id'];
$title = $_POST['title'];
$start = $_POST['start'];
$end = $_POST['end'];
$allday = $_POST['allDay'];

// connection to the database
try {
$bdd = new PDO('mysql:host=localhost;dbname=mentors_development', 'root', '');
 } catch(Exception $e) {
exit('Unable to connect to database.');
}

 // update the records
if ($allday == 0) {
$sql = "UPDATE events SET title=?, start=?, end=?, allday=? WHERE id=?";
$q = $bdd->prepare($sql);
$flag = $q->execute(array($title,$start,$end,null,$id));
} else {
$sql = "UPDATE events SET title=?, start=?, end=?, allday=? WHERE id=?";
$q = $bdd->prepare($sql);
$flag = $q->execute(array($title,$start,$end,$allday,$id));
}
?>