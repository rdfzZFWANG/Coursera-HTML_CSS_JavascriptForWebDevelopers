(function () {
    "use strict";
    angular.module('NarrowItDownApp', [])
    .service('MenuSearchService', menuSearchService)
    .controller("NarrowItDownController", narrowItDownController)
    .directive('foundItems', foundItems);

    menuSearchService.$inject = ['$http']
    function menuSearchService ($http) {
        const service = this;
        
        service.getMatchedMenuItems = function (searchItem) {
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            }).then(function (res) {
                const menuItems = res.data.menu_items;
                var toRet = [];
                for (let i = 0; i < menuItems.length; i++) {
                    if (menuItems[i].description.indexOf(searchItem) !== -1) {
                        toRet.push(menuItems[i]);
                        console.log(menuItems[i]);
                    };
                };
                return toRet
            });
        };
    };

    narrowItDownController.$inject = ["MenuSearchService"]
    function narrowItDownController(service) {
        const ctrl = this;
        ctrl.found = null;
        ctrl.getMatchedMenuItems = function (searchItem) {
            if (searchItem) {
                service.getMatchedMenuItems(searchItem).then(function (res) {
                    console.log(res);
                    ctrl.found = res;
                });
            } else {
                ctrl.found = [];
            }  
        };
        ctrl.removeItem = function (index) {
            console.log('removing');
            ctrl.found.splice(index, 1);
        };
    };

    function foundItems() {
        var ddo = {
            restrict: 'E',
            scope: {
                foundItems: '<',
                onRemove: '&'
            },

            templateUrl: 'loader/itemsloaderindicator.template.html'
        };

        return ddo;
    };
})();
