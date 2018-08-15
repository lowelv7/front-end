var app = angular.module('demo', []);


app.controller('Search', function($scope,$http) {


    $http.get('http://localhost:8888/bookmanage/search?name=*').
        then(function(response) {
            $scope.books = response.data;
           
        });
});


app.controller('Read', function($scope, $http) {
    $http.get('http://localhost:8888/bookmanage/read?id=1&name=2').
        then(function(response) {
            $scope.book = response.data;
        });
});

app.controller('Create', function($scope, $http) {

	$scope.createBook = function (id,name,author) {
		    $http.get('http://localhost:8888/bookmanage/create?id='+id+'&name='+name+'&author='+author);

	}
    $http.get('http://localhost:8888/bookmanage/create?id=4&name=4book&author=4a').
        then(function(response) {
            $scope.book2 = response.data;
        });
});