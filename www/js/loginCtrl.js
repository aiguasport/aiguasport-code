angular.module('ionicApp')

.controller('loginCtrl', function($scope, $state, $translate, servicioServidor,$rootScope, SurfFactoria){
	$scope.logear=true;
	$scope.registr=false;
	$scope.imageFlag = "img/es.png";
	$scope.listaLenguajes = [        
     {languaje:'EN' ,des:'ENGLISH'},
     {languaje:'CAT',des:'CATALA'},
     {languaje:'RU',des:'RUSSIAN'},
     {languaje:'FR',des:'FRANCES'}];



	$scope.logearVisib=function(){
		$scope.logear=true;
	}
	$scope.registrVisib=function(){
		$scope.registr=true;
		$scope.logear=false;
	}
	$scope.signIn = function(user) {
		console.log('Sign-In', user);
			SurfFactoria.nombreusu = user.username;
		// $state.go('mainfirstpage.firstpage');
		servicioServidor.login(user.username, CryptoJS.MD5(user.password).toString()).then(
			//Conectado correctamente
			function(data){
				if (data=='ok'){
					$state.go('welcPage');
				}else{
					alert("Nom d'usuari o contrasenya incorrectes");
				}
			});
     };
	$scope.signReg = function(user){
		console.log('Sign-In', user);
		SurfFactoria.nombreusu = user.username;
		if(user.username==undefined||user.password==undefined){
			alert("Els camps Nom d'usuari i Contrasenya són obigatorios");
		}else if(user.password!=user.password2){
			alert("Contrasenyes no coincideixen");
		}
		else{
			servicioServidor.registr(user.username, CryptoJS.MD5(user.password).toString(), user.nombre, user.apellido1, user.apellido2).then(
				function(data){
					if (data==1){
						$state.go('welcPage');
					}else{
						alert("Aquest nom d'usuari ja existeix");
					}
			});
		}

	}
/**Function to traslate page
param:select language in select control
**/

	$scope.selectFlag = function(fla){


		if(fla.option == ""){

			$scope.imageFlag = "img/es.png";		
  			$translate.use("ES");
  			SurfFactoria.Language = "ES";
  		

		}else if(fla.option == "EN"){
			$scope.imageFlag = "img/eng.jpg";
   			$translate.use("EN");
   			SurfFactoria.Language = "EN";
   			

		}else if(fla.option == "CAT"){
			$scope.imageFlag = "img/cat.png";
  			$translate.use("CAT");
  			SurfFactoria.Language = "CAT";
  			

		}else if(fla.option == "ES"){
            $scope.imageFlag = "img/es.png";
   			$translate.use("ES");
   			SurfFactoria.Language = "ES";
   			

		}else if(fla.option == "RU"){
            $scope.imageFlag = "img/russian.jpg";
   			$translate.use("RU");
   			SurfFactoria.Language = "RU";
   			
		}else if(fla.option == "FR"){
            $scope.imageFlag = "img/francia.jpg";
   			$translate.use("FR");
   			SurfFactoria.Language = "FR";
   			
		}

	}


	 

})