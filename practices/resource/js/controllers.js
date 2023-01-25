angular.module("FinalApp")
    .controller("MainController", function ($scope, $resource, PostResource) {
        User = $resource("https://jsonplaceholder.typicode.com/users/:id", { id: "@id" })

        $scope.posts = PostResource.query();
        $scope.users = User.query();
        $scope.removePost = function (post) {
            PostResource.delete({ id: post.id }, function (data) {
                console.log(data)
                $scope.posts = $scope.posts.filter((element) => {
                    return element.id !== post.id
                })
            })
        }
    })
    .controller("PostController", function ($scope, $routeParams, PostResource) {
        $scope.post = PostResource.get({ id: $routeParams.id });

    })
    .controller("NewPostController", function ($scope, PostResource, $location) {
        $scope.post = {}
        $scope.title = "Create post!"
        $scope.savePost = function () {
            // console.log(PostResource.save({ data: $scope.post }))
            PostResource.save({ data: $scope.post }, function (data) {
                console.log(data)
                $location.path("/")
            })
        }
    })
    .controller("EditPostController", function ($scope, PostResource, $routeParams, $location) {
        $scope.post = PostResource.get({id: $routeParams.id})
        $scope.title = "Edit post!"
        $scope.savePost = function () {
            // console.log(PostResource.save({ data: $scope.post }))
            PostResource.update({id: $routeParams.id}, { data: $scope.post }, function (data) {
                console.log(data)
                $location.path("/post/" + $routeParams.id)
            })
        }
    })