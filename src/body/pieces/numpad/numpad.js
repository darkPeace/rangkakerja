angular.module('numpad-module',[])
.controller('numpad-controller', 
['$scope',
function (vm) {
	vm.display='0';

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

	vm.ops = function (arg) { /* 4-devide 3-multiply 2-minus 1-add */
		
		var str1 = parseFloat(vm.display);
		vm.display = '0';
		console.log(str1);
	}


}]);