(function () {
  "use strict";
  angular.module('MenuApp')
  .component('items', {
      restrict: 'E',
      templateUrl: 'templates/items.template.html',
      bindings: {
        list: '<'
      }
  });
})();