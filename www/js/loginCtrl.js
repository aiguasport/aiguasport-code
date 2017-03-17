angular.module('ionicApp')

.controller('loginCtrl', function($scope, $state, $translate, servicioServidor,$rootScope, SurfFactoria){
	$scope.logear=true;
	$scope.registr=false;
	$scope.imageFlag = "img/es.png";
	$scope.listaLenguajes = [        
     {languaje:'EN' ,des:'ENGLISH'},
     {languaje:'CAT',des:'CATALA'}];



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

	$scope.selectFlag = function(fla){

		console.log(fla.option);

		if(fla.option == ""){

			$scope.imageFlag = "img/es.png";		
  			$translate.use(fla);
  			$translate.refres();

		}else if(fla.option == "EN"){
			$scope.imageFlag = "img/eng.jpg";
   			$translate.use(fla);
   			$translate.refres();

		}else if(fla.option == "CAT"){
			$scope.imageFlag = "img/cat.png";
  			$translate.use(fla);
  			$translate.refres();

		}else if(fla.option == "ES"){
            $scope.imageFlag = "img/es.png";
   			$translate.use(fla);
   			$translate.refres();

		}


	}


	 

})