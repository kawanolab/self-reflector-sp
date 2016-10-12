$.ajaxSetup({async: false});
$.getJSON("http://mentors.tuis.ac.jp/get_user_id", function(data){
	user_id = data.user_id;
	mission_statement_id = data.mission_statement_id;
});

var role_id = new Array();

$.getJSON("http://mentors.tuis.ac.jp/get_roles", function(data){
	for(var i in data){
		role_id[i] = data[i].role_id;
	}
});

(function(undefined){
	for (var i=0; i<=6; i++){
		if (role_id[i] === undefined) {
			role_id[i] = -1;
		}
	}
})();

//ミッションステートメントの登録
function msok(){
	mission_statement = $("#mst").val();
	$.ajax({
	url:  "php/ms_register.php",
	data: 'mission_statement='+ mission_statement+'&user_id='+ user_id+'&mission_statement_id='+ mission_statement_id ,
	type: "POST",
	});
	toastr.info('ミッション・ステートメントを登録しました。');
	//alert('ミッション・ステートメントを登録しました。');
	//location.reload();
}

//役割の登録
function rlok(){
	role0 = $("#rl0").val();
	role1 = $("#rl1").val();
	role2 = $("#rl2").val();
	role3 = $("#rl3").val();
	role4 = $("#rl4").val();
	role5 = $("#rl5").val();
	role6 = $("#rl6").val();
	
	$.ajax({
	url:  "php/role_register.php",
	data: 'role0='+ role0+'&role1='+ role1+'&role2='+ role2+'&role3='+ role3+'&role4='+ role4+'&role5='+ role5+'&role6='+ role6+'&user_id='+ user_id+'&role_id0='+ role_id[0]+'&role_id1='+ role_id[1]+'&role_id2='+ role_id[2]+'&role_id3='+ role_id[3]+'&role_id4='+ role_id[4]+'&role_id5='+ role_id[5]+'&role_id6='+ role_id[6] ,
	type: "POST",
	});
	toastr.info('役割を登録しました。');
	//alert('役割を登録しました。');
	//location.reload();
}

//役割ごとの活動登録
function actok(){
	act0 = $("#act0").val();
	act1 = $("#act1").val();
	act2 = $("#act2").val();
	act3 = $("#act3").val();
	act4 = $("#act4").val();
	act5 = $("#act5").val();
	act6 = $("#act6").val();
	
	$.ajax({
	url:  "php/act_register.php",
	data: 'act0='+ act0+'&act1='+ act1+'&act2='+ act2+'&act3='+ act3+'&act4='+ act4+'&act5='+ act5+'&act6='+ act6+'&user_id='+ user_id+'&role_id0='+ role_id[0]+'&role_id1='+ role_id[1]+'&role_id2='+ role_id[2]+'&role_id3='+ role_id[3]+'&role_id4='+ role_id[4]+'&role_id5='+ role_id[5]+'&role_id6='+ role_id[6] ,
	type: "POST",
	});
	toastr.info('各役割の活動を登録しました。');
	//alert('各役割の活動を登録しました。');
	//location.reload();
}
