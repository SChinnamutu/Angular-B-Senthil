 var app = angular.module('app', ['ngResource','ui.router']);
 
(function(window){
	
	
app.config(['$stateProvider', function($stateProvider) {
		
		$stateProvider
		     .state('login', {
		    	url : '/',
		    	templateUrl : 'html/login.html',
		    	controller : 'HomepageCtrl'
		     })
		     .state('confirm', {
		    	url : '/confirm',
		    	templateUrl : 'html/warning.html',
		    	controller : 'HomepageCtrl'
		     })
		      .state('dashboard', {
		    	url : '/dashboard',
		    	templateUrl : 'html/home.html',
		    	controller : 'HomepageCtrl'
		     })
		     .state('home', {
		    	url : '/home',
		    	templateUrl : 'html/home.html',
		    	controller : 'HomepageCtrl'
		     })
		     .state('addNew', {
		    	url : '/addNew',
		    	templateUrl : 'html/addnew.html',
		    	controller : 'HomepageCtrl'
		     })
		     .state('view', {
		    	url : '/view',
		    	templateUrl : 'html/view.html',
		    	controller : 'HomepageCtrl'
		     })
		     .state('delete', {
		    	url : '/delete',
		    	templateUrl : 'html/delete.html',
		    	controller : 'HomepageCtrl'
		     })
		      .state('editUser', {
		    	url : '/editUser',
		    	templateUrl : 'html/edit.html',
		    	controller : 'HomepageCtrl'
		     })
		     .state('edit', {
		    	url : '/edit/:id',
		    	templateUrl : 'html/update.html',
		    	controller : 'EditUserCtrl'
		     });
	}]);
	console.log("Homepage Config loaded..");
	
}(window));