(function () {
    angular.module('MenuApp')
    .controller('CategoryController', Controller);

    Controller.$inject = ['categories'];
    function Controller (categories) {
        const ctrl = this;
        ctrl.categories = categories;
    };
})();