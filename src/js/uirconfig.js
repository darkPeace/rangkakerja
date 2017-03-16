angular.module('uirconfig', ['ui.router'])
.config(['$stateProvider', '$locationProvider', function (stateProvider, locationProvider) {
	stateProvider
	.state('home', {
		url: '/',
		views: {
			'header': {
				templateUrl: 'src/component/header/header.html',
				controller: 'header-controller'
			},
			'body': {
				templateUrl: 'src/body/content/frontpage.html',
				controller: 'front-controller'
			},
			'footer': {
				templateUrl: 'src/component/footer/footer.html',
				controller: 'footer-controller'
			}
		}
	})
	.state('home.signin', {
		// url: '/sign',
		views: {
			'content': {
				templateUrl: 'src/body/content/login.html',
				// controller: 'header-controller'
			},
			'leftnav': {
				templateUrl: 'src/body/sidenav/leftnav.html',
				// controller: 'front-controller'
			},
			'rightnav': {
				templateUrl: 'src/body/sidenav/rightnav.html',
				// controller: 'footer-controller'
			}
		}
	});

	locationProvider.html5Mode(true);
}]);