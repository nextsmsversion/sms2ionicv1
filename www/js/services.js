
//https://stackoverflow.com/questions/31901949/getting-data-from-a-json-file-in-ionic-using-angularjs
angular.module('app.services', [])

.factory('Friends', [function ($rootScope, $http,  $stateParams) {

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