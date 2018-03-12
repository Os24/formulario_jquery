function pinta(){
	let nombre=$("#nombre").val();
	console.log(nombre);
	let direccion=$("#direccion").val();
	console.log(direccion);
	let telefono=$("#telefono").val();
	console.log(telefono);

	$("#mytable-body").append(
			"<tr>"+ 
			"<td >"+nombre+"</td>"+"<td>"+direccion+"</td>"+"<td>"+telefono+"</td>"+ 
					 			"</tr>"
					 		 


		);
}
