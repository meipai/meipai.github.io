$(function(){
	$('.img-wrap a img').on('load',function(){
		$(this).parent().css({'background-image':'url('+$(this).attr('src')+')'}).attr('href',$(this).attr('src'));
	});
});