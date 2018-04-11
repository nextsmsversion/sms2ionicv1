angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.schedule', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/schedule.html',
        controller: 'scheduleCtrl'
      }
    }
  })

  .state('tabsController.dVA', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/dVA.html',
        controller: 'dVACtrl'
      }
    }
  })

  .state('tabsController.eDIT', {
    url: '/page4?title',
    views: {
      'tab3': {
        templateUrl: 'templates/eDIT.html',
        controller: 'eDITCtrl'
         
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2')


});