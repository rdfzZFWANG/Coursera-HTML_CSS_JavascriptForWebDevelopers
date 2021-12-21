(function () {
    "use strict";
    angular.module("App", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service('Service', Service);

    function Service() {
        var service = this;
        var itemsToBuy = [
            {name: 'cookies', quantity: 1},
            {name: 'cookies', quantity: 2},
            {name: 'cookies', quantity: 3},
            {name: 'cookies', quantity: 5},
            {name: 'cookies', quantity: 8}
        ];
        var itemsBought = [];

        service.getToBuy = function () {
            return itemsToBuy;
        }

        service.getBought = function () {
            return itemsBought;
        }

        service.moveItem = function (index) {
            itemsBought.push(itemsToBuy[index]);
            itemsToBuy.splice(index, 1);
        }
    }

    ToBuyController.$inject = ['$scope', 'Service'];
    function ToBuyController($scope, Service) {
        this.items = Service.getToBuy();
        this.moveItem = Service.moveItem;
    }

    AlreadyBoughtController.$inject = ['$scope', 'Service'];
    function AlreadyBoughtController($scope, Service) {
        this.items = Service.getBought();
    }
})();
