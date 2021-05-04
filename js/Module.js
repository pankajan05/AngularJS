var myApp = angular.module('Myapp', [])
    .controller('firstController', function ($scope) {
        $scope.name = "pankajan";

        $scope.array = [
            { name: "ayanibas", age: 23 },
            { name: "iklid", age: 24 },
            { name: "ahsunaj", age: 24 },
            { name: "aknawiht", age: 25 },
            { name: "akidnar", age: 24 }];

        $scope.searchthis = function(word){
            console.log(word);
        }
    });