angular.module('uirconfig', ['ui.router'])
.config(['$stateProvider', '$locationProvider', function (stateProvider, locationProvider) {
	stateProvider
	.state('home', {
		url: '',
		views: {
			'header@': {
				templateUrl: 'src/component/header/header.html',
				controller: 'header-controller'
			},
			'body@': {
				templateUrl: 'src/body/content/body.html'
				// controller: 'header-controller'
			},
			'footer@': {
				templateUrl: 'src/component/footer/footer.html',
				controller: 'footer-controller'
			}
		}
	});

	// locationProvider.html5Mode(true);
}]);