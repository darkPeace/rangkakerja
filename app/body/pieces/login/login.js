

(function () {
  'use strict';
  angular
.module('login', [])
.controller('loginctrl', 

  ['$scope', '$state',
  function (vm, st) {
    vm.login = function () {
      st.go('admin')
    }
  }]);
})();

