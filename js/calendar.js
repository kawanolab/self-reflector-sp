$(document).ready(function() {

	var user_id;
	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();

	//mentorsのログイン情報をjsonで取得
	$.ajaxSetup({async: false});
	$.getJSON("http://mentors.tuis.ac.jp/get_user_id", function(data){
		user_id = data.user_id;
	});

	$.getJSON("http://mentors.tuis.ac.jp/get_roles", function(data){
		for(var i in data){
			role[i] = data[i].role;
		}
	});

	(function(undefined){
		for (var i=0; i<=6; i++){
			if (role[i] === undefined) {
				role[i] = null;
			}
		}
	})();

	//external-events処理
	$('#external-events div.external-event').each(function() {
		var eventObject = {
			title: $.trim($(this).text()),
		};
		$(this).data('eventObject', eventObject);
		$(this).draggable({
			zIndex: 999,
			revert: true,
			revertDuration: 0
		});
	});

	//カレンダーの設定
	var calendar = $('#calendar').fullCalendar({
		eventSources: [
			{
				url: "php/events.php?user_id="+user_id,
			},
			{
				url: "php/events2.php?user_id="+user_id,
				color:"Blue"
			},
			{
				url: "php/checkedevents.php?user_id="+user_id,
				color:"DimGray"
				//backgroundColor:"Lime",
				//borderColor:"LimeGreen",
			}
		],
		
		//イベントの作成
		selectable: true,
		selectHelper: true,
		select: function(start, end, allDay) {
			var title = prompt('タイトルを入力してください。:');
			if (title) {
				var start = $.fullCalendar.formatDate(start, "yyyy-MM-dd HH:mm:ss");
				var end = $.fullCalendar.formatDate(end, "yyyy-MM-dd HH:mm:ss");
				var quad = 0;
				var event_data = 'title='+ title+'&start='+ start +'&end='+ end +'&allDay='+ Number(allDay) +'&quad='+ quad +'&user_id='+ user_id;
				$.ajax({
					url:  "php/add_events.php",
					data: event_data,
					type: "POST",
					success: function(json){
						$('#calendar').fullCalendar('refetchEvents');
					},
				});
			}
			calendar.fullCalendar('unselect');
		},
	   
		//イベントの移動
		editable: true,
		eventDrop: function(event, delta,a, allDay) {
			var start = $.fullCalendar.formatDate(event.start, "yyyy-MM-dd HH:mm:ss");
			var end = $.fullCalendar.formatDate(event.end, "yyyy-MM-dd HH:mm:ss");
			var event_data = 'title='+ event.title+'&start='+ start +'&end='+ end +'&allDay='+ Number(allDay) +'&id='+ event.id;
			if(event.done == 0) {
			$.ajax({
				url: "php/update_events.php",
				data: event_data,
				type: "POST",
			});
			} else {
			$('#calendar').fullCalendar('refetchEvents');
			}
		},
	   
		//イベントのリサイズ
		eventResize: function(event) {
			var start = $.fullCalendar.formatDate(event.start, "yyyy-MM-dd HH:mm:ss");
			var end = $.fullCalendar.formatDate(event.end, "yyyy-MM-dd HH:mm:ss");
			var event_data = 'title='+ event.title+'&start='+ start +'&end='+ end +'&id='+ event.id;
			if(event.done == 0) {
			$.ajax({
				url:  "php/update_events.php",
				data: event_data,
				type: "POST",
			});
			} else {
			$('#calendar').fullCalendar('refetchEvents');
			}
		},

		//イベントのチェック
		eventClick: function(event) {
		var event_data = 'id=' + event.id + '&done=' + event.done;
			$.ajax({
				url: "php/check_events.php",
				data: event_data,
				type: "POST",
				success: function(json){
					$('#calendar').fullCalendar('refetchEvents');
				},
			});
		},
		
		//イベントのドロップ
		editable: true,
		droppable: true,
		drop: function(date, allDay) {
			var start = $.fullCalendar.formatDate(date, "yyyy-MM-dd HH:mm:ss");
			var end = date;
			end.setHours(end.getHours() + 2);
			var end = $.fullCalendar.formatDate(end, "yyyy-MM-dd HH:mm:ss");
			var title = $.trim($(this).text());
			var quad = 2;
			var event_data = 'title='+ title+'&start='+ start +'&end='+ end +'&allDay='+ Number(allDay) +'&quad='+ quad +'&user_id='+ user_id;
			$.ajax({
				url:  "php/add_events.php",
				data: event_data ,
				type: "POST",
				success: function(json){
					$('#calendar').fullCalendar('refetchEvents');
				},
			});
		},
		
		eventRender: function (event, element) {
			element.bind('mousedown', function (e) {
				if (e.which == 3 && event.done == 0) { //右クリック
				//イベントの削除
					var decision = confirm("イベントを削除します。よろしいですか？"); 
					if (decision) {
						$.ajax({
						url: "php/delete_events.php",
						data: 'id=' + event.id ,
						type: "POST",
					});
					$('#calendar').fullCalendar('removeEvents', event.id);
					} else {
					}
				}
			});
		},
		
		// ヘッダーのタイトルとボタン
		header: {
			// title, prev, next, prevYear, nextYear, today
			right: 'month,agendaWeek,agendaDay',
			center: 'title',
			left: 'prev,next today'
		},
		//高さ
		height: 1675,
		// 初期表示ビュー
		defaultView: 'agendaWeek',
		// 終日スロットを表示
		allDaySlot: true,
		// スロットの時間の書式
		axisFormat: 'H(:mm)',
		// スロットの分
		slotMinutes: 30,
		// 選択する時間間隔
		snapMinutes: 15,
		// スクロール開始時間
		firstHour: 7,
		//月曜日から
		firstDay: 1,
		// 時間の書式
		timeFormat: 'H(:mm)',
		// 最小時間
		minTime: '5:00:00',
		// 最大時間
		maxTime: '24:00:00',

		//以下日本語表示の設定
		// タイトルの書式
		titleFormat: {
			month: 'yyyy年 M月',
			week: 'yyyy年M月d日{ ～ }{[yyyy年]}{[M月]d日}', 
			day: "yyyy年M月d日'('ddd')'",
		},
		//more表示の書式
		dayPopoverFormat:'yyyy年 M月 d日[(]ddd[)]',
		// 月名称
		monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
		// 月略称
		monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
		// 曜日名称
		dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
		// 曜日略称
		dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
		// スロットの時間の書式
		axisFormat: 'H:mm',
		// 時間の書式
		timeFormat: 'H:mm',
		//終日スロットの名前
		allDayText: '終日',
		// ボタン文字列
		buttonText: {
			prev: '前',
			next: '次',
			prevYear: '前年',
			nextYear: '翌年',
			today: '今日に戻る',
			month: 'Month',
			week: 'Week',
			day: 'Day'
		}
	});

	//スマホ表示用カレンダーの設定
	var calendar2 = $('#calendar2').fullCalendar({
		eventSources: [
			{
				url: "php/events.php?user_id="+user_id,
			},
			{
				url: "php/events2.php?user_id="+user_id,
				color:"Blue"
			},
			{
				url: "php/checkedevents.php?user_id="+user_id,
				color:"DimGray"
				//backgroundColor:"Lime",
				//borderColor:"LimeGreen",
			}
		],
		
		//イベントのチェック
		eventClick: function(event) {
		var decision = confirm("「"+event.title+"」を選択しています。よろしいですか？"); 
		if (decision) {
			var event_data = 'id=' + event.id + '&done=' + event.done;
				$.ajax({
					url: "php/check_events.php",
					data: event_data,
					type: "POST",
					success: function(json){
						location.reload();
					},
				});
			}
			 else {
			}
		},
		
		// ヘッダーのタイトルとボタン
		header: {
			// title, prev, next, prevYear, nextYear, today
			right: 'agendaWeek,agendaDay',
			center: '',
			left: 'prev,next today'
		},
		//高さ
		height: 1675,
		// 初期表示ビュー
		defaultView: 'agendaDay',
		// 終日スロットを表示
		allDaySlot: true,
		// スロットの時間の書式
		axisFormat: 'H(:mm)',
		// スロットの分
		slotMinutes: 30,
		// 選択する時間間隔
		snapMinutes: 15,
		// スクロール開始時間
		firstHour: 7,
		//月曜日から
		firstDay: 1,
		// 時間の書式
		timeFormat: 'H(:mm)',
		// 最小時間
		minTime: '5:00:00',
		// 最大時間
		maxTime: '24:00:00',

		//以下日本語表示の設定
		// タイトルの書式
		titleFormat: {
			month: 'yyyy年 M月',
			week: 'yyyy年M月d日{ ～ }{[yyyy年]}{[M月]d日}', 
			day: "yyyy年M月d日'('ddd')'",
		},
		//more表示の書式
		dayPopoverFormat:'yyyy年 M月 d日[(]ddd[)]',
		// 月名称
		monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
		// 月略称
		monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
		// 曜日名称
		dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
		// 曜日略称
		dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
		// スロットの時間の書式
		axisFormat: 'H:mm',
		// 時間の書式
		timeFormat: 'H:mm',
		//終日スロットの名前
		allDayText: '終日',
		// ボタン文字列
		buttonText: {
			prev: '前',
			next: '次',
			prevYear: '前年',
			nextYear: '翌年',
			today: '今日に戻る',
			month: 'Month',
			week: 'Week',
			day: 'Day'
		}
	});
});

