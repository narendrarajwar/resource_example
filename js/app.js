var resApp=angular.module('resApp',['ngRoute','ngResource']);

resApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'views/viewall.html',
		controller:'HomeCtrl'
	})
	.when('/add',{
		templateUrl:'views/addnew.html',
		controller:'AddCtrl'
	})
	.when('/single/:movieid',{
		templateUrl:'views/view-one.html',
		controller:'SingleMovieCtrl'
	})
	.when('/edit/:movieid',{
		templateUrl:'views/edit-movie.html',
		controller:'EditMovCtrl'
	})
	.otherwise({
		redirectTo:'/'
	});
});