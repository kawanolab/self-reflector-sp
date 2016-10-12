$.ajaxSetup({async: false});
$.getJSON("http://mentors.tuis.ac.jp/get_user_id", function(data){
	user_id = data.user_id;
});


function wkkok(){
/*
	$.ajax({
	url:  "php/check_comment2.php",
	data: 'user_id='+user_id,
	type: "POST",
	});
*/
	//alert('確認します。 user_id : '+user_id);
	location.href="php/check_comment2.php?user_id="+user_id;
}
