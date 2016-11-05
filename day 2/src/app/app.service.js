(function (module) {

    var toDoService = function ($http) {

        var getItems = function () {
            return $http.get("http://www.mocky.io/v2/5818d3192800006e19e80fb7");
        };

        return {
            getItems: getItems
        };
    };

    module.factory("toDoService", toDoService);
}(angular.module("toDoApp")));
