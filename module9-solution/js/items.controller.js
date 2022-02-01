(function () {
    angular.module('MenuApp')
    .controller('ItemsController', Controller);

    Controller.$inject = ['items'];
    function Controller (items) {
        const ctrl = this;
        ctrl.items = items;
    };
})();