$(document).ready(()=>{
	console.log("We are ready!!!!!");

	//Selector de ID
	$("#Rojo").css("background", "red")
						 .css("color", "white");	

	$("#Amarillo").css("background", "yellow")
						 .css("color", "green");

 	$("#Verde").css("background", "green")
						 .css("color", "white");


	 //Selectores de clases
	 var mi_clase = $('.zebra').css("padding", "5px");	 	

	 $('.sinBorde').click(function(){
	 	console.log("Click");
	 	$(this).addClass('zebra');
	 });


	 //Selectores de etiqueta
	 var parrafos = $('p').css("cursor", "pointer");

	 parrafos.click(function(){
	 	var elemento = $(this);
	 	if(!elemento.hasClass('grande')){
	 		elemento.addClass('grande');	
	 	}else 
	 	{
	 		elemento.removeClass('grande');
	 	}
	 });	

	 //Selectores de atributo
	 $('[title="Google"]').css('background', 'green');
	 $('[title="Facebook"]').css('background', 'yellow');

	 //Otros
	 //$('p, a').addClass('marge-superior');		

	 var resultado = $("#caja").find('.resaltado');	//var resultado = $("#caja .resaltado");

	 console.log(resultado);

});