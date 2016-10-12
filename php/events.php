<?php
 $user_id = $_GET['user_id'];
// List of events
 $json = array();

 // Query that retrieves events
 $requete = "SELECT * FROM events WHERE quad=0 AND done=0 AND user_id = '".$user_id."'" ;

 // connection to the database
 try {
 $bdd = new PDO('mysql:host=localhost;dbname=mentors_development', 'root', '');
 } catch(Exception $e) {
  exit('Unable to connect to database.');
 }
 // Execute the query
 $resultat = $bdd->query($requete) or die(print_r($bdd->errorInfo()));

 // sending the encoded result to success page
 echo json_encode($resultat->fetchAll(PDO::FETCH_ASSOC));

?>
