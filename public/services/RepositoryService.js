(function (app) {
    "use strict";
    app.service("RepositoryService", RepositoryService);
    RepositoryService.$inject = ["$http"];

    function RepositoryService($http) {
        var svc = this;
        svc.getData = getData;

        function getData() {
            return $http.get("/api/main");
        };
    };
})(angular.module("test_results"));
