

var usuarios=[];
function pinta(){
	let expNombre= "/^[A-Za-z .'-]+$/";
	let expMail="/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/";
	

	let nombre=$("#nombre").val();//declaro variables que solo se van a generar cuando se invoque la funcion 
	//y que guarde los datos del usuario mediante el metodo .val()
	if (nombre == "" ) {
		console.log('el primer campo esta vacio');
		return false;
	}else
		return true;
	

	let direccion=$("#direccion").val();
	console.log(direccion);

	let telefono=$("#telefono").val();
	
	
	
	usuarios.push({nombre,direccion,telefono});//mediante este metodo, le pase los objetos a insertar
												//en el arreglo, con los corchetes asumo que cada insert es un nuevo objeto
		$("#mytable-body").append(//le paso un identificador html mediante jquery para poer manipular ese div 
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
				console.log(response,'resServidor');
			},
			error:function(response){
				console.log(response,'errorServidor');
			}
		});
	}




