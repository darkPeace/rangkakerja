angular.module('front-module',[])

.controller('front-controller',
['$scope', '$timeout', '$mdSidenav',
function function_name(vm, timo, sidenav) {

	vm.id=0;
	vm.slides=false;

	vm.items = 0;

	vm.openNav = function (arg) {
		sidenav(arg).open();
	}

	vm.closeNav = function (arg) {
		sidenav(arg).close();
	}

	vm.slideshows = [/*{
		title: 'title',
		caption: 'spermashion cannoneering lobbyer hydrocyclic unsympathizable isaco',
		imgUrl: 'img/slideshow/IMG_20161010_181055.jpg'
	},{
		title: 'title',
		caption: 'spermashion cannoneering lobbyer hydrocyclic unsympathizable isaco',
		imgUrl: 'tile.jpg'
	},{
		title: 'title',
		caption: 'spermashion cannoneering lobbyer hydrocyclic unsympathizable isaco',
		imgUrl: 'img/slideshow/IMG_20161010_181123.jpg'
	}*/];

	vm.set=function (id) {
		vm.id=id;
	};

	function slideplay() {
		vm.id++;
		if (vm.id==vm.slideshows.length) {
			vm.id=0;
		}
		vm.set(vm.id);
		timo(slideplay,4000);
	}

	if (vm.slideshows) {
		timo(slideplay,4000);
	}

	vm.count = function () {
		vm.items++;
	}

}]);