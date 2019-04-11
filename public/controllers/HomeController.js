(function (app) {
    "use strict";
    app.controller("HomeController", HomeController);
    HomeController.$inject = ["RepositoryService"];
    function HomeController(repository) {
        var vm = this;
        repository.getData().then(function (result) {
            vm.data = [];
            var count = 0;
            for (var row in result.data.preds) {
                vm.data.push({ pred: result.data.preds[row].trim(), ref: result.data.refs[row].trim() });
                count += 1;
                if (count > 10000) {
                    break;
                }
            }
        });
    }
})(angular.module("test_results"));
