
//https://stackoverflow.com/questions/31901949/getting-data-from-a-json-file-in-ionic-using-angularjs
angular.module('app.services', [])

//START
.factory('socket', function ($rootScope) {	// https://www.html5rocks.com/en/tutorials/frameworks/angular-websockets/
	  var io = require('socket.io');
	  var socket = io.connect();
	  return {
	    on: function (eventName, callback) {
	      socket.on(eventName, function () {  
	        var args = arguments;
	        $rootScope.$apply(function () {
	          callback.apply(socket, args);
	        });
	      });
	    },
	    emit: function (eventName, data, callback) {
	      socket.emit(eventName, data, function () {
	        var args = arguments;
	        $rootScope.$apply(function () {
	          if (callback) {
	            callback.apply(socket, args);
	          }
	        });
	      })
	    }
	  };
})
//FINISH

.factory('Friends', [function ($rootScope, $http,  $stateParams) {
//	  var socket = io.connect();
	  return {
	    all: function ($rootScope, $http, $q) {	//** pass parameter here
	    	//return $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=Florence')
	    	//return $http.get('https://cplusapiweb-sampsontan.c9users.io/jsonapi', {responseType: 'json' });
	    	return $http({method: 'get' , url: "https://smscrowv1-sampsontan.c9users.io"})
	      
	    }
	  	/**
	  	,
	    get: function () {
	      return $http.get('https://friends.json/getOne', { params: { user_id: $rootScope.session, chat_id: $stateParams.idchat } })
	    },
	    add: function (id) {
	      return $http.get('https://friends.json/new', { params: {idfriends:id}})
	    }
	    **/
	  };
	}])

.service('BlankService', [function(){

}]);