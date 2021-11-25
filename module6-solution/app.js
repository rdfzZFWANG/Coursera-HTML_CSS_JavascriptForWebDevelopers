(function () {
    "use strict";
    angular.module("App", [])
    .controller("Controller", Controller);

    Controller.$inject = ['$scope'];
    function Controller($scope) {
        $scope.input = "";
        $scope.msg = "";
        $scope.click = function () {
            if ($scope.input.length > 0) { 
                var list = $scope.input.split(',')
                console.log(list.length, list)
                $scope.count = list.length
                if ($scope.count > 3) {
                    $scope.msg = "Too much!"
                } else {
                    $scope.msg = "Enjoy!"
                }
            } else {
                $scope.msg = "Please enter data first"
            }
        }
    }
})();
