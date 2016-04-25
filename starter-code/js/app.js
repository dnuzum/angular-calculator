// console.log('app.js was loaded.');
var app = angular.module("CalcApp", []);

var calcController = app.controller("CalcCtrl", [
  "$scope",
  function($scope) {
    $scope.calcValue = 0;
    $scope.memory = null;
    $scope.result = 0;
    $scope.operation = null;

    $scope.numClick = function(num) {
      if ($scope.calcValue == 0) {
        $scope.calcValue = num;
      } else {
        $scope.calcValue += String(num);
      }
      $scope.calcValue = Number($scope.calcValue)
    };


  }
]);