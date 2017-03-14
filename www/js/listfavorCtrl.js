angular.module('ionicApp')
.controller('listfavorCtrl', function($scope, $localstorage,SurfFactoria, $state) {
	$scope.listaEscFav=$localstorage.getObject('escuelaFavorita');
	SurfFactoria.controlList=false;
	$scope.descList=function(iden){
		SurfFactoria.indiceEscuela=iden;
		$state.go("mainpp.infoEscuela");
	}
	$scope.borrarEsc = function(id){
		for(i=0;$scope.listaEscFav.length;i++){
			if($scope.listaEscFav[i].idx==id){
				$scope.listaEscFav.splice(i,1);
				$localstorage.setObject('escuelaFavorita', $scope.listaEscFav);
			}
		}
		
	}
})