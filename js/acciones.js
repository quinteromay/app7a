// JavaScript Document

$(document).ready(function(e) {
	document.addEventListener("deviceready",function(){
		$('#Izquierda').on("swipeleft", function(){
			navigator.notafication.alert("Deslizó hacia la Izquierda",function(){"aplicacion 7","ok"});
		});//cerrar deslizar Izquierda
		$('#Derecha').on("swiperight", function(){
			navigator.notafication.confirm("¿Que quieres hacer?",function(op){
				switch(op)
				{
					case 1:
					navigator.notification.beep(1);
					break;
					
					case 2:
					navigator.notification.vibrate(3000);
					break;
				}
			},"aplicacion 7","Beepear,Vibrar,Cancelar");
		});//cerrar deslizar Derecha
	},false); //cerrar deviceready
});//cerrar document