angular.module('header-module',[])

.controller('header-controller', 
	['$scope', '$location',
		function (vm, route) {

	vm.brand = {
		name: 'abs',
		imgUrl: 'tile.png'
	};
	vm.menulist = [{
		name: 'about',
		url: '/about'
	},{
		name: 'background',
		url: '/background'
	},{
		name: 'tools',
		url: '/tools'
	}];

	vm.locate = function (arg) {
		route.path(arg);
	}
}]);