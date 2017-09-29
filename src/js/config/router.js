angular
  .module('bemoApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('placesIndex', {
      url: '/places',
      templateUrl: '/js/views/places/index.html',
      controller: 'PlacesIndexCtrl as placesIndex'
    })
    .state('placesShow', {
      url: '/places/:id',
      templateUrl: '/js/views/places/show.html',
      controller: 'PlacesShowCtrl as placesShow'
    })
    .state('placesNew', {
      url: '/places/new',
      templateUrl: '/js/views/places/new.html',
      controller: 'PlacesNewCtrl as placesNew'
    })
    .state('placesEdit', {
      url: '/places/edit',
      templateUrl: '/js/views/places/edit.html',
      controller: 'PlacesEditCtrl as placesEdit'
    });

  $urlRouterProvider.otherwise('/places');
}
