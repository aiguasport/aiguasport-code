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
    'LOGIN':'Sign in',
    'RETYPEPASS':'Repeat password',
    'NAME':'Name',
    'SURNAME':'Last Name 1',
    'SURNAMESECOND':'Last Name 2',
    'EVENTO':'Event name',
    'DESCRIP':'Description',
    'LUGAR':'Place',
    'ORGANIZADOR':'Organizer',
    'NAMEORG':' Organizer name',
    'CREAR':'Create',
    'SALIR':'Exit',
    'ADDEVENT':'Add event',
    'MOREMESS':'More messages',
    'SENDMESS':'Send Message ...',
    'CONTACT':'Contact',
    'PHONE':'Phone',
    'MAIL':'Mail',
    'WINDSURF':'Windsurf',
    'KITESURFT':'Kitesurf',
    'NAV':'Navigation',
    'PADDLESURF':'Paddle Surf',
    'SURF':'Surf',
    'KAYAK':'Kayak',
    'SUBM':'Submarinism',
    'PESCA':'Fishing',
    'MENU':'Menu',
    'MAPA':'Map',
    'DEPORTES':'Sports',
    'CERCA':'Near',
    'DIRECCIONRUTA':'Via, number, floor, locality',    
    'TRAZAR':'Trace route',  
    'LISTA':'List',
    'ESCUELASFAV':'Favorite schools',
    'EVENTOS':'Events'
   
 	 });

  $translateProvider.translations("CAT", {
    'TITLE': 'Hallo',
    'NOMUSU':'Nom Usuari',
    'PASS':'Contrasenya',
    'ENTER':'Entrar',
    'LOGIN':'Registrar-se',
    'RETYPEPASS':'Repetir contrasenya',
    'NAME':'Nom',
    'SURNAME':'Cognom 1',
    'SURNAMESECOND':'Cognom 2',
    'EVENTO':'Nom del event',
    'DESCRIP':'Descripció',
    'LUGAR':'LLoc',
    'ORGANIZADOR':'Organitzador',
    'NAMEORG':" Nom d'organitzador",
    'CREAR':'Crear',
    'SALIR':'Sortir',
    'ADDEVENT':'Afegir esdeveniment',
    'MOREMESS':'Més missatges',
    'SENDMESS':'Enviar missatge...',
    'CONTACT':'Contacte',
    'PHONE':'Telèfon',
    'MAIL':'Correu electrònic',
    'WINDSURF':'Windsurf',
    'KITESURFT':'Kitesurf',
    'NAV':'Navegació',
    'PADDLESURF':'Paddle Surf',
    'SURF':'Surf',
    'KAYAK':'Kayak',
    'SUBM':'Submarinisme',
    'PESCA':'Pesca',
    'MENU':'Menú',
    'MAPA':'Mapa',
    'DIRECCIONRUTA':'Via, numero, pis, localitat',
    'TRAZAR':'Traçar ruta',  
    'LISTA':'LLista',
    'ESCUELASFAV':'Escoles preferides',
    'EVENTOS':'Esdeveniments'


  });

  $translateProvider.translations("ES", {
    'TITLE': 'HOLA',
    'NOMUSU':'Nombre de usuario',
    'PASS':'Contraseña',
    'ENTER':'Entrar',
    'LOGIN':'Registrarse',
    'RETYPEPASS':'Repetir contraseña',
    'NAME':'Nombre',
    'SURNAME':'Apellido 1',
    'SURNAMESECOND':'Apellido 2',
    'EVENTO':'Nombre de evento',
    'DESCRIP':'Descripción',
    'LUGAR':'Lugar',
    'ORGANIZADOR':'Organizador',
    'NAMEORG':' Nombre de organizador',
    'CREAR':'Crear',
    'SALIR':'Salir',
    'ADDEVENT':'Añadir evento',
    'MOREMESS':'Mas mensajes',
    'SENDMESS':'Enviar mensaje ...',
    'CONTACT':'Contacto',
    'PHONE':'Teléfono',
    'MAIL':'Correo electrónico',
    'WINDSURF':'Windsurf',
    'KITESURFT':'Kitesurf',
    'NAV':'Navegación',
    'PADDLESURF':'Paddle Surf',
    'SURF':'Surf',
    'KAYAK':'Kayak',
    'SUBM':'Submarinismo',
    'PESCA':'Pesca',
    'MENU':'Menú',
    'MAPA':'Mapa',
    'DEPORTES':'Deportes',
    'CERCA':'Cerca de mí',
    'DIRECCIONRUTA':'Vía, numero, piso, localidad',
    'TRAZAR':'Trazar ruta',  
    'LISTA':'Lista',
    'ESCUELASFAV':'Escuelas Favoritas',
    'EVENTOS':'Eventos'

  });

  $translateProvider.translations("RU", {
    'TITLE': 'HOLA',
    'NOMUSU':'Имя пользователя',
    'PASS':'пароль',
    'ENTER':'войти',
    'LOGIN':'Регистрация',
    'RETYPEPASS':'повторить пароль',
    'NAME':'имя',
    'SURNAME':'фамилия 1',
    'SURNAMESECOND':'фамилия 2',
    'EVENTO':'Название события',
    'DESCRIP':'Oписание',
    'LUGAR':'Mесто',
    'ORGANIZADOR':'Oрганизатор',
    'NAMEORG':' название Организатор',
    'CREAR':'создать',
    'SALIR':'выход',
    'ADDEVENT':'Добавить событие',
    'MOREMESS':'больше сообщение',
    'SENDMESS':'EОтправить сообщение ...',
    'CONTACT':'контакт',
    'PHONE':'телефон',
    'MAIL':'электронная почта',
    'WINDSURF':'виндсерфинг',
    'KITESURFT':'кайтсерфинга',
    'NAV':'навигация',
    'PADDLESURF':'сапсёрфинг',
    'SURF':'серфинг',
    'KAYAK':'каяк',
    'SUBM':'дайвинг',
    'PESCA':'рыбалка',
    'MENU':'меню',
    'MAPA':'карта',
    'DEPORTES':'спорт',
    'CERCA':'близко',
    'DIRECCIONRUTA':'Маршрут, номер, пол, место жительства',
    'TRAZAR':'путь',  
    'LISTA':'список',
    'ESCUELASFAV':'любимые школы',
    'EVENTOS':'события'
  });
$translateProvider.translations("FR", {
    'TITLE': 'HOLA',
    'NOMUSU':"Nom d'utilisateur",
    'PASS':'Mot de passe',
    'ENTER':'Entrer',
    'LOGIN':'Inscription',
    'RETYPEPASS':'mot de passe répétition',
    'NAME':'Nom',
    'SURNAME':'Le nom 1',
    'SURNAMESECOND':'Le nom 2',
    'EVENTO':"Nom de l'événement",
    'DESCRIP':'Description',
    'LUGAR':'Lieu',
    'ORGANIZADOR':'Organisateur',
    'NAMEORG':" Nom de l'organisateur",
    'CREAR':'Créer',
    'SALIR':'Sortir',
    'ADDEVENT':'Ajouter un événement',
    'MOREMESS':'Plus Mensajes',
    'SENDMESS':'Envoyer Missatge ...',
    'CONTACT':'Contact',
    'PHONE':'Téléphone',
    'MAIL':'Courrier électronique',
    'WINDSURF':'Planche à voile',
    'KITESURFT':'Kitesurf',
    'NAV':'Navigation',
    'PADDLESURF':'Paddle Surf',
    'SURF':'Surf',
    'KAYAK':'Kayak',
    'SUBM':'Plongée',
    'PESCA':'Pêche',
    'MENU':'Menu',
    'MAPA':'Carte',
    'DEPORTES':'Sportif',
    'CERCA':'Près de moi',
    'DIRECCIONRUTA':'Route, numéro, étage, emplacement',
    'TRAZAR':'Chemin de course',  
    'LISTA':'Liste',
    'ESCUELASFAV':'Écoles préférées',
    'EVENTOS':'Événements'

   
  });
  $translateProvider.preferredLanguage("ES");
  



})
 
