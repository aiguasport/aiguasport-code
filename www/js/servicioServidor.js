<<<<<<< HEAD
var urlServer = "http://localhost/aiguaesport_php/";
//var urlServer = "http://provenapps.cat/dam1704/test_mysql/";
//var urlServer = "http://aiguasport.esy.es/test_mysql/";
angular.module('ionicApp')

=======
//var urlServer = "http://localhost/api/";
//var urlServer = "http://provenapps.cat/dam1704/test_mysql/php/";
var urlServer = "http://aiguasport.esy.es/test_mysql/";
angular.module('ionicApp')
>>>>>>> Juanjo Commit
.service('servicioServidor', function($http, $cordovaNetwork, $q, $rootScope, $ionicLoading) {
	return{
		login:function(username, password){
			var deferred = $q.defer(); //hacer las llamadas asincronas
<<<<<<< HEAD
			var urlLogin = urlServer + "compararLoginPassword.php?username=" + username + "&password=" + password;
=======
			var urlLogin = urlServer + "compararLoginPassword.php?user=" + username + "&pass=" + password;
>>>>>>> Juanjo Commit
			//comprobamos si hay internet
			var conection = $cordovaNetwork.isOnline();
			//if(conection){
				//llama al servidor con la var urlLogin
				 $http.post(urlLogin).success(function(data){
					deferred.resolve(data); 
				 })
		//	} 
			  //sí
			  return deferred.promise;
		},
		registr:function(username, password, nombre, apellido1, apellido2){
			var deferred = $q.defer(); //hacer las llamadas asincronas		
			var urlLogin = urlServer + "registrarUsuario.php?user=" + username + "&pass=" + password + "&nom=" + nombre + "&apellido1=" + apellido1 + "&apellido2=" + apellido2;
			//comprobamos si hay internet
			var conection = $cordovaNetwork.isOnline();
			//if(conection){
				//llama al servidor con la var urlLogin
				 $http.post(urlLogin).success(function(data){
					deferred.resolve(data); 
				 })
			//} 
			  //sí
			  return deferred.promise;
		},
		valoresc:function(idEscl){
			var deferred = $q.defer(); //hacer las llamadas asincronas		
			var urlLogin = urlServer + "consultarValoracione.php?idEscl="+idEscl;
			//comprobamos si hay internet
			var conection = $cordovaNetwork.isOnline();
			//if(conection){
				//llama al servidor con la var urlLogin
				 $http.post(urlLogin).success(function(data){
					deferred.resolve(data); 
				 })
		//	} 
			  //sí
			  return deferred.promise;
		},
		recargPuntosEscl:function(puntos,idEscl){
			var deferred = $q.defer(); //hacer las llamadas asincronas	
			var urlLogin = urlServer + "verPuntosEscl.php?puntos="+puntos+"&idEscl="+idEscl;
			//comprobamos si hay internet
			var conection = $cordovaNetwork.isOnline();
			/*if(conection){*/
				//llama al servidor con la var urlLogin
				 $http.post(urlLogin).success(function(data){
					deferred.resolve(data); 
				 })
			/*} */
			  //sí
			  return deferred.promise;
		},
		valoracionesEscls:function(){
			var deferred = $q.defer(); //hacer las llamadas asincronas	
			var urlLogin = urlServer + "consultarValoracioneTodas.php";
			//comprobamos si hay internet
			var conection = $cordovaNetwork.isOnline();
			/*if(conection){*/
				//llama al servidor con la var urlLogin
				 $http.post(urlLogin).success(function(data){
					deferred.resolve(data); 
				 })
			/*} */
			  //sí
			  return deferred.promise;
		},
		cargoEvento:function(nombre, fecha, descripcion, lugar, organizador){
			var deferred = $q.defer(); //hacer las llamadas asincronas	
			var urlLogin = urlServer + "cargarEventos.php?nombre="+nombre+"&fecha="+fecha+"&descripcion="+descripcion+"&lugar="+lugar+"&organizador="+organizador;
			//comprobamos si hay internet
			var conection = $cordovaNetwork.isOnline();
			/*if(conection){*/
				//llama al servidor con la var urlLogin
				 $http.post(urlLogin).success(function(data){
					deferred.resolve(data); 
				 })
			/*} */
			  //sí
			  return deferred.promise;
		},
		
		verEventos:function(){
			var deferred = $q.defer(); //hacer las llamadas asincronas	
			var urlLogin = urlServer + "devolverEventos.php";
			//comprobamos si hay internet
			var conection = $cordovaNetwork.isOnline();
			/*if(conection){*/
				//llama al servidor con la var urlLogin
				 $http.post(urlLogin).success(function(data){
					deferred.resolve(data); 
				 })
			/*} */
			  //sí
			  return deferred.promise;
		},
		verMensajes:function(){
			var deferred = $q.defer(); //hacer las llamadas asincronas	
			var urlLogin = urlServer + "mensajeEvent.php";
			//comprobamos si hay internet
			var conection = $cordovaNetwork.isOnline();
			/*if(conection){*/
				//llama al servidor con la var urlLogin
				 $http.post(urlLogin).success(function(data){
					deferred.resolve(data); 
				 })
			/*} */
			  //sí
			  return deferred.promise;
		},
		cargoMensaje:function(numevento, nomusuario, message){
			var deferred = $q.defer(); //hacer las llamadas asincronas	
			var urlLogin = urlServer + "cargarMensaje.php?numevent=" + numevento +"&nombreus="+ nomusuario + "&mensaje=" + message;
			//comprobamos si hay internet
			var conection = $cordovaNetwork.isOnline();
			/*if(conection){*/
				//llama al servidor con la var urlLogin
				 $http.post(urlLogin).success(function(data){
					deferred.resolve(data); 
				 })
			/*} */
			  //sí
			  return deferred.promise;
		}
		
		
	}
})
