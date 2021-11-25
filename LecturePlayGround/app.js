(function () {
    "use strict";
    var x = 10;
    angular.module("App", [])
    .controller("MyFirstController", MyFirstController);
    
    function MyFirstController($scope) {
        $scope.name = "Aldrich";
        $scope.Hello = function () {
            return "Hello World again";
        }
        $scope.change = function () {
            var string = $scope.name;
            var newString = "";
            if (string.length > 0) {
                for (var i = 0; i < string.length; i++) {
                    newString += string.charCodeAt(i);
                }
            }
            return newString;
        }
        $scope.roll = function () {
            var string = $scope.name;
            var newString = "";
            if (string.length > 0) {
                for (var i = 1; i < string.length; i++) {
                    newString += string.charAt(i);
                }
                newString += string.charAt(0);
            }
            $scope.name = newString;
        }
    }
})();
