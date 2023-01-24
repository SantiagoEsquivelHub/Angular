angular.module("CustomDirective").controller("ReposController", function ($scope, $http) {
    let resp = $http.get('http://api.github.com/users/twitter/repos')
    resp.then((response) => {
        $scope.posts = response.data
        $scope.repos = []

        for (let i = (response.data).length - 1; i >= 0; i--) {
            let repo = response.data[i]
            $scope.repos.push(repo.name)
        }

    }), ((error) => {
        console.log(error)

    })
}).controller("RepoController", function ($scope, $http, $routeParams) {
    $scope.repo = {}
    console.log($routeParams.name)

    let resp = $http.get("http://api.github.com/repos/twitter/" + $routeParams.name)
    resp.then((response) => {
        console.log(response)
        $scope.repo = response.data
    })
})