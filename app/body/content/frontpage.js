angular.module('front-module',[])

.controller('front-controller',
['$scope', '$timeout', '$mdSidenav', 'utility',
function function_name(vm, timo, sidenav,util) {

	vm.cards = [{
		title: "apps1",
		desc: "heptamethylene subperitoneally oillet nonasthmatic asphaltite retroversion brunt thrast tinful Procyoninae nunata",
		img: "tile.jpg",
		funame1: "Login",
		funame2: "Rate Us"
	},{
		title: "apps2",
		desc: "heptamethylene",
		img: "tile.jpg",
		subheader: "lists i am",
		funame1: "Login",
		funame2: "Rate Us"
	}];

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

	vm.assign = function (func) {
		var fun = util.camelcase(func);
		console.log(fun);

		switch (fun) {
			case 'RateUs':
				RateUs(); break;

			case 'Login':
				Login(); break;
		}
	}

	function RateUs() {
		console.log('rate us');
	}

	function Login() {
		console.log('login fun');
	}

}]);