// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

/*'toastr' 'starter.controllers', 'starter.services',*/ 
var app = angular.module('ionicApp', ['ionic', 'angular.filter','pascalprecht.translate','ngCordova', 'ionic-ratings','ionic-datepicker'])

app.config(function($stateProvider,$locationProvider, $urlRouterProvider,$translateProvider) {
  $urlRouterProvider.otherwise('/login')
	/*uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDsw2BsozUS8cMptHYT02eOyEFuxCU-agI',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });*/


  $stateProvider.state('welcPage', {
    url: '/welcPage',
        templateUrl: 'templates/welcPage.html',
		controller: 'welcPageCtrl'
  })
	$stateProvider.state('login', {
    url: '/login', 
		templateUrl: 'templates/login.html',
		controller: 'loginCtrl'
  })
  
  $stateProvider.state('mainmap.map', {
    url: '/map', 
	views: {
      cuerpo: {
        templateUrl: 'templates/map.html',
		controller: 'mapCtrl'
	  }
	}
  })
  
  $stateProvider.state('mainlist.list', {
    url: '/list',
	views: {
      cuerpo: {
        templateUrl: 'templates/list.html',
		controller: 'listCtrl'
	  }
	}
  })
  $stateProvider.state('mainpp.infoEscuela', {
    url: '/infoEscuela',  
	views: {
      cuerpo: {
        templateUrl: 'templates/infoEscuela.html',
		controller: 'infoEscuelaCtrl'
	  }
	}
	
  })
  $stateProvider.state('mainlistF.listfavor', {
    url: '/listfavor', 
	views: {
      cuerpo: {
        templateUrl: 'templates/listfavor.html',
		controller: 'listfavorCtrl'
	  }
	}
  })
  $stateProvider.state('mainevent.crearEvento', {
    url: '/crearEvento', 
	views: {
      cuerpo: {
        templateUrl: 'templates/crearEvento.html',
		controller: 'crearEventoCtrl'
	  }
	}
  })
  
  $stateProvider.state('maineventdesc.descripcionEventos', {
    url: '/descripcionEventos', 
	views: {
      cuerpo: {
        templateUrl: 'templates/descripcionEventos.html',
		controller: 'descripcionEventosCtrl'
	  }
	}
  })
  
	$stateProvider.state('mainmap', {
		abstract: true,
		templateUrl: 'templates/main.html',
			resolve: {
				mapDis : function(){
					return false;
				},
				listaDis: function(){
					return true;
				},
				pagprincDis: function(){
					return true;
				},
				listaFavoritas: function(){
					return true;
				},
				eventos: function(){
					return true;
				},					
				/*submissionDis: function(){
					return true;
				},
				recordingDis : function(){
					return false;
				},
				aboutDis : function(){
					return true;
				}*/
			},
			controller: 'NavController'
	});
	$stateProvider.state('mainpp', {
		abstract: true,
		templateUrl: 'templates/main.html',
			resolve: {
				mapDis : function(){
					return true;
				},
				listaDis: function(){
					return true;
				},
				pagprincDis: function(){
					return true;
				},
				listaFavoritas: function(){
					return true;
				},
				eventos: function(){
					return true;
				},	
				/*submissionDis: function(){
					return true;
				},
				recordingDis : function(){
					return false;
				},
				aboutDis : function(){
					return true;
				}*/
			},
			controller: 'NavController'
	});
	$stateProvider.state('mainlist', {
		abstract: true,
		templateUrl: 'templates/main.html',
			resolve: {
				mapDis : function(){
					return true;
				},
				listaDis: function(){
					return false;
				},
				pagprincDis: function(){
					return true;
				},
				listaFavoritas: function(){
					return true;
				},
				eventos: function(){
					return true;
				},	
				/*recordingDis : function(){
					return false;
				},
				aboutDis : function(){
					return true;
				}*/
			},
			controller: 'NavController'
	});
	$stateProvider.state('mainlistF', {
		abstract: true,
		templateUrl: 'templates/main.html',
			resolve: {
				mapDis : function(){
					return true;
				},
				listaDis: function(){
					return true;
				},
				pagprincDis: function(){
					return true;
				},
				listaFavoritas: function(){
					return false;
				},
				eventos: function(){
					return true;
				},	
				/*recordingDis : function(){
					return false;
				},
				aboutDis : function(){
					return true;
				}*/
			},
			controller: 'NavController'
	});
	$stateProvider.state('mainevent', {
		abstract: true,
		templateUrl: 'templates/main.html',
			resolve: {
				mapDis : function(){
					return true;
				},
				listaDis: function(){
					return true;
				},
				pagprincDis: function(){
					return true;
				},
				listaFavoritas: function(){
					return true;
				},	
				eventos: function(){
					return false;
				},	
				
				/*submissionDis: function(){
					return true;
				},
				recordingDis : function(){
					return false;
				},
				aboutDis : function(){
					return true;
				}*/
			},
			controller: 'NavController'
	});
	$stateProvider.state('maineventdesc', {
		abstract: true,
		templateUrl: 'templates/main.html',
			resolve: {
				mapDis : function(){
					return true;
				},
				listaDis: function(){
					return true;
				},
				pagprincDis: function(){
					return true;
				},
				listaFavoritas: function(){
					return true;
				},	
				eventos: function(){
					return true;
				},	
				
			},
			controller: 'NavController'
	});
	$translateProvider.translations("EN", {
    'TITLE': 'Hello',
    'NOMUSU':'User Name',
    'PASS':'Password',
    'ENTER':'Enter',
    'LOGIN':'Sign in'
 	 });

  $translateProvider.translations("CAT", {
    'TITLE': 'Hallo',
    'NOMUSU':'Nom Usuari',
    'PASS':'Contrasenya',
    'ENTER':'Entrar',
    'LOGIN':'registrar-se'
  });

  $translateProvider.translations("ES", {
    'TITLE': 'HOLA',
    'NOMUSU':'Nombre de usuario',
    'PASS':'Contraseña',
    'ENTER':'Entrar',
    'LOGIN':'Registrarse'
  });

  $translateProvider.preferredLanguage("ES");


})