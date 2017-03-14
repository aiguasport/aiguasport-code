angular.module('ionicApp')
.controller('listCtrl', function($scope, $state, SurfFactoria, servicioServidor, $compile){
	$scope.escuelas=SurfFactoria.escuelas;
	$scope.listhid="none";
	$scope.marcadores=[];
	$scope.listotal="block";
	$scope.desinfoque="";
	SurfFactoria.controlList=false;
	$scope.textoListhid="Filtrar por deporte";
	$scope.sinEstr=0;
	$scope.jsoNvaloracEscls=[];
	//función llamar al servidor pedir datos de valoraciones de escuelas array
	$scope.servidorValorEscls = function(){
		servicioServidor.valoracionesEscls().then(
				//Conectado correctamente
				function(data){
					for(i=0; i<=data.length-1;i++){
						if(SurfFactoria.escuelas[i].nombre==data[i].nombre_escuela){
							SurfFactoria.escuelas[i].estrellas=parseInt(data[i].puntos);
							if(SurfFactoria.escuelas[i].estrellas==5){
								SurfFactoria.escuelas[i].colorMedalla="#E2BD52";
							}else if(SurfFactoria.escuelas[i].estrellas==4){
								SurfFactoria.escuelas[i].colorMedalla="#BEBFC4";
							}else{
								SurfFactoria.escuelas[i].colorMedalla="#AD4941";
							}
						}

					}
			});
	}
	$scope.servidorValorEscls();	
	$scope.selDep= function(control, cssCl){		
		$scope.listhid="none";
		$scope.desinfoque="";						
		$scope.cssClass=cssCl;
		SurfFactoria.controlList=true;
		$scope.escuelas=[];
		for(i=0; i<=SurfFactoria.escuelas.length-1;i++){
			for(j=0;j<SurfFactoria.escuelas[i].sport.length;j++){
				if(SurfFactoria.escuelas[i].sport[j].num==control){
					$scope.textoListhid=SurfFactoria.escuelas[i].sport[j].name;
				}			
			}
			if(SurfFactoria.escuelas[i].val%control==0){				
				$scope.escuelas.push(SurfFactoria.escuelas[i]);
				SurfFactoria.escSelect=$scope.escuelas;
			}
		}

	}

	/*$scope.llamarvalorEscls=function(){
		servicioServidor.valoracionesEscls(SurfFactoria.indiceEscuela).then(
			//Conectado correctamente
			function(data){
			for(i=0; i<=data.length-1;i++){
				if(SurfFactoria.escuelas[i].nombre==data[i].nombre_escuela){
					SurfFactoria.escuelas[i].estrellas=parseInt(data[i].puntos);
					for(j=0;j<=$scope.estrEsc;j++){
						$scope.sinEstr = $scope.sinEstr+"<i class='ion-android-star' ></i>";
						$scope.compiled = $compile($scope.sinEstr)($scope);					
					}
				}

			}
		});

	}
	$scope.llamarvalorEscls();*/
	$scope.turnList=function(){
		if($scope.listhid=="block"){
			$scope.listhid="none";
			$scope.desinfoque="";
		}else{
			$scope.listhid="block";
			$scope.desinfoque="-webkit-filter: contrast(50%);"//"-webkit-filter: blur(2px);-moz-filter: blur(3px);-o-filter: blur(1px);-ms-filter: blur(2px);filter: blur(2px);";
		}		
	}

	$scope.descList=function(idx){
		SurfFactoria.indiceEscuela=idx;
		$state.go("mainpp.infoEscuela");
		
	}
	


})