(function() {
  'use strict';

  angular
    .module('appAuth')
    .directive('toolbar', toobar)

  function toolbar() {
    return {
      templateURL: 'components/toolbar/toolbar.tpl.html',
      controller: 'toolbarController',
      controllerAs: 'toolbar'
    }

    function toolbarController() {
      
    }
  }
})
