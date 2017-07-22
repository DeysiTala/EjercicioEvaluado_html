var numeroAsiento = [];


var asientos = document.getElementsByTagName('td');
for (var i = 0; i < asientos.length; i++) {
    asientos[i].addEventListener('click',redirect,false);
}
function redirect(event){
    
    var numeroAsiento=(event.target.textContent);
    var mostrando=document.getElementById("mostrar");
    mostrando.innerHTML=numeroAsiento;
    (event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#F8ED50';
    document.getElementById("mostrar").innerHTML= "<strong>" + "El Numero de Aiento es: " + "</strong>" + "</br>" + (event.target.textContent);
}
 
 
function reservar(){
 var nombres = document.getElementById("Name").value;
 var apellido = document.getElementById("LastName").value;
 var dnis = document.getElementById("dni").value;
 var asientito=document.getElementById("mostrar").textContent;
 document.getElementById("datos").innerHTML= "<strong>"+"Nombre y Apellidos: "+"</strong>" + nombres +" " + apellido + "<br>"
 + "N° Dni: "+ dnis;
 
 //numeroAsiento = document.getElementById("mostrar").textContent;
 
 var datitos2 = new datitos(nombres,apellido,dnis,asientito)
 numeroAsiento.push(datitos2);
  //console.log(numeroAsiento);
  }

function datitos(nombres,apellido,dnis,numeroAsientos){

  this.nombres = nombres,
  this.apellido = apellido,
  this.dnis= dnis,
  this.nAsiento=numeroAsientos
 }

function limpiar(){

	document.getElementById("Name").value = "";
	document.getElementById("LastName").value = "";
	document.getElementById("dni").value = "";
    document.getElementById("datos").innerHTML = "";
    document.getElementById("tdatos").innerHTML = "";
	
}


function CancelarReserva(){


  alert("Esta seguro de cancelar reserva ");
}

function listar(){
var html = "";
 for (var i =0; i<numeroAsiento.length;i++){
  var datos = numeroAsiento[i];
  //alert (dato_1);
  var salida = "<div>" + 
    "Nombre y Apellidos: " +  datos.nombres +" "+  datos.apellido + "<br>" + 
    "N° de Dni: " +  datos.dnis  +"<br>"+  datos.nAsiento + 
      "</div>";
  html += salida;
 }
document.getElementById("tdatos").innerHTML= html;
}

function buscarDni(dnis){
 


  
}
