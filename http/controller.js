let app = angular.module("MyFirstApp", [])

app.controller("FirstController", ($scope, $http) => {
    $scope.posts = [];
    $http.get("http://jsonplaceholder.typicode.com/posts/")
        .then((resp) => {
            console.log(resp)
            $scope.posts = resp.data
        })
        , ((error) => {
            console.log(error)
        })

})