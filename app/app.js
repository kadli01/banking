var app = angular.module('bankApp', [
  'ngRoute',
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'components/deposit/deposit.view.html', controllerAs: 'dc' , controller: 'depositController'})
    	.when('/transfer', {templateUrl: 'components/transfer/transfer.view.html', controllerAs: 'tc' , controller: 'transferController'})
    	.when('/history', {templateUrl: 'components/history/history.view.html', controllerAs: 'hc' , controller: 'historyController'})
    	.otherwise({redirectTo: '/'});
}]);
