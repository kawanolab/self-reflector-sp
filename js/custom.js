//�㕔�̃^�u
$(function(){
	$('.nav-info')
	.on('click', function(){
		$('.wrapper-headerinfo').slideToggle(400);
	});
});


//�{�^���̃G�t�F�N�g
$(function(){
	$('.first')
	.on('mouseenter', '.btn-action', function(event){
		event.preventDefault();
		$(this).find('img')
		.addClass('animate');
	})
	.on('mouseleave', '.btn-action', function(event){
		event.preventDefault();
		$(this).find('img')
		.removeClass('animate');
	});
});
$(function(){
	$('.second')
	.on('mouseenter', '.btn-action', function(event){
		event.preventDefault();
		$(this).find('img')
		.addClass('animate');
	})
	.on('mouseleave', '.btn-action', function(event){
		event.preventDefault();
		$(this).find('img')
		.removeClass('animate');
	});
});
$(function(){
	$('.third')
	.on('mouseenter', '.btn-action', function(event){
		event.preventDefault();
		$(this).find('img')
		.addClass('animate');
	})
	.on('mouseleave', '.btn-action', function(event){
		event.preventDefault();
		$(this).find('img')
		.removeClass('animate');
	});
});
$(function(){
	$('.fourth')
	.on('mouseenter', '.btn-action', function(event){
		event.preventDefault();
		$(this).find('img')
		.addClass('animate');
	})
	.on('mouseleave', '.btn-action', function(event){
		event.preventDefault();
		$(this).find('img')
		.removeClass('animate');
	});
});
$(function(){
	$('.fifth')
	.on('mouseenter', '.btn-action', function(event){
		event.preventDefault();
		$(this).find('img')
		.addClass('animate');
	})
	.on('mouseleave', '.btn-action', function(event){
		event.preventDefault();
		$(this).find('img')
		.removeClass('animate');
	});
});
$(function(){
	$('.sixth')
	.on('mouseenter', '.btn-action', function(event){
		event.preventDefault();
		$(this).find('img')
		.addClass('animate');
	})
	.on('mouseleave', '.btn-action', function(event){
		event.preventDefault();
		$(this).find('img')
		.removeClass('animate');
	});
});


//���[�_���E�B���h�E�̊J��
$(function(){
	//���[�_���E�B���h�E���J��
	function showModal(event) {
		event.preventDefault();
		
		var $shade = $('<div></div>');
		$shade
		.attr('id', 'shade')
		.on('click', hideModal);
		
		var $modalWin = $('#modalwin');
		var $window = $(window);
		var posX = ($window.width() - $modalWin.outerWidth()) / 2;
		var posY = ($window.height() - $modalWin.outerHeight()) / 2;
		
		var $this = $(this);
		var linkTo = $this.attr('href');
		var $target;
		var offset = 0;
		var pos = 0;
		if(linkTo != '#top'){
			$target = $(linkTo);
			offset = $target.data('offsettop');
			//pos = $target.offset().top - offset;
		}
		$('html,body').animate({scrollTop: pos}, 400);
		
		$modalWin
		.before($shade)
		.css({left: posX, top: posY})
		.removeClass('hide')
		.addClass('show')
		.on('click', 'button, .modal-close', function() {
			hideModal();
		});
	};
	
	//���[�_���E�B���h�E2���J��
	function showModal2(event) {
		event.preventDefault();
		
		var $shade = $('<div></div>');
		$shade
		.attr('id', 'shade')
		.on('click', hideModal2);
		
		var $modalWin2 = $('#modalwin2');
		var $window = $(window);
		var posX = ($window.width() - $modalWin2.outerWidth()) / 2;
		var posY = ($window.height() - $modalWin2.outerHeight()) / 2;
		
		var $this = $(this);
		var linkTo = $this.attr('href');
		var $target;
		var offset = 0;
		var pos = 0;
		if(linkTo != '#top'){
			$target = $(linkTo);
			offset = $target.data('offsettop');
			//pos = $target.offset().top - offset;
		}
		$('html,body').animate({scrollTop: pos}, 400);
		
		$modalWin2
		.before($shade)
		.css({left: posX, top: posY})
		.removeClass('hide')
		.addClass('show')
		.on('click', 'button, .modal-close', function() {
			hideModal2();
		});
	};
	
	//���[�_���E�B���h�E3���J��
	function showModal3(event) {
		event.preventDefault();
		
		var $shade = $('<div></div>');
		$shade
		.attr('id', 'shade')
		.on('click', hideModal3);
		
		var $modalWin3 = $('#modalwin3');
		var $window = $(window);
		var posX = ($window.width() - $modalWin3.outerWidth()) / 2;
		var posY = ($window.height() - $modalWin3.outerHeight()) / 2;
		
		var $this = $(this);
		var linkTo = $this.attr('href');
		var $target;
		var offset = 0;
		var pos = 0;
		if(linkTo != '#top'){
			$target = $(linkTo);
			offset = $target.data('offsettop');
			//pos = $target.offset().top - offset;
		}
		$('html,body').animate({scrollTop: pos}, 400);
		
		$modalWin3
		.before($shade)
		.css({left: posX, top: posY})
		.removeClass('hide')
		.addClass('show')
		.on('click', 'button, .modal-close', function() {
			hideModal3();
		});
	};
	
	//���[�_���E�B���h�E4���J��
	function showModal4(event) {
		event.preventDefault();
		
		var $shade = $('<div></div>');
		$shade
		.attr('id', 'shade')
		.on('click', hideModal4);
		
		var $modalWin4 = $('#modalwin4');
		var $window = $(window);
		var posX = ($window.width() - $modalWin4.outerWidth()) / 2;
		var posY = ($window.height() - $modalWin4.outerHeight()) / 2;
		
		var $this = $(this);
		var linkTo = $this.attr('href');
		var $target;
		var offset = 0;
		var pos = 0;
		if(linkTo != '#top'){
			$target = $(linkTo);
			offset = $target.data('offsettop');
			//pos = $target.offset().top - offset;
		}
		$('html,body').animate({scrollTop: pos}, 400);
		
		$modalWin4
		.before($shade)
		.css({left: posX, top: posY})
		.removeClass('hide')
		.addClass('show')
		.on('click', 'button, .modal-close', function() {
			hideModal4();
		});
	};
	
	//���[�_���E�B���h�E5���J��
	function showModal5(event) {
		event.preventDefault();
		
		var $shade = $('<div></div>');
		$shade
		.attr('id', 'shade')
		.on('click', hideModal5);
		
		var $modalWin5 = $('#modalwin5');
		var $window = $(window);
		var posX = ($window.width() - $modalWin5.outerWidth()) / 2;
		var posY = ($window.height() - $modalWin5.outerHeight()) / 2;
		
		var $this = $(this);
		var linkTo = $this.attr('href');
		var $target;
		var offset = 0;
		var pos = 0;
		if(linkTo != '#top'){
			$target = $(linkTo);
			offset = $target.data('offsettop');
			//pos = $target.offset().top - offset;
		}
		$('html,body').animate({scrollTop: pos}, 400);
		
		$modalWin5
		.before($shade)
		.css({left: posX, top: posY})
		.removeClass('hide')
		.addClass('show')
		.on('click', 'button, .modal-close', function() {
			hideModal5();
		});
	};
	
	//���[�_���E�B���h�E6���J��
	function showModal6(event) {
		event.preventDefault();
		
		var $shade = $('<div></div>');
		$shade
		.attr('id', 'shade')
		.on('click', hideModal6);
		
		var $modalWin6 = $('#modalwin6');
		var $window = $(window);
		var posX = ($window.width() - $modalWin6.outerWidth()) / 2;
		var posY = ($window.height() - $modalWin6.outerHeight()) / 2;
		
		var $this = $(this);
		var linkTo = $this.attr('href');
		var $target;
		var offset = 0;
		var pos = 0;
		if(linkTo != '#top'){
			$target = $(linkTo);
			offset = $target.data('offsettop');
			//pos = $target.offset().top - offset;
		}
		$('html,body').animate({scrollTop: pos}, 400);
		
		$modalWin6
		.before($shade)
		.css({left: posX, top: posY})
		.removeClass('hide')
		.addClass('show')
		.on('click', 'button, .modal-close', function() {
			hideModal6();
		});
	};
	
	//���[�_���E�B���h�E�����
	function hideModal() {
		$('#shade').remove();
		$('#modalwin')
		.removeClass('show')
		.addClass('hide');
	};
	//���[�_���E�B���h�E2�����
		function hideModal2() {
		$('#shade').remove();
		$('#modalwin2')
		.removeClass('show')
		.addClass('hide');
	};
	//���[�_���E�B���h�E3�����
		function hideModal3() {
		$('#shade').remove();
		$('#modalwin3')
		.removeClass('show')
		.addClass('hide');
	};
	//���[�_���E�B���h�E4�����
		function hideModal4() {
		$('#shade').remove();
		$('#modalwin4')
		.removeClass('show')
		.addClass('hide');
	};
	//���[�_���E�B���h�E5�����
		function hideModal5() {
		$('#shade').remove();
		$('#modalwin5')
		.removeClass('show')
		.addClass('hide');
	};
	//���[�_���E�B���h�E6�����
		function hideModal6() {
		$('#shade').remove();
		$('#modalwin6')
		.removeClass('show')
		.addClass('hide');
	};
	
	$('.show-modal').on('click', showModal);
	$('.show-modal2').on('click', showModal2);
	$('.show-modal3').on('click', showModal3);
	$('.show-modal4').on('click', showModal4);
	$('.show-modal5').on('click', showModal5);
	$('.show-modal6').on('click', showModal6);
});


/* �X�N���[�����ăy�[�W�g�b�v�ɖ߂� */
$(function(){
	$('a.scroll-link').on('click', function(event){
		event.preventDefault();
		
		var $this = $(this);
		var linkTo = $this.attr('href');
		var $target;
		var offset = 0;
		var pos = 0;
		if(linkTo != '#top'){
			$target = $(linkTo);
			offset = $target.data('offsettop');
			pos = $target.offset().top - offset;
		}
		$('html,body').animate({scrollTop: pos}, 400);
	});
});
