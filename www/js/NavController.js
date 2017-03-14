angular.module('ionicApp')

.controller('NavController', function($scope, $ionicSideMenuDelegate, mapDis, listaDis, pagprincDis, listaFavoritas, eventos, SurfFactoria) {
	$scope.mapDis = mapDis;
	$scope.listaDis = listaDis;
	$scope.pagprincDis = pagprincDis;
	$scope.listaFavoritas=listaFavoritas;
	$scope.eventos=eventos;
	$scope.toggleLeft = function() {
		$ionicSideMenuDelegate.toggleLeft();
    };
})