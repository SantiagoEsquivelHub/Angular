let app = angular.module("ToDoList", ["LocalStorageModule"])

app.controller("TodoController", ["$scope", "localStorageService", ($scope, LocalStorageService) => {
    if(LocalStorageService.get("angular-todolist")){
        $scope.todo = LocalStorageService.get("angular-todolist")
    }else{
        $scope.todo = [];
    }
    $scope.newActv = {}
    $scope.$watchCollection('todo', (newValue, oldvalue) => {
        LocalStorageService.set("angular-todolist", $scope.todo)
    })
    $scope.addActv = () => {
        $scope.todo.push($scope.newActv)
        $scope.newActv = {}
    }
    $scope.cleanActv = () => {
        $scope.todo = []
    }
}])