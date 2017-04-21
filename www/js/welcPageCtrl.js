angular.module('ionicApp')

.controller('welcPageCtrl', function($scope, $state,$translate, SurfFactoria, servicioServidor) {
	
	$scope.goMap=function(){
		
		$state.go("mainmap.map");
	}
  
	$scope.goList=function(){
		$state.go("mainlist.list");
			
	}
	$scope.goPreferidas=function(){
		$state.go("mainlistF.listfavor");
	}
	$scope.goEventos=function(){
		$state.go("mainevent.crearEvento");
	}
	//Traduction of page
	if(SurfFactoria.Language == ""){

	
  			$translate.use("ES");

  		

		}else if(SurfFactoria.Language == "EN"){

   			$translate.use("EN");

   			

		}else if(SurfFactoria.Language == "CAT"){

  			$translate.use("CAT");

  			

		}else if(SurfFactoria.Language == "ES"){

   			$translate.use("ES");

   			

		}else if(SurfFactoria.Language == "RU"){

   			$translate.use("RU");
   	
   			
		}else if(SurfFactoria.Language == "FR"){
   			$translate.use("FR");

   			
		}
})
