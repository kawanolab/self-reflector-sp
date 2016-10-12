<?php
// リクエストのパラメータ（引数）
 $event_id = $_GET['event_id'];
 $category_id = $_GET['category_id'];
// List of events
 $json = array();

 // Query that retrieves events
 $requete = "SELECT * FROM events WHERE id = '".$event_id."'";

 // connection to the database
 try {
 $bdd = new PDO('mysql:host=localhost;dbname=mentors_development', 'root', '');
 } catch(Exception $e) {
  exit('Unable to connect to database.');
 }
 // Execute the query
 $resultat = $bdd->query($requete) or die(print_r($bdd->errorInfo()));

 // レスポンスデータ
 $row = $resultat->fetchAll(PDO::FETCH_ASSOC);
 $json = json_encode($row);
 //$json = mb_convert_encoding($row, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
 //$arr = json_decode($json,true);
 echo $json;

   // update the records
   //$sql = "UPDATE events SET title2=? WHERE id=?";
   //$q = $bdd->prepare($sql);
   //$flag = $q->execute(array($title,$event_id));


 // sending the encoded result to success page
 //echo json_encode($row);
 //echo $resultat->fetchAll(PDO::FETCH_ASSOC);
?>
