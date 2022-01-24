(function () {
    "use strict";

    angular.module("App", [])
    .controller("Controller", Controller);
    
    Controller.$inject = ["$scope"]
    function Controller($scope) {
        var ctrl = this;
        ctrl.value = 1;
        ctrl.text = '';
        ctrl.name = 'Name';
        ctrl.select = null;
        $scope.postsList = ['a','b','c'];
        ctrl.check = function () {
            ctrl.text = ctrl.select;
        }
    }
})();
