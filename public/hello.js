var app = angular.module('demo', []);


app.controller('Search', function($scope,$http) {

	$scope.search = function (name) {
		    $http.get('http://localhost:8888/bookmanage/search?name='+name).
		    then(function(response) {
            $scope.books = response.data;
        });

	}

	//auto load library books by default
    $http.get('http://localhost:8888/bookmanage/search?name=*').
        then(function(response) {
            $scope.books = response.data;
           
        });
});


// app.controller('Read', function($scope, $http) {
//     $http.get('http://localhost:8888/bookmanage/read?id=1&name=2').
//         then(function(response) {
//             $scope.book = response.data;
//         });
// });

app.controller('Create', function($scope, $http) {

	$scope.createBook = function (id,name,author) {
		    $http.get('http://localhost:8888/bookmanage/create?id='+id+'&name='+name+'&author='+author);

	}
    
});