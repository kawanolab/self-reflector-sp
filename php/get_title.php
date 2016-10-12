<?php
$url = "http://mentors.tuis.ac.jp/self-reflector/php/select_event.php?event_id=1916";
//ファイルの内容の読み込み
$data = "{"id":"1916","user_id":"1","title":"\u4f50\u539f\u30bd\u30fc\u30b7\u30e3\u30eb\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u8a18\u4e8b\u66f4\u65b0","start":"2016-02-22 21:15:00","end":"2016-02-22 23:15:00","created_at":"0000-00-00 00:00:00","updated_at":"0000-00-00 00:00:00","allDay":null,"quad":"2","done":"0","role_id":null,"hash_event":null,"start_real":null,"end_real":null,"title2":"\u4f50\u539f\u30bd\u30fc\u30b7\u30e3\u30eb\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u8a18\u4e8b\u66f4\u65b0"}";
$json = file_get_contents($data);

//連想配列にする
$arr = json_decode($json,true);
//駅情報だけ取得する
$event_array = $arr["title"];
echo $arr;

//表示
echo "<pre>";
var_dump($event_array);
echo "</pre>";
?>
