$(document).ready(()=>{
	
	//Mouse Over - Mouse Out
	var caja = $("#caja");

	/*
	caja.mouseover(function(){
		$(this).css('background', 'red');
	});

	caja.mouseout(function(){
		$(this).css('background', 'green');
	});*/


	function cambiaRojo(){
		$(this).css('background', 'red');
	}

	function cambiaVerde(){
		$(this).css('background', 'green');
	}

	//Hover
	caja.hover(cambiaRojo, cambiaVerde);

	//Click - DobleClick
	caja.click(function(){
		$(this).css('background', 'blue')
				.css('color', 'white');
	});

	caja.dblclick(function(){
		$(this).css('background', 'pink')
				.css('color', 'yellow');
	});

	//Focus - Blur
	var nombre =  $("#nombre");
	var datos = $("#datos");
	nombre.focus(function(){
		nombre.css('border', '2px solid green');
	});

	nombre.blur(function(){
		nombre.css('border', '1px solid black');

		datos.text(nombre.val()).show();
	});

	//Mousedown - Mouseup
	datos.mousedown(function(){
		datos.css('border-color', '#ccc');
	});

	datos.mouseup(function(){
		datos.css('border-color', 'black');
	});

	//Mousemove
	$(document).mousemove(function(){
		console.log("X-> " + event.clientX + " - " + " Y-> " + event.clientY);
		$('body').css('cursor', 'none');
		$("#sigueme").css('left', event.clientX)
					 .css('top', event.clientY);
	});
});