<?php
// Values received via ajax
$title = $_POST["title"];
$start = $_POST['start'];
$end = $_POST['end'];
$allday = $_POST['allDay'];
$quad = $_POST['quad'];
$user_id = $_POST['user_id'];
//$title2 = json_decode($title);

// connection to the database
try {
$bdd = new PDO('mysql:host=localhost;dbname=mentors_development', 'root', '');
} catch(Exception $e) {
exit('Unable to connect to database.');
}

// insert the records
if ($allday == 0) {
  $sql = "INSERT INTO events (user_id, title, start, end, quad) VALUES (?, ?, ?, ?, ?)";
  $q = $bdd->prepare($sql);
  $flag = $q->execute(array($user_id, $title, $start, $end, $quad));
} else {
  $sql = "INSERT INTO events (user_id, title, start, end, allday, quad) VALUES (?, ?, ?, ?, ?, ?)";
  $q = $bdd->prepare($sql);
  $flag = $q->execute(array($user_id, $title, $start, $end, $allday, $quad));
}

?>
