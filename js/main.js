

var usuarios=[];
function pinta(){

	let nombre=$("#nombre").val();//declaro variables que solo se van a generar cuando se invoque la funcion 
	//y que guarde los datos del usuario mediante el metodo .val()
	console.log(nombre);
	let direccion=$("#direccion").val();
	console.log(direccion);
	let telefono=$("#telefono").val();
	console.log(telefono);
	
	usuarios.push({nombre,direccion,telefono});//mediante este metodo, le pase los objetos a insertar
												//en el arreglo, con los corchetes asumo que cada insert es un nuevo objeto
		$("#mytable-body").append(//le paso un identificador html mediante jquery para poer manipular ese div 
		//en espeifico 
		"<tr>"+ 
		"<td >"+nombre+"</td>"+"<td>"+direccion+"</td>"+"<td>"+telefono+"</td>"+ 
		"</tr>"

		);

		$("#nombre").closest(".form-horizontal").find("input[type=text],input[type=tel]").val("");

	};



	$("#myButton3").click(function() {
		var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		$.getJSON(flickerAPI,usuarios,success);
	});

function success(usuarios){
	alert("The connection was successful");
}