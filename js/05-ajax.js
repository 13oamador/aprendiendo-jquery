$(document).ready(function(){

	//LOAD EN AJAX
	//$("#datos").load("https://reqres.in/");

	//GET 
	$.get("https://reqres.in/api/users", {page: 1}, function(response){
		response.data.forEach((elemento, index)=>{
			$("#datos").append("<p>" + elemento.first_name + " " + elemento.last_name + "</p>");
		});
	});

	//POST	
	$("#formulario").submit(function(e){
		
		e.preventDefault();

		var usuario = {
			nombre: $('input[name="name"]').val(),
			web: $('input[name="web"]').val()
		};

		console.log(usuario);

		/*
		$.post($(this).attr("action"), usuario, function(response){
			console.log(response);		
		}).done(function(){
			alert("Usuario " + usuario.nombre + " añadido satisfactoriamente");
		});		
		*/


		$.ajax({
			type: 'POST',
			/*dataType: 'json',
			contentType: 'application/json', */
			url: $(this).attr("action"),
			data: usuario,
			beforeSend: function(){
				console.log("Enviando....");
			},
			success: function(response){
				console.log(response);
			},
			error: function(){
				console.log("A occurrido un error");
			},
			setTimeout: 10000
		});

		return false;
	});


	//$.ajax
});