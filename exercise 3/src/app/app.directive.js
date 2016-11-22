(function (module) {
    'use strict';

    function helloWorld() {
        var directive = {
            restrict: 'E',
            replace: true,
            template: '<div>blah blah !!!</div>',
        };

        return directive;
    }

    module.directive('helloWorld', helloWorld);

}(angular.module("timeSheetApp")));
