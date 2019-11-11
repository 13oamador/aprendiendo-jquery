$(document).ready(function(){
	
	var caja = $("#caja");
	
	$("#mostrar").hide();		

	$("#mostrar").click(function(){
		$(this).hide();
		$("#ocultar").show();		
		//caja.fadeIn('slow');
		caja.fadeTo('slow', 1);
	});

	$("#ocultar").click(function(){
		$(this).hide();
		$("#mostrar").show();	
		//caja.fadeOut('slow');
		caja.fadeTo('slow', 0.2);
	});

	$("#todoenuno").click(function(){
		caja.fadeToggle('fast');
	});	

	$("#animame").click(function(){
		caja.animate({ 
			marginLeft: '500px',
			fontSize: '40px',
			height: '110px'
			}, 'slow')
		.animate({
			borderRadius: '900px',
			marginTop: '50px'
		}, 'slow')
		.animate({
			borderRadius: '0px',
			marginLeft: '0px'
		}, 'slow')
		.animate({
			borderRadius: '0px',
			marginTop: '15px',
			height: '50px',
			fontSize: '19px',
			fontFamily: 'Verdana'
		}, 'slow');
	});
});