(function () {
    "use strict";
    angular.module('data')
    .service('MenuDataService', menuDataService);

    menuDataService.$inject = ['$http']
    function menuDataService ($http) {
        const srv = this;
        console.log('Service');
        srv.getAllCategories = function () {
            console.log('Getting all categories');
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/categories.json"
            }).then((res) => {
                console.log(res)
                return res.data;
            });
        };

        srv.getItemsForCategory = function (categoryShortName) {
            console.log('Getting all items');
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName
            }).then((res) => {
                console.log(res)
                return res.data.menu_items;
            });
        };
    };
})();