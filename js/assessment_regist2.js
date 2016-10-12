$.ajaxSetup({async: false});
$.getJSON("http://mentors.tuis.ac.jp/get_user_id", function(data){
	user_id = data.user_id;
});


function wkok(){
	week_comment = $("#wek").val();
	$.ajax({
	url:  "http://mentors.tuis.ac.jp/self-reflector/php/as_regist2.php",
	data: 'week_comment='+week_comment+'&user_id='+user_id,
	type: "POST",
	});
	alert('保存完了しました');
	location.reload();
}
