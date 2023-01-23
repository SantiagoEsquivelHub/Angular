let app = angular.module("MyFirstApp", [])
app.run(($rootScope)=> {
    $rootScope.name = "Santiago"
})
app.controller("FirstController", ($scope) => {
    $scope.name = "Sanchez"
   
}).controller("ChildController", ($scope) => {
   
})