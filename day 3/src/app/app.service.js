(function (module) {

    var toDoService = function ($http) {

        var getItems = function () {
            return $http.get("http://www.mocky.io/v2/5822130a1200009f2b6f484b");
        };

        return {
            getItems: getItems
        }
    };

    module.factory("toDoService", toDoService);
}(angular.module("toDoApp")));
