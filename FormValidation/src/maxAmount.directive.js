(function (module) {

    var link = function (scope, element, attrs, ngModelCtrl) {
        ngModelCtrl.$validators.maxAmount = function(value) {
            // TODO make validation here - return true if the value from the field is less than the limit set in maxAmount param
            return value <= scope.maxAmount;
        };
    };

    var MaxAmount = function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                maxAmount: '=maxAmount'
            },
            link: link
        };
    };

    module.directive("maxAmount", MaxAmount);

}(angular.module("formValidationApp")));
