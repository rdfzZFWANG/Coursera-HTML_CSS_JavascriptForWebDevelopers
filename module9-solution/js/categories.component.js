(function () {
    "use strict";
    angular.module('MenuApp')
    .component('categories', {
        restrict: 'E',
        templateUrl: 'templates/categories.template.html',
        bindings: {
          list: '<'
        }
    });
})();