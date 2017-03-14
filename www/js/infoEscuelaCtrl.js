angular.module('ionicApp')
.controller('infoEscuelaCtrl', function($scope, SurfFactoria,$localstorage, servicioServidor) {
	$scope.escuelas=SurfFactoria.escuelas;
	$scope.listaEscFav=$localstorage.getObject('escuelaFavorita');	
	$scope.corazonIcn="ion-ios-heart-outline";
	SurfFactoria.valoracEscl=parseInt(SurfFactoria.valoracEscl);
	//Pedimos valoraciones de escuelas desde el servidor
	//Si esta filtrado por deporte o no
	if(SurfFactoria.controlList==true){
		for(i=0;i<$scope.escuelas.length;i++){
			if($scope.escuelas[i].nombre==SurfFactoria.escSelect[SurfFactoria.indiceEscuela].nombre){
				$scope.idx=i;
			}	
			
		}
	}else{
		$scope.idx=SurfFactoria.indiceEscuela;
	}
		
	/*$scope.llamarvalorEsc= function(idEscl){
		servicioServidor.valoresc(idEscl).then(
		//Conectado correctamente
		function(data){
			SurfFactoria.valoracEscl=data;
			SurfFactoria.valoracEscl=parseInt(SurfFactoria.valoracEscl);			
		});;
	}
	$scope.llamarvalorEsc($scope.idx);*/
	SurfFactoria.valoracEscl=SurfFactoria.escuelas[$scope.idx].estrellas;
	//Pintamos las estrellas
	$scope.ratingsObject = {
        iconOn : 'ion-ios-star',
        iconOff : 'ion-ios-star-outline',
        iconOnColor: 'rgb(200, 200, 100)',
        iconOffColor:  'rgb(200, 100, 100)',
        rating:  SurfFactoria.valoracEscl,
        minRating:0,
        callback: function(rating) {
          $scope.ratingsCallback(rating);
        }
      };
	
      $scope.ratingsCallback = function(rating) {
        console.log('Selected rating is : ', rating);
			var estrellas=rating;
			if(SurfFactoria.valoracEscl==0){
				var puntos=estrellas;
			}else{
				var pnts=Math.round((estrellas+SurfFactoria.valoracEscl)/2);
				var puntos=pnts.toString();				
			}
			SurfFactoria.indiceEscuela=$scope.idx.toString();
			servicioServidor.recargPuntosEscl(puntos,SurfFactoria.indiceEscuela).then(
			//Conectado correctamente
			function(data){
			
		});
      };
	for(i=0;i<$scope.listaEscFav.length;i++){
		if($scope.listaEscFav[i].idx==SurfFactoria.escuelas[$scope.idx].idx){
			$scope.corazonIcn="ion-ios-heart";
			$scope.colorCrz="blue";
		}	
		
	}
	
	if($scope.listaEscFav.length == undefined){
		$scope.listaEscFav = [];
	}
	$scope.control=0;
	
	if (SurfFactoria.controlList){
		$scope.escuela=SurfFactoria.escSelect[SurfFactoria.indiceEscuela];
	}else{
		$scope.escuela=SurfFactoria.escuelas[SurfFactoria.indiceEscuela];
	}
	$scope.anadirFavor=function(idEscFavor){
		console.log(idEscFavor);
		$scope.corazonIcn="ion-ios-heart";
		$scope.colorCrz="blue";
		for(i=0;i<$scope.listaEscFav.length;i++){
			if($scope.listaEscFav[i].idx==idEscFavor){
				$scope.control=1;
			}			
		}
		if($scope.listaEscFav.length!= 0){
			if($scope.control==0){
				$scope.listaEscFav.push(SurfFactoria.escuelas[idEscFavor]);
				$localstorage.setObject('escuelaFavorita', $scope.listaEscFav);
			}			
		}else{
			$scope.listaEscFav.push(SurfFactoria.escuelas[idEscFavor]);
			$localstorage.setObject('escuelaFavorita', $scope.listaEscFav);
		}

	}
	/*$scope.abrirEnlace = function(){
		window.open('{{escuela.pw}}', '_system', 'location=yes');
	}*/
})