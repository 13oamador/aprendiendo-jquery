$(document).ready(function(){

	//MOVER ELEMENTO POR LA PAGINA
	$(".elemento").draggable()

	//RESIZABLE
	$(".elemento").resizable();

	//SELECTABLE - SORTABLE
	//$(".listaSeleccionable").selectable();
	$(".listaSeleccionable").sortable({
		update: function(event, ui){
			console.log("Lista updated");
		}
	});

	//DROPPABLE
	$("#elemento-movido").draggable();
	$("#area").droppable({
		drop: function(){
			console.log("Movio el elemento en el area");
		}
	});


	//EFECTOS
	$("#mostrar").click(function(){
		$(".caja-efectos").toggle("explode");
	});

	//TOOLTIP
	$('a').tooltip();

	//POPUP
	$("#lanzar").click(function(){
		$("#popup").dialog();	
	});

	//DATEPICKER
	$("#calendario").datepicker();

	//TABS
	$("#pestanas").tabs();
	
});