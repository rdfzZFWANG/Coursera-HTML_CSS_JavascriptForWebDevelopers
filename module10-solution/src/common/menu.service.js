(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.info = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dish: null
};
  service.signUp = false;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (shortName) {

    return $http.get(ApiPath + '/menu_items/'+ shortName +'.json').then(function (response) {
      return response.data;
    });
  };

  service.setUserInfo = function (info, dish) {
    service.info.firstName = info.firstName;
    service.info.lastName = info.lastName;
    service.info.email = info.email;
    service.info.phone = info.phone;
    service.info.dish = dish;
    service.signUp = true;
  };

  service.getUserInfo = function () {
    return service.info;
  };

  service.getSignUp = function () {
    return service.signUp;
  }
}
})();
