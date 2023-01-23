let app = angular.module("MyFirstApp", [])

app.controller("FirstController", ($scope, $http) => {
    $scope.posts = [];
    $scope.loading = true;
    $scope.newPost = {};
    $http.get("http://jsonplaceholder.typicode.com/posts/")
        .then((resp) => {
            console.log(resp)
            $scope.posts = resp.data
            $scope.loading = false;
        })
        , ((error) => {
            $scope.loading = false;
            console.log(error)
        })


    $scope.addPost = () => {
        $http.post("http://jsonplaceholder.typicode.com/posts/", {
            title: $scope.newPost.title,
            body: $scope.newPost.body,
            userId: 1
        },)
            .then((resp) => {
                console.log(resp)
                $scope.posts.push($scope.newPost)
                $scope.newPost = {}
            }), ((error) => {
                console.log("error: ", error)
            })
    }
})