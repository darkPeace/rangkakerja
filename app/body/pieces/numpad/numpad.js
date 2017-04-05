angular.module('numpad-module',[])
.controller('numpad-controller', 
['$scope',
function (vm) {

	vm.display='0';
	vm.total = null;
	var str1 = null;


	vm.num=function(nbr){
		if (vm.display !== '0') {
			vm.display+=nbr.toString();
		} else {
			vm.display=nbr;
		}
	}

	vm.clrent = function () {
		vm.display='0';
	}

	var c = 0;

	vm.ops = function (arg) { /* 4-devide 3-multiply 2-minus 1-add */

		var s1 = null;
		var s2 = null;

		if (c===0) {
			s1 = parseFloat(vm.display);
			vm.display = '0';
		} else {
			s1 = vm.total;
		}

		s2 = parseFloat(vm.display);
		vm.display = '0';

		switch(arg){
			case 4:
				vm.total = s1 / s2;
				break;
			case 3:
				vm.total = s1 * s2;
				break;
			case 2:
				vm.total = s1 - s2;
				break;
			case 1:
				vm.total = s1 + s2;
				break;
			case 0:
				vm.display = vm.total;
				break;		
		}

		console.log(vm.total);
	}
}]);