
var kido_app = angular.module('Kido', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngMaterialSidemenu']);

kido_app.config(function($routeProvider){
	$routeProvider
		.when("/",{templateUrl: "page/home.html"})
		.when("/home",{templateUrl: "page/home.html"})
		.when("/about",{templateUrl: "page/about.html"})
		.when("/404",{templateUrl: "page/404.html"})
		.otherwise({
			redirectTo: '/404'
		})
});

kido_app.controller('ProjectCtrl', function ($scope) {
	
});

kido_app.controller('DrawerCtrl', function($scope, $mdSidenav){
	$scope.toggleDrawer = buildToggler('drawer-left');
	$scope.drawerItems = [];

	var drawerItemss = [{name:"Loading..."}];
	$.ajax({
        type: "GET",
        url: "https://api.github.com/users/kido1611/repos",
        data: "&sort=updated&type=all&per_page=200&direction=desc",
        dataType: "json",
        success: function(result) {
            drawerItemss = result;

            for( var i=0;i<drawerItemss.length;i++) {
            	if(!drawerItemss[i].fork && drawerItemss[i].owner.login=="kido1611"){
            		$scope.drawerItems.push(drawerItemss[i]);
            	}
            }
        }
    });

	function buildToggler(navID) {
		return function() {
			$mdSidenav(navID).toggle();
		}
	}
});
