angular.module('uirconfig', ['ui.router'])
.config(['$stateProvider', '$locationProvider', function (stateProvider, locationProvider) {
	stateProvider
	.state('home', {
		url: '/',
		views: {
			'body': {
				templateUrl: 'body/content/frontpage.html',
				controller: 'front-controller'
			}
		}
	})
	.state('signin', {
		// url: '/sign',
		views: {
			'body': {
				templateUrl: 'body/pieces/login/login.html',
				// controller: 'login-controller'
			}
		}
	});

	locationProvider.html5Mode(true);
}]);