(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController',Controller);
    
    Controller.$inject = ['isSignUp','info'];
    function Controller(isSignUp,info) {
      var $ctrl = this;
      $ctrl.info = info;
      $ctrl.isSignUp = isSignUp;
    }
    
})();