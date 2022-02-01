(function () {
    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

        // Home page
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.template.html'
        })
        // Categories page
        .state('categories', {
            url: '/categories',
            templateUrl: 'templates/main-categories.template.html',
            controller: 'CategoryController as cc',
            resolve: {
                categories: ['MenuDataService', function (MenuDataService) {
                
                  return MenuDataService.getAllCategories();
                }]
            }
        })
        // Items page
        .state('items', {
            url: '/categories/{short_name}',
            templateUrl: 'templates/main-items.template.html',
            controller: 'ItemsController as ic',
            params: {
                short_name:null
            }, resolve: {
                items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                
                    return MenuDataService.getItemsForCategory($stateParams.short_name);
                  }]
            }
        })
    };
})();