/** originally by sam 20180313 
angular.module('app.controllers', [])	**/
angular.module('app.controllers', [])
  
  

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
//TODO : AngularJS App with Socket.IO ref: https://www.html5rocks.com/en/tutorials/frameworks/angular-websockets/
.controller('scheduleCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
        $scope.messages = [];
        $scope.roster = [];
        $scope.name = 'Default';
        $scope.text = 'Tester';
    
        //var io = require('socket.io');
        //var socket = io.connect('http://localhost:8080');
        
        /** TODO by sam import the socket io 
        var io = require('socket.io');
	      var socket = io.connect();

        socket.on('connect', function () {
          $scope.setName();
        });

        socket.on('message', function (msg) {
          $scope.messages.push(msg);
          $scope.$apply();
        });

        socket.on('roster', function (names) {
          $scope.roster = names;
          $scope.$apply();
        });
        
        **/

        $scope.send = function send() {
            alert('Arrived Send');
//          console.log('Sending message:', $scope.text);
//          socket.emit('message', $scope.text);
//          $scope.text = '';
        };

        $scope.setName = function setName() {
            alert('Set name..');
//          socket.emit('identify', $scope.name);
        };
}])
   
.controller('dVACtrl', //['$scope', '$stateParams',  'Friends', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
		function($scope, $http,  $stateParams, Friends) {
	    //Client:		https://sms2ionic-sampsontan.c9users.io 
	    //Server:   	https://smscrowv1-sampsontan.c9users.io
		//TODO how to make this to happen
			$scope.msgs = {"3":"Reduced service due to incident","2":"Train with brake hang-on is approaching","1":"Last Train to"}
			
			//alert('controller after setting scope names');
			Friends.all($scope, $http)
			.success(
						function(response) {	//** pass parameter her
							//tmp debugging alert('SUCCESS'); 
							$scope.msgTypes = response.msgType;
							$scope.msgs = response.messages;
						}
				)
			.error(
						function(msg, code) {	//** pass parameter her
							alert('WHY $http.get returns msg: <'+msg + '> code: '+code + "???"); 
							$scope.msgTypes = msg.msgType;	//20180226 with 407 in OA workstation?? thanks GOD
							$scope.msgs = msg.messages;
						}
			);
			
		}
)
   
.controller('eDITCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
    