angular.module('tabbed-module',[])
.controller('tabbed-controller', 
['$scope',
function (vm) {

	vm.tabstartidx = 1;
	vm.tabs = [{
		title: 'score',
		body: `numpad`
	},{
		title: 'freq',
		body: `slider`
	}];
}])