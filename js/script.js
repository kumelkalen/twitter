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

}







