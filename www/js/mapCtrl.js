angular.module('ionicApp')
.controller('mapCtrl', function($scope, $ionicLoading, $compile, SurfFactoria, $state,$ionicModal, $compile, $window) {
	$scope.escuelas=SurfFactoria.escuelas;
	$scope.listhid="none";
	$scope.cuest="none";
	$scope.map;
	$scope.infowindow;
	$scope.marker;
	$scope.nombre="";
	$scope.textoListhid="Filtrar per esport";
	$scope.miPosicionLat;
	$scope.miPosicionLong;
	$scope.escLat=0;
	$scope.escLang=0;
	$scope.direccion="";
	$scope.latLongDirec;
	$scope.miModoViajar="DRIVING";
	$scope.rutaTraz=false;
	$scope.butlable=true;
	$scope.opcelec;
	$scope.markerEvento;
	$scope.iconoLable="ion-chevron-up";
	$scope.contenTrazrut=true;
	
	if(document.getElementById("butMV").style.displa=="block"){
		$scope.iconoLable="ion-chevron-down";
		document.getElementById("butMV").style.height="132px";
	}
	var prueba=[];
	//ver si hay una dirección de evento
	$scope.locDirevnt=function(){
		//$window.location.reload(true);
		var directionsService = new google.maps.DirectionsService;
		var directionsDisplay = new google.maps.DirectionsRenderer;
		var geoCoder = new google.maps.Geocoder(SurfFactoria.tempDirevent);
		var direccion=SurfFactoria.tempDirevent;
		var request = {address:direccion};

		geoCoder.geocode(request, function(result, status){
			
			var latlng = new google.maps.LatLng(result[0].geometry.location.lat(), result[0].geometry.location.lng());
			$scope.dirEv=latlng;
			$scope.latLongDirec=latlng;
		
		$scope.map = new google.maps.Map(document.getElementById('map'), {
			zoom: 8,
			center: $scope.dirEv
		});
			$scope.markerEvento = new google.maps.Marker({
			position: latlng,
			map: $scope.map,
			});	
			var infowindow = new google.maps.InfoWindow({  
			  content: ''
			});	
			var marker=$scope.markerEvento;
				var contenido="<div><a onclick='selecModTrans()' style='color:green; font-weight: bold'>Traçar ruta</a></div>";
				(function(marker, contenido) {
					google.maps.event.addListener(marker, 'click', function() {
						infowindow.setContent(contenido);
						infowindow.open($scope.map,marker);
						//ver la escuela pichada en el marcado
						$scope.nombre=marker.title;
					});	
				})(marker, contenido);
		})
		SurfFactoria.tempDirevent=undefined;
	}
	//inicializar el mapa
	$scope.initialize = function() {
		/*if($scope.dirEv!=undefined){
			var myLatlng =$scope.dirEv;
		}else{
			var myLatlng = new google.maps.LatLng(41.381632, 2.186875);
		}*/
        var myLatlng = new google.maps.LatLng(40.41, -3.69);
        var mapOptions = {
          center: myLatlng,
          zoom: 5,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });
        $scope.map = map;
		
      };
	$scope.$on('$ionicView.enter', function (viewInfo, state) {
		document.getElementById("butM").style.display="none";
		document.getElementById("butM").style.opacity=0;
		//document.getElementById("idCntTRAZrut").style.transitionDelay="0.3s";
		document.getElementById("butM").style.transition="1.5s linear opacity";
		document.getElementById("butMV").style.display="none";
		$scope.listhid="none";
		$scope.initialize();
    });
	$scope.$on('$ionicView.enter', function (viewInfo, state) {
		if($scope.markerEvento != undefined){
			$scope.markerEvento.setMap(null);
		}
        if(SurfFactoria.tempDirevent!=undefined){
			$scope.locDirevnt();
			$scope.initialize();
		}
    });

      //google.maps.event.addDomListener(window, 'load', initialize());
	//pone display de la lista de deportes y botones de seleccionar modo de viaje en block
	$scope.verLista=function(){
		$scope.dirEv=undefined;
		$scope.iconoLable="ion-chevron-up";
		document.getElementById("butMV").style.display="none";
		document.getElementById("butM").style.display="none";
		document.getElementById("butM").style.opacity=0;
		//document.getElementById("idCntTRAZrut").style.transitionDelay="0.3s";
		document.getElementById("butM").style.transition="1.5s linear opacity";
		$scope.direccion="";
		$scope.rutaTraz=false;
		document.getElementById('coloButmodV1').style.color="white";
		document.getElementById('coloButmodV2').style.color="white";
		document.getElementById('coloButmodV3').style.color="white";
		document.getElementById('coloButmodV4').style.color="white";
		

		if($scope.listhid=="none"){
		$scope.listhid="block";
		}else{
			$scope.listhid="none";
		}		
	}
	//función para seleccionar deporte 
	$scope.selDep=function(control){
		//mode do viajen en block

		//cargar mapa 
		$scope.map = map;
		$scope.listhid="none";
		document.getElementById("butM").style.display="none";
		document.getElementById("butM").style.opacity=0;
		//document.getElementById("idCntTRAZrut").style.transitionDelay="0.3s";
		document.getElementById("butM").style.transition="1.5s linear opacity";
		var myLatLng = new google.maps.LatLng(41.381632, 2.186875);
		$scope.map = new google.maps.Map(document.getElementById('map'), {
			zoom: 8,
			center: myLatLng
		});
		//buscar escuelas, coger sus coordenadas
		for (var i = 0; i<$scope.escuelas.length; i++) {
			for(j=0;j<$scope.escuelas[i].sport.length;j++){
				if($scope.escuelas[i].sport[j].num==control){
					$scope.textoListhid=$scope.escuelas[i].sport[j].name;
				}			
			}
			if($scope.escuelas[i].val%control==0){
				myLatLng = new google.maps.LatLng($scope.escuelas[i].lat, $scope.escuelas[i].longi);
				var marker = new google.maps.Marker({
				position: myLatLng,
				map: $scope.map,
				title: $scope.escuelas[i].nombre,
				});	
				var infowindow = new google.maps.InfoWindow({  
				  content: ''
				});	
				//ltitud y longitud de escuela para trazar ruta
				$scope.escLat=$scope.escuelas[i].lat;
				$scope.escLang=$scope.escuelas[i].longi;
				var imagen=$scope.escuelas[i].imagen;
				//contenido de bocadillo de marcador
				var contenido="<div style='float: left;position: static;'><img src='" + imagen + "' style='width:20%'/></div><div style='float: left'><a href='#infoEscuela'>" + $scope.escuelas[i].nombre + "</a><div>" + $scope.escuelas[i].direccion + "</div><a onclick='selecModTrans()' style='color:green; font-weight: bold'>Traçar ruta</a></div>";
				(function(marker, contenido) {
					google.maps.event.addListener(marker, 'click', function() {
						infowindow.setContent(contenido);
						infowindow.open($scope.map,marker);
						//ver la escuela pichada en el marcado
						$scope.nombre=marker.title;
						$scope.irDescrip($scope.nombre);
					});	
				})(marker, contenido);			
			}
		};
		//extraer las coordenadas de la escuela pinchada en el marcador
		$scope.irDescrip = function(id){
			for(var i = 0; i<$scope.escuelas.length; i++){
				if(id==$scope.escuelas[i].nombre){
					SurfFactoria.indiceEscuela=i;
					$scope.escLat=$scope.escuelas[i].lat;
					$scope.escLang=$scope.escuelas[i].longi;
				}
			}
		}
		$scope.localizaMe();
	} 
	$scope.localizaMe = function(){
		var onSuccess = function(position) {
			//guardo mis coordenadas en la variable
			var myLatlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			//guardo estos valores en $scope para usarlos en la función trazar ruta
			$scope.miPosicionLat=position.coords.latitude;
			$scope.miPosicionLong=position.coords.longitude;
		}
		function onError(error) {
			alert('code: '    + error.code    + '\n' +
				  'message: ' + error.message + '\n');
		}
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
	}
	//boton a prop, buscar escuelas cerca de mi
	$scope.buscarCerca=function(){
		$scope.dirEv=undefined;
		$scope.listhid="none";
		$scope.initialize();
		//document.getElementById("butM").style.display="none";
		document.getElementById("butM").style.display="block";
		document.getElementById("butM").style.opacity=1;
		//document.getElementById("idCntTRAZrut").style.transitionDelay="0.3s";
		document.getElementById("butM").style.transition="1.9s linear opacity";
		document.getElementById("butMV").style.display="none";
		
	}
	$scope.cercaDir=function(){
		
		var iconPerson='img/male.png';
		var directionsService = new google.maps.DirectionsService;
		var directionsDisplay = new google.maps.DirectionsRenderer;
		var myLatLng = new google.maps.LatLng(41.381632, 2.186875);
		$scope.map = new google.maps.Map(document.getElementById('map'), {
			zoom: 8,
			center: myLatLng
		});
		var geoCoder = new google.maps.Geocoder($scope.direccion);
			var direccion=$scope.direccion;
			var request = {address:direccion};
			geoCoder.geocode(request, function(result, status){
				var latlng = new google.maps.LatLng(result[0].geometry.location.lat(), result[0].geometry.location.lng());  
				$scope.latLongDirec=latlng;
				var beachMarker  = new google.maps.Marker({
				position: latlng,
				map: $scope.map,
				icon:iconPerson, 
				animation: google.maps.Animation.DROP,
			});
			})
		$scope.verTodasEsc();
	}
    $scope.centerOnMe = function() {
		$scope.iconoLable="ion-chevron-up";
		document.getElementById("butMV").style.display="none";
		$scope.direccion="";
		$scope.rutaTraz=false;
		document.getElementById('coloButmodV1').style.color="white";
		document.getElementById('coloButmodV2').style.color="white";
		document.getElementById('coloButmodV3').style.color="white";
		document.getElementById('coloButmodV4').style.color="white";
		
		//botones de seleccionar modo de viaje en block

		//$scope.map = map;
		//$scope.verModoviaj="block";
		
		var myLatLng = new google.maps.LatLng(41.381632, 2.186875);
		$scope.myLatLng=myLatLng;
		$scope.map = new google.maps.Map(document.getElementById('map'), {
			zoom: 8,
			center: $scope.myLatLng
		});
		//extraer el índice de la escuela el marcador de cual ha sido pulsado
		$scope.irDescrip = function(id){
			for(var i = 0; i<$scope.escuelas.length; i++){
				if(id==$scope.escuelas[i].nombre){
					SurfFactoria.indiceEscuela=i;
				}
			}
		}
		var iconPerson='img/male.png';
		//si todo ha ido bien
		var onSuccess = function(position) {
			//guardo mis coordenadas en la variable
			var myLatlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			$scope.myLatLng=myLatlng;
			//guardo estos valores en $scope para usarlos en la función trazar ruta
			$scope.miPosicionLat=position.coords.latitude;
			$scope.miPosicionLong=position.coords.longitude;
			//añado el marcador
			var beachMarker  = new google.maps.Marker({
				position: myLatlng,
				map: $scope.map,
				icon:iconPerson, 
				animation: google.maps.Animation.DROP,
				title: 'Ets'
			});
			
		};
		$scope.verTodasEsc();
		$scope.irDescrip = function(id){
			for(var i = 0; i<$scope.escuelas.length; i++){
				if(id==$scope.escuelas[i].nombre){
					SurfFactoria.indiceEscuela=i;
					$scope.escLat=$scope.escuelas[i].lat;
					$scope.escLang=$scope.escuelas[i].longi;
				}
			}
		}
		// onError Callback receives a PositionError object
		function onError(error) {
			alert('code: '    + error.code    + '\n' +
				  'message: ' + error.message + '\n');
		}
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };
	$scope.verTodasEsc=function(){
		$scope.dirEv=undefined;
		for (var i = 0; i<$scope.escuelas.length; i++) {
				myLatLng = new google.maps.LatLng($scope.escuelas[i].lat, $scope.escuelas[i].longi);
				var marker = new google.maps.Marker({
				position: myLatLng,
				map: $scope.map,
				title: $scope.escuelas[i].nombre,
				});	
				$scope.escLat=$scope.escuelas[i].lat;
				$scope.escLang=$scope.escuelas[i].longi;
				var imagen=$scope.escuelas[i].imagen;
				var contenido="<div style='float: left;position: static;'><img src='" + imagen + "' style='width:20%'/></div><div style='float: left'><a href='#infoEscuela'>" + $scope.escuelas[i].nombre + "</a><div>" + $scope.escuelas[i].direccion + "</div><a onclick='selecModTrans()' style='color:green; font-weight: bold'>Traçar ruta</a></div>";
				var infowindow = new google.maps.InfoWindow({  
				  content: contenido
				});	
				(function(marker, contenido) {
					google.maps.event.addListener(marker, 'click', function() {
						infowindow.setContent(contenido);
						
						infowindow.open($scope.map,marker);
						$scope.nombre=marker.title;
						$scope.irDescrip($scope.nombre);
					});	
				})(marker, contenido);
				
			};	
			$scope.irDescrip = function(id){
				for(var i = 0; i<$scope.escuelas.length; i++){
					if(id==$scope.escuelas[i].nombre){
						SurfFactoria.indiceEscuela=i;
						$scope.escLat=$scope.escuelas[i].lat;
						$scope.escLang=$scope.escuelas[i].longi;
					}
				}
			}
	}
	//cerrar aprop
	$scope.cerrarAprop = function(){
		document.getElementById("butM").style.display="none";
	}
	//boton de abrir/cerrar lable
	$scope.cerrarLable = function(){
		if(document.getElementById("labalewrapper").style.height=="0px"){
			document.getElementById("labalewrapper").style.transition="height 0.7s";
			document.getElementById("labalewrapper").style.height="99px";
			document.getElementById("butMV").style.height="132px";
			
				$scope.contenTrazrut=true;
			document.getElementById("idCntTRAZrut").style.opacity=1;
			//document.getElementById("idCntTRAZrut").style.transitionDelay="0.3s";
			document.getElementById("idCntTRAZrut").style.transition="0.9s linear opacity";
			
			$scope.iconoLable="ion-chevron-up";			
		}else{			
			
			document.getElementById("labalewrapper").style.transition="height 0.7s";
			document.getElementById("labalewrapper").style.height="0px";
			document.getElementById("butMV").style.height="33px";
			document.getElementById("idCntTRAZrut").style.opacity=0;
			document.getElementById("idCntTRAZrut").style.transition="0.5s linear opacity";
			$scope.contenTrazrut=false;

			$scope.iconoLable="ion-chevron-down";

		}
	}
	//pulso el boton de modo viaje y mando por parametro la variable de modo viaje
	$scope.modoViaje = function(miModoViajar, idBot){
		document.getElementById('coloButmodV1').style.color="white";
		document.getElementById('coloButmodV2').style.color="white";
		document.getElementById('coloButmodV3').style.color="white";
		document.getElementById('coloButmodV4').style.color="white";
		if($scope.opcelec=="white"){
			document.getElementById(idBot).style.color="rgb(187, 187, 187)";
		}		
		if($scope.rutaTraz==false){
			$scope.miModoViajar=miModoViajar;
		}
		else{
			$scope.miModoViajar=miModoViajar;
			var directionsService = new google.maps.DirectionsService;
			var directionsDisplay = new google.maps.DirectionsRenderer;
			var myLatLngC = new google.maps.LatLng(41.381632, 2.186875);
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 10,
				center: myLatLngC
			});
			directionsDisplay.setMap(map);
			var myLatLngO = new google.maps.LatLng(41.265028, 1.9642155);
			var myLatLngD = new google.maps.LatLng(41.450996, 2.255163);
			
			$scope.calculateAndDisplayRoute($scope.dirEv, directionsService, directionsDisplay, $scope.escLat, $scope.escLang, $scope.miPosicionLat, $scope.miPosicionLong, $scope.opcelec);
		}
			/*var directionsService = new google.maps.DirectionsService;
			var directionsDisplay = new google.maps.DirectionsRenderer;
			var myLatLngC = new google.maps.LatLng(41.381632, 2.186875);
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 10,
				center: myLatLngC
			});
			directionsDisplay.setMap(map);
			var myLatLngO = new google.maps.LatLng(41.265028, 1.9642155);
			var myLatLngD = new google.maps.LatLng(41.450996, 2.255163);
			
			$scope.calculateAndDisplayRoute(directionsService, directionsDisplay, $scope.escLat, $scope.escLang, $scope.miPosicionLat, $scope.miPosicionLong, miModoViajar);*/
			
	};
	$scope.mandarinfo = function(opcselec){
		document.getElementById("butM").style.display="none";
		document.getElementById("butM").style.opacity=0;
		//document.getElementById("idCntTRAZrut").style.transitionDelay="0.3s";
		document.getElementById("butM").style.transition="1.5s linear opacity";
		var modViaj=$scope.miModoViajar;
		var directionsService = new google.maps.DirectionsService;
		var directionsDisplay = new google.maps.DirectionsRenderer;
		var myLatLngC = new google.maps.LatLng(41.381632, 2.186875);
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 10,
			center: myLatLngC
		});
		directionsDisplay.setMap(map);
		var myLatLngO = new google.maps.LatLng(41.265028, 1.9642155);
		var myLatLngD = new google.maps.LatLng(41.450996, 2.255163);
		
		$scope.calculateAndDisplayRoute($scope.dirEv, directionsService, directionsDisplay, $scope.escLat, $scope.escLang, $scope.miPosicionLat, $scope.miPosicionLong, opcselec);
	}
	//calculo la ruta
	$scope.calculateAndDisplayRoute = function(dirEv, directionsService, directionsDisplay, escLat, escLang, miPosicionLat, miPosicionLong, opcselec) {		
		$scope.opcelec=opcselec;
		if($scope.dirEv!=undefined){
			var latLangDest=$scope.dirEv;
		}else{
			var latLangDest=new google.maps.LatLng(escLat, escLang);
		}
		var modViaj=$scope.miModoViajar;
		if(opcselec=="location"){
			var geoCoder = new google.maps.Geocoder($scope.direccion)
			var direccion=$scope.direccion;
			var request = {address:direccion};
			geoCoder.geocode(request, function(result, status){
				var latlng = new google.maps.LatLng(result[0].geometry.location.lat(), result[0].geometry.location.lng());  
				$scope.latLongDirec=latlng;
				directionsService.route({
						origin: /*{lat: miPosicionLat, lng: miPosicionLong},*/latlng,
						destination: latLangDest,
						travelMode: google.maps.TravelMode[modViaj]
					}, (function(response, status) {
						if (status === google.maps.DirectionsStatus.OK) {
						directionsDisplay.setDirections(response);
						} else {
						window.alert('Directions request failed due to ' + status);
						}
					})
				); 
			})
			$scope.rutaTraz=true;
		} 
		else{
			directionsService.route({
					origin: {lat: miPosicionLat, lng: miPosicionLong},
					destination: {lat: escLat, lng: escLang},
					travelMode: google.maps.TravelMode[modViaj]
				}, (function(response, status) {
					if (status === google.maps.DirectionsStatus.OK) {
					directionsDisplay.setDirections(response);
					} else {
					window.alert('Directions request failed due to ' + status);
					}
				})
			); 
			$scope.rutaTraz=true;
		}
	}
})