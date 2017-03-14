angular.module('ionicApp')
.factory('SurfFactoria', ['$localstorage', function($localstorage,$rootScope) {	 
	var escuelas = [ 
		{
			"idx":"0",
			"nombre":"Escola de Vela Garbí",
			"direccion":"Passeig Marítim, 271-275, 08860 Castelldefels, Barcelona",
			"imagen":"img/garbi.jpg",
			"lat":41.265028,
			"longi":1.964215,
			"descrip": "",
			"pw":"http://www.escolagarbi.com/",
			"tlf":"609752175",
			"email":"info@escolagarbi.com",
			"estrellas":0,
			"colorMedalla":"white",
			"val":30030,
			"sport":[{"name":"Surf", "num":7},{"name":"Windsurf", "num":2}, {"name":"Paddle Surf", "num":5}, {"name":"Navegació", "num":13}, {"name":"Caiac", "num":11}, {"name":"Kitesurf", "num":3}]
		},

		{
			"idx":"1",
			"nombre":"Escola del Vent",
			"direccion":"Passeig Marítim, 08911 Badalona, Barcelona",
			"imagen":"img/escolavent.png",
			"lat":41.450996,
			"longi":2.255163,
			"descrip": "",
			"pw":"http://www.escoladelvent.com/",
			"tlf":"669549019",
			"email":"info@escoladelvent.com",
			"estrellas":0,
			"colorMedalla":"white",
			"val":10010,
			"sport":[{"name":"Paddle Surf", "num":5},{"name":"Windsurf", "num":2}, {"name":"Surf", "num":7}, {"name":"Navegació", "num":13}, {"name":"Caiac", "num":11}]
		},

		{
			"idx":"2",
			"nombre":"Base Nàutica Municipal de Barcelona",
			"direccion":"Platja de la Mar Bella, Avinguda del Litoral S/N, 08005 Barcelona",
			"imagen":"img/basenauticabcn.png",
			"lat":41.398540,
			"longi":2.212108,
			"descrip": "",
			"pw":"http://basenautica.org/",
			"tlf":"932210432",
			"email":"info@basenautica.org",
			"val":1430,
			"sport":[{"name":"Paddle Surf", "num":5},{"name":"Windsurf", "num":2}, {"name":"Navegació", "num":13}, {"name":"Caiac", "num":11}]
		},

		{
			"idx":"3",
			"nombre":"Escola de Submarinisme l'Ancora",
			"direccion":"Carrer de Ricart, 6, 08930 Sant Adrià de Besòs, Barcelona",
			"imagen":"img/escolalancora.png",
			"lat":41.431360,
			"longi":2.215828,
			"descrip": "",
			"pw":"http://www.lancora.net/",
			"tlf":"670200065",
			"email":"info@lancora.net",
			"val":17,
			"sport":[{"name":"Submarinisme", "num":17}]
		},

		{
			"idx":"4",
			"nombre":"Club Marítim Altafulla",
			"direccion":"Carrer Pescadors, 43893 Altafulla, Tarragona",
			"imagen":"img/clubmaritimaltafulla.png", 
			"lat":41.134115,
			"longi":1.376859,
			"descrip": "",
			"pw":"http://clubmaritimaltafulla.com/",
			"tlf":"977650263",
			"email":"info@lancora.net",
			"val":715,
			"sport":[{"name":"Navegació", "num":13}, {"name":"Paddle Surf", "num":5}, {"name":"Caiac", "num":11}]
		},

		{
			"idx":"5",
			"nombre":"Club Natació Badalona",
			"direccion":"Carrer Eduard Maristany, 5, 08911, Barcelona",
			"imagen":"img/clubnataciobadalona.png", 
			"lat":41.446361,
			"longi": 2.250428,
			"descrip": "",
			"pw":"http://www.cnbadalona.cat",
			"tlf":"933843413",
			"email":"cnb@cnbadalona.cat",
			"val":3094,
			"sport":[{"name":"Windsurf", "num":2}, {"name":"Surf", "num":7}, {"name":"Navegació", "num":13}, {"name":"Submarinisme", "num":17}]
		},

		{
			"idx":"6",
			"nombre":"Club Nàutic El Balís",
			"direccion":"Port Balís, Carretera NII, Km 651.5, 08392 Sant Andreu de Llavaneres, Barcelona",
			"imagen":"img/elbalis.png", 
			"lat":41.559980,
			"longi": 2.508095,
			"descrip": "",
			"pw":"http://www.cnelbalis.com/",
			"tlf":"937929900",
			"email":"info@cnelbalis.com",
			"val":247,
			"sport":[{"name":"Navegació", "num":13}, {"name":"Pesca", "num":19}]
		},

		{
			"idx":"7",
			"nombre":"Centre Municipal de Vela",
			"direccion":"Moll de Gregal, S/N, 08005 Barcelona",
			"imagen":"img/velabarcelona.png", 
			"lat":41.387407,
			"longi": 2.202802,
			"descrip": "",
			"pw":"http://www.velabarcelona.com/index.php/",
			"tlf":"932257940",
			"email":"info@velabarcelona.com",
			"val":4862,
			"sport":[{"name":"Windsurf", "num":2}, {"name":"Caiac", "num":11}, {"name":"Navegació", "num":13}, {"name":"Submarinisme", "num":17}]
		},

		{
			"idx":"8",
			"nombre":"Club Nàutic Bétulo",
			"direccion":"Passeig Marítim, s/n, 08912 Badalona, Barcelona",
			"imagen":"img/cnbetulo.png", 
			"lat":41.450954,
			"longi": 2.255371,
			"descrip": "",
			"pw":"http://www.cnbetulo.com/",
			"tlf":"933841052",
			"email":"",
			"val":770,
			"sport":[{"name":"Windsurf", "num":2}, {"name":"Paddle Surf", "num":5}, {"name":"Surf", "num":7}, {"name":"Caiac", "num":11}]
		},

		{
			"idx":"9",
			"nombre":"Club Nàutic Cabrera de Mar",
			"direccion":"Platja Torrent dels Vinyals, s/n, 08349 Cabrera de Mar, Barcelona",
			"imagen":"img/cabrerademar.png", 
			"lat":41.507966,
			"longi":2.405054,
			"descrip":"",
			"pw":"http://www.cncabrerademar.com/",
			"tlf":"937591246",
			"email":"info@cncabrerademar.com",
			"val":646646,
			"sport":[{"name":"Windsurf", "num":2}, {"name":"Surf", "num":7}, {"name":"Caiac", "num":11},{"name":"Navegació", "num":13}, {"name":"Submarinisme", "num":17}, {"name":"Pesca", "num":19}]
		},

		{
			"idx":"10",
			"nombre":"Club Vela Calella",
			"direccion":"Carrer del Noi Gran, 3,17210 Calella de Palafrugell, Girona",
			"imagen":"img/clubvelacalella.png", 
			"lat":41.888486,
			"longi":3.183599,
			"descrip": "",
			"pw":"http://www.clubvelacalella.cat/",
			"tlf":"972614619",
			"email":"cvc@clubvelacalella.cat",
			"val":13,
			"sport":[{"name":"Navegació", "num":13}]
		},

		{
			"idx":"11",
			"nombre":"Club Nàutic Càmbrils",
			"direccion":"Passeig Miramar, 44, 43850 Cambrils,Tarragona",
			"imagen":"img/clubnauticcambrils.png", 
			"lat":41.066421,
			"longi":1.064577,
			"descrip":"",
			"pw":"http://www.clubnauticcambrils.com/",
			"tlf":"645272801",
			"email":"info@clubnauticcambrils.com",
			"val":27170,
			"sport":[{"name":"Windsurf", "num":2}, {"name":"Paddle Surf", "num":5}, {"name":"Caiac", "num":11}, {"name":"Navegació", "num":13}, {"name":"Pesca", "num":19}]
		},

		{
			"idx":"12",
			"nombre":"Club Marítimo Castelldefels",
			"direccion":"Passeig Marítim, 17 08860 Castelldefels Barcelona",
			"imagen":"img/clubmaritimocastelldefels.png", 
			"lat":41.265065,
			"longi":1.997230,
			"descrip":"",
			"pw":"http://www.clubmaritimocastelldefels.com/",
			"tlf":"936653202",
			"email":"info@clubmaritimocastelldefels.com",
			"val":13,
			"sport":[{"name":"Navegació", "num":13}]
		},

		{
			"idx":"13",
			"nombre":"Club Nàutic de Coma-Ruga",
			"direccion":"Passeig Marítim, S/N,43880 El Vendrell,Tarragona",
			"imagen":"img/clubnauticcomaruga.png", 
			"lat":41.176770,
			"longi": 1.526278,
			"descrip": "",
			"pw":"http://www.clubnautic.com/",
			"tlf":"977680120",
			"email":"cnco@clubnautic.com",
			"val":247,
			"sport":[{"name":"Navegació", "num":13}, {"name":"Pesca", "num":19}]
		},

		{
			"idx":"14",
			"nombre":"Club Nàutic Creixell",
			"direccion":"Av. de la Platja, s/n, (Urb. Port Romà), 43839 Creixell, Tarragona",
			"imagen":"img/clubnauticcreixell.png", 
			"lat":41.176731,
			"longi": 1.526275,
			"descrip": "",
			"pw":"https://www.sites.google.com/site/clubnauticcreixell/",
			"tlf":"630868482 ",
			"email":"cncreixell@gmail.com ",
			"val":247,
			"sport":[{"name":"Navegació", "num":13}, {"name":"Pesca", "num":19}]
		},

		{
			"idx":"15",
			"nombre":"Club Nàutic l’Escala",
			"direccion":"Carrer Port de la Clota, 1, 17130 Escala, Girona",
			"imagen":"img/cnescala.png", 
			"lat":42.116474,
			"longi": 3.147806,
			"descrip": "",
			"pw":"http://www.nauticescala.com/",
			"tlf":"972776949",
			"email":"esport@nauticescala.com",
			"val":4199,
			"sport":[{"name":"Navegació", "num":13}, {"name":"Submarinisme", "num":17}, {"name":"Pesca", "num":19}]
		},

		{
			"idx":"16",
			"nombre":"Club Nàutic Llafranc",
			"direccion":"Passeig de Cipsela, s/n, 17211 Llafranc,Girona",
			"imagen":"img/clubnauticllafranc.png", 
			"lat":41.893158,
			"longi": 3.197158,
			"descrip": "",
			"pw":"http://www.nauticllafranc.net/",
			"tlf":"972300754",
			"email":"info@nauticllafranc.net",
			"val":13,
			"sport":[{"name":"Navegació", "num":13}]
		},

		{
			"idx":"17",
			"nombre":"Club Nàutic El Masnou",
			"direccion":"Passeig Marítim, s/n, 08320 Barcelona",
			"imagen":"img/clubnauticelmasnou.png", 
			"lat":41.478031,
			"longi":2.317383,
			"descrip": "",
			"pw":"http://www.nauticmasnou.com/",
			"tlf":"935550605",
			"email":"cnm@nauticmasnou.com",
			"val":1430,
			"sport":[{"name":"Windsurf", "num":2}, {"name":"Paddle Surf", "num":5}, {"name":"Caiac", "num":11}, {"name":"Navegació", "num":13}]
		},

		{
			"idx":"18",
			"nombre":"Club de Vela Palamós",
			"direccion":"Carrer del Club Nàutic, 17230 Palamós, Girona",
			"imagen":"img/clubdevelapalamos.png", 
			"lat":41.842695,
			"longi":3.129431,
			"descrip":"",
			"pw":"http://www.cvpalamos.org/",
			"tlf":"972315871",
			"email":"cvp@cvpalamos.org",
			"val":13,
			"sport":[{"name":"Navegació", "num":13}]
		},

		{
			"idx":"19",
			"nombre":"Club Vela Mataró",
			"direccion":"Passeig de Callao, 08302 Mataró, Barcelona",
			"imagen":"img/escolavelamataro.gif", 
			"lat":41.537109,
			"longi":2.451119,
			"descrip":"",
			"pw":"http://www.clubvelamataro.com/",
			"tlf":"696578359",
			"email":"info@escolavelamataro.com",
			"val":13,
			"sport":[{"name":"Navegació", "num":13}]
		},

		{
			"idx":"20",
			"nombre":"Club Nàutic Salou",
			"direccion":"Port Esportiu de Salou, 43840 Salou, Tarragona",
			"imagen":"img/clubnauticsalou.png", 
			"lat":41.074855,
			"longi":1.131259,
			"descrip":"",
			"pw":"http://www.clubnauticsalou.com/",
			"tlf":"977382166",
			"email":"club@clubnauticsalou.com",
			"val":494,
			"sport":[{"name":"Windsurf", "num":2}, {"name":"Navegació", "num":13}, {"name":"Pesca", "num":19}]
		}
	];
	/*array de escuelas favoritas*/
	var escuelaFavor=[];
	var escSelect=[];
	var eventosArray=[];
	var indiceEscuela;
	/*Comprobamos si la lista es filtrada por deportes o es la lista principal*/
	var controlList=false;
	var valoracEscl=0;
	var descripEvento;
	var mensajes=[];
	var tempDirevent;
	var nombreusu;
	var numevent;
  return {
	 escuelaFavor:escuelaFavor,
	 indiceEscuela:indiceEscuela,
	 escSelect:escSelect,
	 controlList:controlList,
	 escuelas:escuelas, 
	 valoracEscl:valoracEscl,
	 descripEvento:descripEvento,
	 eventosArray:eventosArray,
	 tempDirevent:tempDirevent,
	 mensajes:mensajes,
	 nombreusu:nombreusu,
	 numevent:numevent,
  }
}])
.factory('$localstorage', ['$window', function($window) {

  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}]);