(function (module) {

    var timeSheetService = function ($http) {

        var getTimeSheet = function () {
            //return $http.get("http://www.mocky.io/v2/582de80b1100009812d76159");

            var url = "http://www.mocky.io/v2/582defe31100007313d76163?callback=JSON_CALLBACK";

            //return $http.get(url);
            return $http.jsonp(url);
        };

        return {
            getTimeSheet: getTimeSheet
        };
    };

    module.factory("timeSheetService", timeSheetService);
}(angular.module("timeSheetApp")));
