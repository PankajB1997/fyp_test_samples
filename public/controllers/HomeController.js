(function (app) {
    "use strict";
    app.controller("HomeController", HomeController);
    HomeController.$inject = ["RepositoryService"];
    function HomeController(repository) {
        var vm = this;
        repository.getData().then(function (result) {
            console.log(result);
        });
    }
})(angular.module("test_results"));
