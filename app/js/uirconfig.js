angular.module('uirconfig', ['ui.router'])
.config(['$stateProvider', '$locationProvider', function (stateProvider, locationProvider) {
	stateProvider
	.state('home', {
		url: '/',
		views: {
			'body': {
				templateUrl: 'src/body/pieces/numpad/numpad.html',
				controller: 'numpad-controller'
				// templateUrl: 'src/body/content/frontpage.html',
				// controller: 'front-controller'
			}
		}
	})
	.state('signin', {
		url: '/sign',
		views: {
			'body': {
				templateUrl: 'src/body/content/login.html',
				// controller: 'login-controller'
			}
		}
	});

	locationProvider.html5Mode(true);
}]);