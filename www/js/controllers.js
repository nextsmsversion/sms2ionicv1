angular.module('app.controllers', [])
  
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('scheduleCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('dVACtrl', //['$scope', '$stateParams',  'Friends', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
		function($scope, $http,  $stateParams, Friends) {
	    //Client:		https://sms2ionic-sampsontan.c9users.io 
	    //Server:   	https://smscrowv1-sampsontan.c9users.io
		//TODO how to make this to happen
			
						
			//alert('controller after setting scope names');
			Friends.all($scope, $http)
			.success(
						function(response) {	//** pass parameter her
							alert('SUCCESS'); 
							$scope.names = response;
						}
				)
			.error(
						function(msg, code) {	//** pass parameter her
							alert('WHY $http.get returns msg: <'+msg + '> code: '+code + "???"); 
							$scope.names = msg;	//20180226 with 407?? thanks GOD
						}
			);
})
   
.controller('eDITCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
    