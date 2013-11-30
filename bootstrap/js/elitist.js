var app = angular.module('elitistfursapp', []);
    app.config(function($interpolateProvider) { 
      $interpolateProvider.startSymbol('(('); 
      $interpolateProvider.endSymbol('))');
    });

function elitistCtrl($scope){
	
	$scope.DoAnother = true;

	$scope.checked = function(){
		$scope.Result = 'YES';
		$scope.Hidden = true;
		$scope.DoAnother = false;
	
	};

	$scope.reset = function() {
		$scope.Result = '';
		$scope.Hidden = false;
		$scope.DoAnother = true;
		$scope.furryGroup = '';
	};

};

