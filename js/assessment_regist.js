$.ajaxSetup({async: false});
$.getJSON("http://mentors.tuis.ac.jp/get_user_id", function(data){
	user_id = data.user_id;
});


function asok(){
	day_comment = $("#day").val();
	$.ajax({
	url:  "http://mentors.tuis.ac.jp/self-reflector/php/as_regist.php",
	data: 'day_comment='+day_comment+'&user_id='+user_id,
	type: "POST",
	});
	alert('保存完了しました');
	location.reload();
}
