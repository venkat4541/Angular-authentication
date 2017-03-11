(function() {
  'use strict';

  angular
    .module('authApp')
    .controller('profileController', profileController);

  function profileController($http, store) {
    var vm = this;
    vm.getMessage = getMessage;
    vm.getSecretMessage = getSecretMessage;
    vm.message;
    vm.profile = store.get('profile');

    function getMessage() {
      $http.get('http://localhost:3002/api/public', function() {
        skipAuthorization: true
      }).then(function(response) {
        vm.message = response.data.message;
      });
    }

    function getSecretMessage() {
      $http.get('http://localhost:3002/api/private').then(function(response) {
        vm.message = response.data.message;
      });
    }
  }

})();
