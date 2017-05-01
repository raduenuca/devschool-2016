(function (module) {
    var ibanValidator = function ($q, $http) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModelCtrl) {
                ngModelCtrl.$asyncValidators.ibanValidator = function (value) {
                    return $http.get('data/validIbans.json').then(function successCallback(response) {
                        var ibans = Object.keys(response.data).map(function (user) {
                            return response.data[user];
                        });
                        if (ibans.indexOf(value) === -1) {
                            return $q.reject();
                        }
                        return $q.resolve();
                    });
                };
            }
        };
    };

    module.directive("ibanValidator", ibanValidator);

}(angular.module("formValidationApp")));
