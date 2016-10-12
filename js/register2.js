/*
$.ajaxSetup({async: false});
$.getJSON("http://mentors.tuis.ac.jp/get_user_id", function(data){
	user_id = data.user_id;
});
*/
//役割の登録
function events(){
	title = $("#title").val();
	start = $("#start").val();
	end = $("#end").val();
	allday = $("#allday").val();
	quad = $("#quad").val();
	user_id = $("#user_id").val();

	$.ajax({
	url:  "php/add_events.php",
	data: 'title='+ title+'&start='+ start+'&end='+ end+'&allday='+ allday+'&quad='+ quad+'&user_id='+ user_id,
	type: "POST",
	});
	toastr.info('イベントを登録しました。');
	//alert('役割を登録しました。');
	//location.reload();
}
