var module = angular.module("test_results", [
    "ngRoute",
    "ngAnimate"
]);

(function (app) {
    app.config(function ($routeProvider) {
        var base = "/views/";
        $routeProvider
            .when("/", {
                templateUrl: base + "main/index.html",
                controller: "HomeController",
                controllerAs: "vm"
            });
    });
})(angular.module("test_results"));
