angular.module('ionicApp')

.controller('crearEventoCtrl', ['$scope', '$state', 'servicioServidor',  '$rootScope', 'SurfFactoria','$filter', '$ionicScrollDelegate', function(scope, $state, servicioServidor,  $rootScope, SurfFactoria, $filter, $ionicScrollDelegate){
	
	scope.escondeFormulario=false;
	scope.muestraEventos=true;
	scope.jsonEventos;
	scope.jsonMensajes;
	scope.descripcionEv;
	scope.evento = {};
	scope.grouFecha=[{},{},{}];
	scope.temp=[];
	scope.j=0;
	scope.k=0;
	scope.cont=0;
	scope.mostrarEvento=function(){
		servicioServidor.verEventos().then(
			//Conectado correctamente
			function(data){
				
				scope.jsonEventos = data;
				//console.log(scope.jsonEventos);
				scope.crearGruposfecha();
		});
	}


	scope.mostrarEvento();
	
	scope.mostrarMensajes=function(){
		servicioServidor.verMensajes().then(
			//Conectado correctamente
			function(data){			
				scope.jsonMensajes = data;
				//console.log(scope.jsonEventos);
		});
	}
	scope.mostrarMensajes();

	scope.crearGruposfecha = function(){
		if(scope.jsonEventos!=undefined){
			scope.temp=scope.jsonEventos[0].fecha;
			
				for(i=0;i<=scope.jsonEventos.length-1;i++){

						scope.mes= scope.jsonEventos[i].fecha.substring(5, 7);
						if(scope.mes=="01"){
							scope.mes="Gener";
						}else if(scope.mes=="02"){
							scope.mes="Febrer";
						}else if(scope.mes=="03"){
							scope.mes="Març";
						}else if(scope.mes=="04"){
							scope.mes="Abril";
						}else if(scope.mes=="05"){
							scope.mes="Maig";
						}else if(scope.mes=="06"){
							scope.mes="Juny";
						}else if(scope.mes=="07"){
							scope.mes="Juliol";
						}else if(scope.mes=="08"){
							scope.mes="Agost";
						}else if(scope.mes=="09"){
							scope.mes="Setembre";
						}else if(scope.mes=="10"){
							scope.mes="Octubre";
						}else if(scope.mes=="11"){
							scope.mes="Novembre";
						}else if(scope.mes=="12"){
							scope.mes="Desembre";
						}
						scope.anyo= scope.jsonEventos[i].fecha.substring(0, 4);
						scope.dia = scope.jsonEventos[i].fecha.substring(8, 10);
						scope.jsonEventos[i].fecha=scope.dia + " de " + scope.mes + " de " + scope.anyo;

					
				}		
		}	
		console.log(scope.grouFecha);		
	}

		

	scope.afegirEvento=function(){
		 $ionicScrollDelegate.scrollTo(0, 0);
		scope.escondeFormulario=true;
		scope.muestraEventos=false;
		//$ionicScrollDelegate.scrollBy(0, 0, true);

		
	}
	scope.volverLista=function(){
		scope.escondeFormulario=false;
		scope.muestraEventos=true;
	}
	scope.crearEvento=function(evento){
		console.log(evento);
		var fechaTemp = $filter('date')(evento.fecha.inputDate,'dd-MM-yyyy');
		servicioServidor.cargoEvento(evento.nombre, fechaTemp, evento.descripcion, evento.lugar, evento.organizador).then(
			//Conectado correctamente
			function(data){
					alert("L"+"'"+"El evento ha sido añadido");

		});
		
		scope.escondeFormulario=false;
		scope.muestraEventos=true;
	}
	
	scope.descEvento=function(index){
		for(i=0;i<scope.jsonMensajes.length;i++){
			if(scope.jsonMensajes[i].numevent==index){
				SurfFactoria.mensajes.push(scope.jsonMensajes[i]);
			}
		}
		for(i=0;i<scope.jsonEventos.length;i++){
			if(scope.jsonEventos[i].codigo==index){
				SurfFactoria.descripEvento = scope.jsonEventos[i];
				SurfFactoria.numevent=scope.jsonEventos[i].codigo;
				console.log(scope.descripcionEv);
				$state.go('maineventdesc.descripcionEventos');					
			}
		}


	}
	scope.evento.fecha = {
      titleLabel: 'Calendario',  //Optional
      todayLabel: 'Hoy',  //Optional
      closeLabel: 'Salir',  //Optional
      setLabel: 'Fijar',  //Optional
      setButtonType : 'button-assertive',  //Optional
      todayButtonType : 'button-assertive',  //Optional
      closeButtonType : 'button-assertive',  //Optional
      inputDate: new Date(),  //Optional
      mondayFirst: true,  //Optional
      disabledDates: disabledDates, //Optional
      weekDaysList: weekDaysList, //Optional
      monthList: monthList, //Optional
      templateType: 'popup', //Optional
      showTodayButton: 'true', //Optional
      modalHeaderColor: 'bar-positive', //Optional
      modalFooterColor: 'bar-positive', //Optional
      from: new Date(2012, 8, 2), //Optional
      to: new Date(2018, 8, 25),  //Optional
      callback: function (val) {  //Mandatory
        datePickerCallback(val);
      },
      dateFormat: 'dd-MM-yyyy', //Optional
      closeOnSelect: false, //Optional
    };
	var disabledDates = [
      new Date(1437719836326),
      new Date(),
      new Date(2015, 7, 10), //months are 0-based, this is August, 10th!
      new Date('Wednesday, August 12, 2015'), //Works with any valid Date formats like long format
      new Date("08-14-2015"), //Short format
      new Date(1439676000000) //UNIX format
    ];
	var weekDaysList = ["Dl", "Dm", "Dx", "Dj", "Dv", "Ds","Dm"];
	var monthList = ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"];
	var datePickerCallback = function (val) {
		if (typeof(val) === 'undefined') {
			console.log('No date selected');
		} 
		else {
			console.log('Selected date is : ', val);
			scope.evento.fecha.inputDate = val;
		}
	};

	if(SurfFactoria.Language == ""){		

  			$translate.use("ES");

		}else if(SurfFactoria.Language == "EN"){
   			$translate.use("EN");
   		  		
		}else if(SurfFactoria.Language == "CAT"){
			
  			$translate.use("CAT");
  		 			
		}else if(SurfFactoria.Language == "ES"){
            
   			$translate.use("ES");

		}
}])