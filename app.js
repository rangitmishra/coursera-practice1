(function() {
  angular.module('myFirstApp',[])
  .controller('myFirstController',['$scope',myFirstController]);

  	function myFirstController($scope) {
  	   $scope.message = "";
  	   $scope.foodsArray = "";

        $scope.ckecker = function () {
       	//console.log($scope.foodsArray);
       	    var array = $scope.foodsArray.split(',');
            console.log(array.length);
            if($scope.foodsArray.length == 0) {
            	$scope.message = "Please enter data first";
            }
            else if(array.length <= 3) {
            	$scope.message = "Enjoy!";
            }
            else {
            	$scope.message = "Too much!";
            }
            



       };
  }
})();

//minified javascript (go to following URL:https://javascript-minifier.com/ and paste ur javascript code to get the minified javascript code)
//!function(){function o(o){o.sayHello=function(){return"Hello Coursera"}}angular.module("myFirstApp",[]).controller("myFirstController",["$scope",o])}();