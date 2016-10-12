$.ajaxSetup({async: false});
$.getJSON("http://mentors.tuis.ac.jp/get_user_id", function(data){
	user_id = data.user_id;
});

function kkok(){
/*
	$.ajax({
	url:  "php/check_comment.php",
	data: 'user_id='+user_id+'&created_at='created_at,
	type: "POST",
	});
*/
	//alert('確認します。 user_id : '+user_id);
	location.href="php/check_comment.php?user_id="+user_id;
}
