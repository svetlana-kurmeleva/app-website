var $dialog = $('#video');
var $placeholder = $('#video-placeholder');

 dialogPolyfill.registerDialog($dialog.get(0));


$('#btn-open').on('click', function () {
	$placeholder.html('<iframe src="http://player.vimeo.com/video/85405690?autoplay=1" width="100%" height="auto" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
	
	
	//console.log('clicked');
	/*.get() returns the native javascript element for us to access When using jQuery we don't have access to the original html 
	element directly, we are using Jquery to manipulate them. Example:
	$dialog.show() will call jquery's 'show()' function
	$dialog.get(0).show() -will call javascript's native show'()' function	
	*/
	$dialog.get(0).showModal();
	//show() allows multiple dialogs can click
	//showModal() single dialog back fades nothing is clickable behind
	
});

$('#btn-close').on('click', function () {
	
	$dialog.get(0).close();
	$placeholder.html('');
	
});

