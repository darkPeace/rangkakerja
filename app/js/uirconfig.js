angular.module('uirconfig', ['ui.router'])
.config(['$stateProvider', '$locationProvider', function (stateProvider, locationProvider) {
	stateProvider
	.state('home', {
		url: '',
		views: {
			'body': {
				templateUrl: 'body/content/frontpage.html',
				controller: 'front-controller'
			}
		}
	})
	.state('signin', {
		url: '/sign',
		views: {
			'body': {
				templateUrl: 'body/pieces/login/login.html',
				controller: 'loginctrl'
			}
		}
	})
	.state('admin', {
		url: '/admin',
		views: {
			'body': {
				templateUrl: 'body/admin/dash.html',
				controller: 'dashctrl'
			}
		}
	})
	.state('admin.apps1', {
		url: '/apps1',
		views: {
			'body': {
				templateUrl: 'body/admin/app1/app1.html',
				controller: 'app1ctrl'
			}
		}
	});

	locationProvider.html5Mode(false);
}]);