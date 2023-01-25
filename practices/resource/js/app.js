angular.module("FinalApp", ["lumx", "ngRoute", "ngResource"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                controller: "MainController",
                templateUrl: "resource/templates/home.html"
            })
            .when("/post/:id", {
                controller: "PostController",
                templateUrl: "resource/templates/post.html"
            })
            .when("/posts/new", {
                controller: "NewPostController",
                templateUrl: "resource/templates/post_form.html"
            })
            .when("/posts/edit/:id", {
                controller: "EditPostController",
                templateUrl: "resource/templates/post_form.html"
            })
    })