var myApp = angular.module('Myapp', [])
    .controller('firstController', function ($scope) {
        $scope.name = "pankajan";

        $scope.array = [
            { name: "ayanibas", age: 23, gender: 1},
            { name: "iklid", age: 24, gender: 1 },
            { name: "ahsunaj", age: 24, gender: 1 },
            { name: "aknawiht", age: 25, gender: 1 },
            { name: "akidnar", age: 24, gender: 1 }];

        $scope.searchthis = function(word){
            console.log(word);
        }

        $scope.search = function (item) {
            console.log($scope.searchText);
            if ($scope.searchText == undefined) {
                return true;
            }else
            if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
                return true;
            }
        }
    });