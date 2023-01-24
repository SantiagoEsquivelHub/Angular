let app = angular.module("CustomDirective", [])
app.directive('backImg', function () {
    return function (scope, element, attrs) {
        attrs.$observe('backImg', function (value) {
            element.css({
                "background": "url(" + value + ")",

            })
        })
    }
}).controller("AppCtrl", ($scope, $http) => {

    let resp = $http.get('http://api.github.com/users/urielhdz/repos')
    resp.then((response) => {
        console.log(response.data)
        $scope.repos = response.data
    }), ((error) => {
        console.log(error)

    })
})