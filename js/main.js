

var usuarios=[];
function pinta(){
	let expNombre= "/^[A-Za-z .'-]+$/";
	let expMail="/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/";
	

	let nombre=$("#nombre").val();//declaro variables que solo se van a generar cuando se invoque la funcion 
	//y que guarde los datos del usuario mediante el metodo .val()
	if ( !isNaN(nombre)||nombre=="") {
		alert('el primer campo solo recibe letras');
		return false;
	}else
		myTABLE;
	

	let direccion=$("#direccion").val();
	

	let telefono=$("#telefono").val();
	if ( isNaN(telefono)||telefono=="") {
		alert('el campo solo recibe numeros');
		return false;
	}else
		myTABLE;
	
	
	
	usuarios.push({nombre,direccion,telefono});//mediante este metodo, le pase los objetos a insertar
												//en el arreglo, con los corchetes asumo que cada insert es un nuevo objeto
		var myTABLE= $("#mytable-body").append(//le paso un identificador html mediante jquery para poer manipular ese div 
		//en espeifico 
		"<tr>"+ 
		"<td >"+nombre+"</td>"+"<td>"+direccion+"</td>"+"<td>"+telefono+"</td>"+ 
		"</tr>"

		);

		$("#nombre").closest(".form-horizontal").find('input[type="text"],input[type="tel"]').val("");//metodo para limpiar los input del html

	};


	var getServer=function(){
		$.ajax({
			url:"https://geekshubs-b97d3.firebaseio.com/users.json",
			type:"GET",
			success:function(response){
				for(var cachaObjetos in response){
					var nombreJson=(response[cachaObjetos].nombre);
					var edadJson=(response[cachaObjetos].edad);
					var correoJson=(response[cachaObjetos].correo);

						$("#mytable-body").append(//le paso un identificador html mediante jquery para poer manipular ese div 
		//en especifico 
		"<tr>"+ 
		"<td >"+nombreJson+"</td>"+"<td>"+correoJson+"</td>"+"<td>"+edadJson+"</td>"+ 
		"</tr>"

		);


				}
				
			},
			error:function(response){
				console.log(response,'errorServidor');
			}
		});
	}




