(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController',Controller);
    
    Controller.$inject = ['MenuService'];
    function Controller(MenuService) {
      var $ctrl = this;
      $ctrl.user = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          shortName: ''
      };
      $ctrl.displayError = false;
      $ctrl.displaySaved = false;
      
      $ctrl.saveInfo = function () {
          console.log('Getting');
          MenuService.getMenuItem($ctrl.user.shortName).then((res) => {
            MenuService.setUserInfo($ctrl.user, res);
            $ctrl.displayError = false;
            $ctrl.displaySaved = true;
          }, (err) => {
            console.log('Error', err);
            $ctrl.displayError = true;
            $ctrl.displaySaved = false;
          })
      };//pattern="(\d{3})-(\d{3})-(\d{4})"
    }
 })();