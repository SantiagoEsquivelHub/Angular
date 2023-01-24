let app = angular.module("ToDoList", ["LocalStorageModule"])

app.service('ToDoService', function(localStorageService){

    this.key = "angular-todolist"

    if (localStorageService.get(this.key)) {
        this.activities = localStorageService.get(this.key)
    } else {
        this.activities = [];
    }

    this.add = (newActv) => {
        this.activities.push(newActv)
        this.updateLocalStorage()

    }
    this.clean = () => {
        this.activities = []
        this.updateLocalStorage()
        return this.getAll()

    }
    this.updateLocalStorage = () => {
        localStorageService.set(this.key, this.activities)
    }
    this.getAll = () => {
        return this.activities
    }
    this.removeItem = (item) => {
        this.activities = this.activities.filter((activity) => {
            return activity !== item;
        })
        this.updateLocalStorage()
        return this.getAll()
    }

}).controller("TodoController", function($scope, ToDoService){
    $scope.newActv = {}
    $scope.todo = ToDoService.getAll()
    
    $scope.addActv = () => {
        ToDoService.add($scope.newActv)
        $scope.newActv = {}
    }

    $scope.removeActv = (item) => {
        $scope.todo = ToDoService.removeItem(item)
    }

    $scope.cleanActv = () => {
        $scope.todo = ToDoService.clean()
    }

})