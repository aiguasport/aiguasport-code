angular.module('ionicApp')

.controller('welcPageCtrl', function($scope, $state,SurfFactoria, servicioServidor) {
	
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
})