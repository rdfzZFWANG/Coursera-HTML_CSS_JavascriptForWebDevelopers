(function () {
    angular.module('MenuApp')
    .controller('ItemsController', Controller);

    Controller.$inject = ['$stateParams', 'MenuDataService'];
    function Controller ($stateParams, MenuDataService) {
        const ctrl = this;
        ctrl.items = [],
        MenuDataService
        .getItemsForCategory($stateParams.short_name).then(
            (res) => {
                ctrl.items = res;
            }
        );
    };
})();