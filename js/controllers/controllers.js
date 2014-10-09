resApp.controller('CommonCtrl',function($scope){
	$scope.movies=[];
});
resApp.controller('HomeCtrl',function($scope,Movie,$window){
	$scope.movies=Movie.query();
	$scope.delMov=function(movie){
		movie.$delete(function(){
			$window.location.href='';
		});
	};
});
resApp.controller('SingleMovieCtrl',function($scope,$routeParams,Movie){
	$scope.movies=Movie.query();
	$scope.movie=Movie.get({id:$routeParams.movieid});
		
});
resApp.controller('EditMovCtrl',function($scope,Movie,$routeParams,$window){
	$scope.movie=Movie.get({id:$routeParams.movieid});
	$scope.updateMovie=function(){
		$scope.movie.$update(function(){
			$window.location.href='';
		});
	};
});
resApp.controller('AddCtrl',function($scope,$window,Movie){
	$scope.movie=new Movie();
	$scope.addMov=function(){
		$scope.movie.$save(function(){
			$window.location.href='';
		})
	}
});