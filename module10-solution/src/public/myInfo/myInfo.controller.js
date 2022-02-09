(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController',Controller);
    
    Controller.$inject = ['isSignUp','info', 'ApiPath'];
    function Controller(isSignUp,info, ApiPath) {
      var $ctrl = this;
      $ctrl.info = info;
      $ctrl.menuItem = info.dish;
      $ctrl.isSignUp = isSignUp;
      $ctrl.basePath = ApiPath;
    }
    
})();