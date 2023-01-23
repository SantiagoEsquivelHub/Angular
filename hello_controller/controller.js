let app = angular.module("MyFirstApp", [])
app.controller("FirstController", ["$scope", "$http"], ($scope) => {
    $scope.name = "Santiago";
    $scope.newComment = {}
    $scope.comments = [
        {
            comment: "Good tutorial",
            username: "veterano_912"
        },
        {
            comment: "Bad tutorial",
            username: "another_user"
        },
    ]
    $scope.addComment = () => {
        $scope.comments.push($scope.newComment)
    }
})