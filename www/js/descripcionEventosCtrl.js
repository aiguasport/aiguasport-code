angular.module('ionicApp')


.controller('descripcionEventosCtrl', function($scope, $filter, $state, servicioServidor,  $rootScope, SurfFactoria, $window, $ionicScrollDelegate){
	$scope.descrip;
	$scope.mensajes=[];
	$scope.limitMensaj=1;
	$scope.descrip = SurfFactoria.descripEvento;
	$scope.numev=SurfFactoria.numevent;
	$scope.mensajes=SurfFactoria.mensajes;
	SurfFactoria.mensajes=[];
	$scope.verDescrip=false;
	$scope.decEvshow=true;
	$scope.chatshow=false;
	$scope.btnPulsadoEv=true;
	$scope.btnPulsadoMsj=false;
	$scope.mensajNuevos=0;
	$scope.diasRestar=0;
	$scope.fechaGrupoMnsj=[];
	$scope.posicionScrol=1000;
	$scope.contMnsjs=0;
	$scope.mensajesNuevos=0;
	$scope.fechHoy = function (){
		var hoy = new Date();
		hoy.setHours(0,0,0,0);
		$scope.fechaFiltrHoy=hoy;
		var dd = hoy.getDate();
		var mm = hoy.getMonth()+1; //hoy es 0!
		var yyyy = hoy.getFullYear();

		if(dd<10) {
			dd='0'+dd
		} 

		if(mm<10) {
			mm='0'+mm
		} 
		$scope.fechaFiltr= dd+'-'+mm+'-'+yyyy;
		$scope.fechaFiltrd= dd;
		$scope.fechaFiltrm= mm;
		$scope.fechaFiltry= yyyy;
		$scope.fechaHoy=$scope.fechaFiltr;	
	}
	$scope.fechHoy();

	$scope.cumpleNomus=SurfFactoria.nombreusu;
	
	$scope.irDescEv = function (){
		$scope.mensajesNuevos=0;
		$scope.decEvshow=true;
		$scope.chatshow=false;
		$scope.btnPulsadoEv=true;
		$scope.btnPulsadoMsj=false;
		$ionicScrollDelegate.scrollTo(0, 0);
	}
	$scope.irChat = function (){
		$scope.mensajesNuevos=0;
		$scope.decEvshow=false;
		$scope.chatshow=true;
		$scope.btnPulsadoEv=false;
		$scope.btnPulsadoMsj=true;
		servicioServidor.verMensajes().then(
				//Conectado correctamente
				function(data){			
					$scope.jsonMensajes = data;
					//console.log(scope.jsonEventos);
					$scope.crearArrayMensajes();
			});
		
		

		//Vemos los mensajes de este evento
		$scope.crearArrayMensajes = function (){
			for(i=0;i<$scope.jsonMensajes.length;i++){
				if($scope.jsonMensajes[i].numevent==$scope.numev){
					var today = new Date($scope.jsonMensajes[i].fecha);
					var dd = today.getDate();
					var mm = today.getMonth()+1; //hoy es 0!
					var yyyy = today.getFullYear();
					var hh = today.getHours(); //hoy es 0!
					var min = today.getMinutes();
					today.setHours(0,0,0,0);
					$scope.jsonMensajes[i].fechSinFormato= today;
					$scope.jsonMensajes[i].dia= dd;
					$scope.jsonMensajes[i].mes= mm;
					$scope.jsonMensajes[i].anyo= yyyy;					

					if(dd<10) {
						dd='0'+dd;
					} 

					if(mm<10) {
						mm='0'+mm;
					} 
					if(min<10) {
						min='0'+min;
					} 

					if(hh<10) {
						hh='0'+hh;
					} 
					

					$scope.jsonMensajes[i].fecha= dd+'-'+mm+'-'+yyyy;
					$scope.hora=hh+':'+min;
					$scope.jsonMensajes[i].hora=$scope.hora;
					SurfFactoria.mensajes.push($scope.jsonMensajes[i]/*, $scope.hora*/);
					$scope.mensajNuevos++;
					$scope.posicionScrol=$scope.posicionScrol+500;
					$ionicScrollDelegate.scrollTo(0, $scope.posicionScrol);
					/*if($scope.jsonMensajes[i].nombreus==SurfFactoria.nombreusu){
					}*/
				}
			}
			$scope.mensajes=SurfFactoria.mensajes;
			SurfFactoria.mensajes=[];
		}
		$scope.posicionScrol=$scope.posicionScrol+500;
		$ionicScrollDelegate.scrollTo(0, $scope.posicionScrol);
	}
	$scope.cambiarLimot = function (){
		$scope.limitMensaj=$scope.limitMensaj+5;
	}
	$scope.verDescrEv = function (){
		if($scope.verDescrip==true){
			$scope.verDescrip=false;
		}else{
			$scope.verDescrip=true;
		}
		
	}

	$scope.localizarEvento=function(direccion){
		SurfFactoria.tempDirevent=SurfFactoria.descripEvento.lugar;
		$state.go('mainmap.map');
	}
	
	$scope.enviarMensaje = function (msg, numevento){
		
		var nomusuario = SurfFactoria.nombreusu;
		//Enviamos mensajes nuevos
		servicioServidor.cargoMensaje(numevento, nomusuario, msg.message).then(
			//Conectado correctamente
			function(data){
			$scope.descargarMsgServid();
		});
		document.getElementById("output").value = "";
		
		//descargamos mensajes desde servidor
		$scope.descargarMsgServid = function (){

			servicioServidor.verMensajes().then(
				//Conectado correctamente
				function(data){			
					$scope.jsonMensajes = data;
					//console.log(scope.jsonEventos);
					$scope.crearArrayMensajes();
			});
		
		}

		//Vemos los mensajes de este evento
		$scope.crearArrayMensajes = function (){
			for(i=0;i<$scope.jsonMensajes.length;i++){
				if($scope.jsonMensajes[i].numevent==numevento){
					var today = new Date($scope.jsonMensajes[i].fecha);
					var dd = today.getDate();
					var mm = today.getMonth()+1; //hoy es 0!
					var yyyy = today.getFullYear();
					var hh = today.getHours(); //hoy es 0!
					var min = today.getMinutes();
					today.setHours(0,0,0,0);
					$scope.jsonMensajes[i].fechSinFormato= today;
					$scope.jsonMensajes[i].dia= dd;
					$scope.jsonMensajes[i].mes= mm;
					$scope.jsonMensajes[i].anyo= yyyy;
					if(dd<10) {
						dd='0'+dd
					} 

					if(mm<10) {
						mm='0'+mm
					} 
					if(min<10) {
						min='0'+min;
					} 

					if(hh<10) {
						hh='0'+hh;
					} 

					$scope.jsonMensajes[i].fecha= dd+'-'+mm+'-'+yyyy;
					$scope.hora=hh+':'+min;
					$scope.jsonMensajes[i].hora=$scope.hora;
					SurfFactoria.mensajes.push($scope.jsonMensajes[i]/*, $scope.hora*/);
					$scope.posicionScrol=$scope.posicionScrol+500;
					$ionicScrollDelegate.scrollTo(0, $scope.posicionScrol);
					/*if(SurfFactoria.mensajes[i].nombreus==SurfFactoria.nombreusu){
						document.getElementById("cajaMsg").style.backgroundColor="red";
					}*/
					
				}
			}
			$scope.mensajes=SurfFactoria.mensajes;
			SurfFactoria.mensajes=[];
			
		}
		//document.getElementById("cajaMsg").style.marginLeft="20%";
	
	}
	setInterval(function(){
		//descargamos mensajes desde servidor
		

			servicioServidor.verMensajes().then(
				//Conectado correctamente
				function(data){			
					$scope.jsonMensajes = data;
					//console.log(scope.jsonEventos);
					$scope.crearArrayMensajes();
			});
		
		

		//Vemos los mensajes de este evento
		$scope.crearArrayMensajes = function (){
			for(i=0;i<$scope.jsonMensajes.length;i++){
				if($scope.jsonMensajes[i].numevent==$scope.numev){
					var today = new Date($scope.jsonMensajes[i].fecha);
					var dd = today.getDate();
					var mm = today.getMonth()+1; //hoy es 0!
					var yyyy = today.getFullYear();
					var hh = today.getHours(); //hoy es 0!
					var min = today.getMinutes();
					today.setHours(0,0,0,0);
					$scope.jsonMensajes[i].fechSinFormato= today;
					$scope.jsonMensajes[i].dia= dd;
					$scope.jsonMensajes[i].mes= mm;
					$scope.jsonMensajes[i].anyo= yyyy;						

					if(dd<10) {
						dd='0'+dd
					} 

					if(mm<10) {
						mm='0'+mm
					} 
					if(min<10) {
						min='0'+min;
					} 

					if(hh<10) {
						hh='0'+hh;
					} 

			
					$scope.jsonMensajes[i].fecha= dd+'-'+mm+'-'+yyyy;
					$scope.hora=hh+':'+min;
					$scope.jsonMensajes[i].hora=$scope.hora;
					
						$scope.contMnsjs++;
						SurfFactoria.mensajes.push($scope.jsonMensajes[i]/*, $scope.hora*/);
					
					

					
					$scope.distanceFromTop =  $ionicScrollDelegate.getScrollPosition().top;
					
					$scope.currentTop = $ionicScrollDelegate.$getByHandle('scroller').getScrollPosition().top;
					
					$scope.maxScrollableDistanceFromTop = $ionicScrollDelegate.$getByHandle('scroller').getScrollView().__maxScrollTop;
					//console.log($scope.maxScrollableDistanceFromTop);
					if($scope.currentTop >= $scope.maxScrollableDistanceFromTop){
						$ionicScrollDelegate.scrollTo(0, $scope.posicionScrol);
						//console.log($scope.posicionScrol);
					}
					
					/*if($scope.jsonMensajes[i].nombreus==SurfFactoria.nombreusu){
					}*/
				}
			}
			$scope.mensajes=SurfFactoria.mensajes;
			SurfFactoria.mensajes=[];	

			if($scope.tempMnsjs<$scope.contMnsjs){
				$scope.posicionScrol=$scope.posicionScrol+500;
				console.log($scope.posicionScrol);	
				$scope.mensajesNuevos++/*=$scope.contMnsjs-$scope.tempMnsjs*/;
			}
			
			$scope.tempMnsjs=$scope.contMnsjs;
			
			$scope.contMnsjs=0;
			
		}}, 5000);
	/*Ver más mensajes*/
	$scope.verMasMsjs = function (){
		$scope.diasRestar=$scope.diasRestar+1;
		$scope.posicionScrol=$scope.posicionScrol+500;
		var hoy = new Date();
		hoy.setDate(hoy.getDate()-$scope.diasRestar);
		hoy.setHours(0,0,0,0);
		$scope.fechaFiltrHoy=hoy;
		var dd = hoy.getDate();
		var mm = hoy.getMonth()+1; //hoy es 0!
		var yyyy = hoy.getFullYear();
		$scope.fechaFiltrd= dd;
		$scope.fechaFiltrm= mm;
		$scope.fechaFiltry= yyyy;
		if(dd<10) {
			dd='0'+dd
		} 

		if(mm<10) {
			mm='0'+mm
		}
		$scope.fechaFiltr= dd+'-'+mm+'-'+yyyy;
		//$scope.fechaGrupoMnsj.push($scope.fechaFiltr);

	}
	
})

function selecModTrans(){
	document.getElementById("butMV").style.display="block";
	document.getElementById("butM").style.display="none";
		document.getElementById("butM").style.opacity=0;
		//document.getElementById("idCntTRAZrut").style.transitionDelay="0.3s";
		document.getElementById("butM").style.transition="1.5s linear opacity";
	document.getElementById("labalewrapper").style.height="99px";
	document.getElementById("labalewrapper").style.transition="height 0.7s";
	document.getElementById("idCntTRAZrut").style.opacity=1;
	//document.getElementById("idCntTRAZrut").style.transitionDelay="0.3";
	$scope.contenTrazrut=true;

	document.getElementById("idCntTRAZrut").style.transition="0.9s linear opacity";
	document.getElementById("butMV").style.height="132px";	
}
