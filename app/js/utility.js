angular.module("utility-module", [])
.factory("utility", [function () {
	return {
		camelcase: function (str) {
			return str.replace(/\W+(.)/g, function(match, chr) {
				return chr.toUpperCase();
			});
		}
	};
}])