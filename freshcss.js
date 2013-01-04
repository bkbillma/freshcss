$(document).ready(function(){
	setInterval(function(){
		rand = Math.ceil((Math.random()*100000)+1);
		$('head').append('<link class="maincss" type="text/css" rel="stylesheet" href="/css/main.css?'+rand+'" />');
		if($('.maincss').length > 2){
			$('.maincss:first').remove();
		}
	},2000);
});