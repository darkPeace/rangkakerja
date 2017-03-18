angular.module('header-module',[])

.controller('header-controller', 
	['$scope', '$location', '$timeout',
		function (vm, route, timo) {

	vm.brand = {
		name: 'abs',
		imgUrl: 'tile.png'
	};
	vm.menulist = [{
		name: 'about',
		url: '/about',
		subm: false
	},{
		name: 'background',
		subm: true,
		subs: [{
			name: 'sub1',
			sref: 'home.signin'
		},{
			name: 'sub5667',
			sref: 'home.signin'
		}]
	},{
		name: 'tools',
		url: '/tools',
		subm: false
	}];

	vm.locate = function (arg) {
		route.path(arg);
	}

	vm.openpg = function (brg, arg) {
		if (arg === undefined) {
			brg.open();
		}else{
			brg.close();
			vm.locate(arg);
		}
	}
}]);