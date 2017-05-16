function agregar(){
	//Limpio el texto ingresado en tarea
	var tareas = document.getElementById("tarea").value;
	document.getElementById("tarea").value = "";
		
	//Llamo al contenedor
	var cont = document.getElementById("contenedor");

	//Validar que no se ingrese una tarea vacía
	if(tareas==null||tareas.length==0){
		alert("¡Error! Debe ingresar tarea");
		return false;
	}

	//Nuevos nodos elementos (div,span y creamos un text node tarea)
	var nuevasTareas = document.createElement("div");
	var elementoContenedor = document.createElement("span"); 
	var textoNuevaTarea = document.createTextNode(tareas);

	//Les asignamos padres a los elementos nuevos
	elementoContenedor.appendChild(textoNuevaTarea);
	nuevasTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevasTareas);

	//Checkbox e íconos
	var chck = document.createElement("input");
	chck.type = "checkbox";
	chck.setAttribute("class","check");
	
	var basura = document.createElement("span");
	basura.classList.add("fa","fa-trash-o");
	
	var cora = document.createElement("span");
	cora.classList.add("fa","fa-heart");

	//Asignamos padres
	nuevasTareas.appendChild(chck);
	nuevasTareas.appendChild(basura);
	nuevasTareas.appendChild(cora);

	//Evento
	chck.addEventListener("click",function(){
		elementoContenedor.classList.toggle("tachado");
	})
	
	//Evento remover ícono
	basura.addEventListener("click",function(){
		cont.removeChild(nuevasTareas);
	})

	//Evento para el corazón
	cora.addEventListener("click",function(){
		cora.classList.toggle("red");
	})


}







