angular.module('footer-module',[])
	.controller('footer-controller', 
		['$scope', 
		function (vm) {
			vm.foot = {
				year: new Date().getFullYear(),
				brand: "PiTSynergy Sdn. Bhd.",
				description: "titanocyanide undoped helical cystoflagellate millenarian wintrish orientally pterodactylian cryptocarpic p"
			};
		}])

;