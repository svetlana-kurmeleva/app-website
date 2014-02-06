var $items = $('.items img'); // access to all items img

var switchItems = function (current, incoming) { //function is reusable code
//next -select all items $items, eq - allows to pick number , 250 duration
	$items.eq(incoming).attr('data-state', 'incoming').fadeIn(250, function () {
		$items.eq(current).hide().attr('data-state', '');
		$items.eq(incoming).attr('data-state', 'current');
		});
		
};

$items.filter(':not([data-state="current"])').hide(); //hides all but current
// next - target button and add click
$('.next').on('click', function () { 
	
	var current = $items.filter('[data-state="current"]').index(); 
	var next = current + 1;
	
	if (next > $items.length - 1) {
			next = 0;
			
	}
	
	
	//console.log(current);
	switchItems(current, next); //execution of function 
	
});


$('.prev').on('click', function () { 
	
	var current = $items.filter('[data-state="current"]').index(); 
	var prev = current - 1;
	
	/*if (prev < 0) {
			prev = $items.length - 1;
			
	}*/
	
	
	//console.log(current);
	switchItems(current, prev); //execution of function 
	
});






var $dipper = $('.dipper');
$('.dipper-section').waypoint(function () {
	$dipper.addClass('js-dipper-animate');
}, { offset: '60%' });











