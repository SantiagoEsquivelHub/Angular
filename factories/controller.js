let app = angular.module("ToDoList", ["LocalStorageModule"])

app.factory('ToDoService', (localStorageService) => {

    let toDoService = {}
    toDoService.key = "angular-todolist"
    toDoService.activities = []

    if (localStorageService.get(toDoService.key)) {
        toDoService.activities = localStorageService.get(toDoService.key)
    } else {
        toDoService.activities = [];
    }

    toDoService.add = (newActv) => {
        toDoService.activities.push(newActv)
        toDoService.updateLocalStorage()

    }
    toDoService.clean = () => {
        toDoService.activities = []
        toDoService.updateLocalStorage()
        return toDoService.getAll()

    }
    toDoService.updateLocalStorage = () => {
        localStorageService.set(toDoService.key, toDoService.activities)
    }
    toDoService.getAll = () => {
        return toDoService.activities
    }
    toDoService.removeItem = (item) => {
        toDoService.activities = toDoService.activities.filter((activity) => {
            return activity !== item;
        })
        toDoService.updateLocalStorage()
        return toDoService.getAll()
    }
    
    return toDoService

})
    .controller("TodoController", ($scope, ToDoService) => {
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