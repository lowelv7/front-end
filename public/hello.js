angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://localhost:8888/bookmanage/read?id=1&name=2').
        then(function(response) {
            $scope.book = response.data;
        });
});