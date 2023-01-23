let app = angular.module("mainModule", [])

app.filter("upperCase", () => (text) => {
    console.log(text)
    return text.toUpperCase()
}).controller("FilterController", ($scope) =>{
    $scope.my_html = "Hello world!"
    $scope.my_json = {
        title: "Hello", 
        body: "Hello world"
    }

})