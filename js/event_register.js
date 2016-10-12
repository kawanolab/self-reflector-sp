$.ajaxSetup({async: false});
$.getJSON("http://mentors.tuis.ac.jp/get_user_id", function(data){
	user_id = data.user_id;
});

function addevent(){
	title = $("#title").val();
	start = $("#start").val();
	end = $("#end").val();
	allday = $("#allday").val();
	quad = $("#quad").val();

	$.ajax({
	url:  "php/add_events2.php",
	data: 'title=' + title + '&start=' + start + '&end=' + end + '&allday=' + allday + '&quad=' + quad  + '&user_id=' + user_id,
	type: "POST",
	});
	toastr.info('予定を登録しました。');
	//alert('ミッション・ステートメントを登録しました。');
	//location.reload();
}
